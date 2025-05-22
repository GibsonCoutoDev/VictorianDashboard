export interface Notificacao {
  id: string;
  usuarioId: string;
  titulo: string;
  mensagem: string;
  referencia: string;
  tipoReferencia?: string;
  tipo: TipoNotificacao;
  dataCriacao: Date;
  dataLeitura?: Date;
  lida: boolean;
  acao?: string; //URL ou rota para navegação
  prioridade?: PrioridadeNotificacao;
}

export enum TipoNotificacao {
  TAREFA = "TAREFA",
  PROVA = "PROVA",
  LEMBRETE = "LEMBRETE",
  DISCIPLINA = "DISCIPLINA",
  CONQUISTA = "CONQUISTA",
  SISTEMA = "SISTEMA",
}

export enum PrioridadeNotificacao {
  BAIXA = "baixa",
  NORMAL = "normal",
  ALTA = "alta",
  URGENTE = "urgente",
}
