export enum Prioridade {
  Alta = 1,
  Media = 2,
  Baixa = 3,
}

export interface Disciplina {
  nome: string;
  professor: string;
  cargaHorariaTotal: number;
  cargaHorariaSemanal: number;
  cargaHorariaEstudada: number;
  objetivo?: string;
  topicos: string[];
  prioridade: Prioridade;
  concluida: boolean;
  dataInicio: Date;
  dataFim?: Date;
  dataUltimaAtualizacao: Date;
  tags: string[];
  anotacoes: string[];
}
