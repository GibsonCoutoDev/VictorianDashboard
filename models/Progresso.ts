export interface Progresso {
  id: string;
  usuarioId: string;
  disciplinaId: string;
  materiaId?: string;
  data: Date;
  tarefaId?: string;
  tempoEstudado: number;
  tarefasConcluidas: number;
  tarefasPendentes: number;
  metasCumpridas: number;
  porcentagemConcluida: number;
  pontuacao?: number;
  sentimento?: SentimentoEstudo;
  dificuldades?: string[];
  notas?: string;
}

export enum SentimentoEstudo {
  MUITO_PRODUTIVO = "muito_produtivo",
  PRODUTIVO = "produtivo",
  NEUTRO = "neutro",
  DISTRAIDO = "distraido",
  CONFUSO = "confuso",
  CANSADO = "cansado",
  FRUSTRADO = "frustrado",
}
