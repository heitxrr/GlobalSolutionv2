import { ChangeEvent, FormEvent, RefObject, useCallback, useEffect, useState } from 'react'

// Define a interface para o estado do formulário, permitindo qualquer chave com valores de qualquer tipo
export interface FormState {
  [key: string]: string
}

// Define a interface para o estado dos erros do formulário, onde cada chave é um campo e o valor é uma mensagem de erro
interface ErrorsState {
  [key: string]: string
}

// Define o tipo de função que configura erros personalizados, recebendo um evento de formulário e retornando um objeto ErrorsState
type SetCustomErrorsFunction = (target: HTMLFormElement) => ErrorsState

// Define o tipo de função de callback para submissão, que recebe os valores do formulário e opcionalmente o evento do formulário, retornando uma Promise
type SubmitCallbackFunction = (values: FormState, target?: FormEvent<HTMLFormElement>) => Promise<void>

// Hook personalizado useForm para gerenciar formulários
const useForm = (
  formRef: RefObject<HTMLFormElement>, // Elemento do formulário
  initialState: FormState, // Estado inicial do formulário
  submitCallback: SubmitCallbackFunction, // Função de callback executada na submissão do formulário
  errorCallback?: (error: Error) => Promise<void>, // Função opcional para lidar com erros
  setCustomErrors?: SetCustomErrorsFunction, // Função opcional para definir erros personalizados
) => {
  const [loading, setLoading] = useState(false) // Estado de loading do formulário, inicializado como false
  const [data, setData] = useState<FormState>(initialState) // Estado dos dados do formulário, inicializado com o estado inicial
  const [errors, setErrors] = useState<ErrorsState>({}) // Estado dos erros do formulário, inicializado como um objeto vazio
  const [errorsCount, setErrorsCount] = useState(0) // Contador de erros do formulário, inicializado como 0
  const form = formRef.current // Obtém o elemento do formulário a partir da referência

  // Efeito para lidar com mudanças no Elemento HTML do formulário
  useEffect(() => {
    handleErros()
    // Desabilita o aviso de dependências faltantes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]) // Executa o efeito quando o formulário mudar

  const countErrors = (errorsObject: ErrorsState) => {
    const count = Object.keys(errorsObject).length // Conta o número de erros
    setErrorsCount(count) // Atualiza o contador de erros
    return count // Retorna o número de erros
  }

  // Função para validar os campos do formulário
  const validateDefault = useCallback(() => {
    // Se o formulário não existir, retorna um objeto vazio
    if (form === null) {
      return {}
    }
    const formData = new FormData(form) // Cria um objeto FormData com os dados do formulário
    const isFormValid = form.checkValidity() // Verifica se o formulário é válido

    const newErrors: ErrorsState = {} // Objeto para armazenar novos erros
    if (!isFormValid) {
      for (const [name] of formData) { // Itera sobre os campos do formulário
        const element = form.elements.namedItem(name) // Obtém o elemento do campo pelo nome
        if (element instanceof HTMLInputElement) {
          newErrors[name] = element.validationMessage // Armazena a mensagem de validação do campo no objeto de erros
        }
      }
    }

    return newErrors // Retorna os novos erros
  }, [form])

  const handleErros = useCallback(async () => {
    if (form === null) { // Se o formulário não existir, não faz nada
      return { validationErrors: {}, count: 0 }
    }
    const newErrors = validateDefault() // Valida os campos do formulário e obtém os erros
    const customErrors = setCustomErrors?.(form) // Obtém erros personalizados, se a função for fornecida
    const validationErrors = {
      ...newErrors, // Erros padrão
      ...customErrors // Erros personalizados
    }
    setErrors(validationErrors) // Atualiza o estado dos erros com os novos erros
    const count = countErrors(validationErrors) // Conta o número de erros

    // Retorna os erros e o contador de erros
    return {
      validationErrors,
      count
    }
  }, [validateDefault, setCustomErrors, form])

  // Função para lidar com a submissão do formulário
  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Previne o comportamento padrão de submissão do formulário

    if (loading) { // Se já estiver carregando, não faz nada
      return
    }

    setLoading(true) // Define o estado de loading como true

    const { count, validationErrors } = await handleErros() // Valida os campos do formulário e obtém os erros
    if (count) {
      setLoading(false)
      if (errorCallback instanceof Function) {
        await errorCallback(new Error('Invalid Form', {
          cause: {
            ...validationErrors // Passa os erros para a função onError, se fornecida
          }
        }))
      }
      return // Se houver erros, não faz nada
    }

    // Chama a função de callback de submissão passando os dados do formulário
    await submitCallback(data, e)

    setLoading(false) // Define o estado de loading como false após a submissão
  }, [loading, handleErros, submitCallback, data, errorCallback])

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target // Extrai o nome e o valor do campo alterado
    setData((oldData) => {
      return {
        ...oldData, // Mantém os dados antigos
        [name]: value // Atualiza o campo alterado
      }
    })


    await handleErros() // Valida os campos do formulário e obtém os erros
  }, [handleErros])

  // Retorna os estados e funções do hook
  return {
    data, // Dados do formulário
    errors, // Erros do formulário
    errorsCount, // Contador de erros
    loadingSubmit: loading, // Estado de loading do formulário
    handleChange, // Função para lidar com mudanças nos campos
    handleSubmit // Função para lidar com a submissão do formulário
  }
}

export default useForm // Exporta o hook personalizado useForm