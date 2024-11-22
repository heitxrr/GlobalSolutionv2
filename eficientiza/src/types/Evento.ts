export type Evento = {
  idEvento: number;
  tituloEvento: string;
  detalhesEvento: string;
  dataEvento: string;
  urlImagemEvento: string;
};

export interface DetalhesEventoProps {
  params: { id: string }; // Define que o ID é uma string
}
