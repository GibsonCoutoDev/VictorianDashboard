export interface Usuario {
  id: string;
  nome: string;
  email: string;
  senhaHash: string;
  dataCriacao: Date;
  ultimoAcesso: Date;
  fotoPerfil?: string;
  metaDiaria: number;
  configuracao: Configuracao;
}

export interface Configuracao {
  tema: string;
  notificacoesAtivadas: boolean;
  horaInicioEstudos: string;
  horaFimEstudos: string;
}
