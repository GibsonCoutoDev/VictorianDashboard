export interface Tarefa {
  id: string;
  titulo: string;
  descricao: string;
  tipoTarefa: TipoTarefa;
  materiaId: string;
  disciplinaId: string;
  dataInicio: Date;
  dataConclusao?: Date;
  prazo?: Date;
  duracao?: number;
  status: StatusTarefa;
  concluida: boolean;
  prioridade: Prioridade;
  tags: string[];
  anotacoes: string[];
  disciplina?: Disciplina;
}

export enum StatusTarefa {
  PENDENTE = "pendente",
  EM_ANDAMENTO = "em_andamento",
  CONCLUIDA = "concluida",
  ATRASADA = "atrasada",
  CANCELADA = "cancelada",
}

export enum TipoTarefa {
  LEITURA = "leitura",
  EXERCICIO = "exercicio",
  PROJETO = "projeto",
  PROVA = "prova",
  TRABALHO = "trabalho",
  REVISAO = "revisao",
}
