'use client'
import UsuarioContext from "@/contexts/UsuarioContext"
import { useContext } from "react"

const useUsuario = () => {
    const context = useContext(UsuarioContext)

    if (!context) {
        throw new Error("useUsuario must be used within a UsuarioProvider")
    }

    return context
}

export default useUsuario