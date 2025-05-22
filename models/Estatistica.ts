export interface Estatistica {
  id: string;
  usuarioId: string;
  periodo: PeriodoDeTempo;
  dataInicio: Date;
  dataFim: Date;
  tempoTotalEstudado: number;
  tarefasConcluidas: number;
  tarefasPendentes: number;
  disciplinasAtivas: number;
  metasCumpridas: number;
  eficiencia: number; // Percentual
  distribuicaoPorDisciplina: DistribuicaoPorDisciplina[];
  melhorHorario: string;
  mediaDiaria: number;
  diasEstudados: number;
}

export interface DistribuicaoPorDisciplina {
  disciplinaId: string;
  disciplinaNome: string;
  tempoEstudado: number;
  percentual: number;
  cor: string;
}

export enum PeriodoDeTempo {
  DIARIO = "diario",
  SEMANAL = "semanal",
  MENSAL = "mensal",
  TRIMESTRAL = "trimestral",
  PERSONALIZADO = "personalizado",
}
