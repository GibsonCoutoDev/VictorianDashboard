import { Tarefa } from './Tarefa';
import { Notificacao } from './Notificacao';
import { Estatistica } from './Estatistica';
import { Progresso } from './Progresso';

export interface Cronograma {
  id: string;
  usuarioId: string;
  titulo: string;
  descricao: string;
  dataInicio: Date;
  dataFim: Date;
  recorrencia: Recorrencia;
  diasSemana: DiaDaSemana[]; 
  horarioInicio: string; // Formato "HH:MM" 
  horarioFim: string; // Formato "HH:MM"
  cor?: string; 
  tarefas?: Tarefa[]; 
  progresso?: Progresso; 
  notificacoes?: Notificacao[]; 
  estatisticas?: Estatistica[]; 
  slots: Slot[];
  ativo: boolean;
  visibilidade?: string; 
  compartilhadoCom?: string[]; 
}

export enum Recorrencia {
  UNICA = "unica",
  DIARIA = "diaria",
  SEMANAL = "semanal",
  MENSAL = "mensal",
  PERSONALIZADA = "personalizada"
}

export enum DiaDaSemana {
  DOMINGO = 0,
  SEGUNDA = 1,
  TERCA = 2,
  QUARTA = 3,
  QUINTA = 4,
  SEXTA = 5,
  SABADO = 6
}

export interface Slot {
  id: string;
  cronogramaId: string;
  disciplinaId?: string;
  materiaId?: string;
  tarefaId?: string;
  titulo: string;
  descricao?: string;
  dataInicio: Date;
  dataFim: Date;
  duracao: number; // Em minutos
  cor?: string;
  status: StatusSlot;
  concluido: boolean;
}

export enum StatusSlot {
  PLANEJADO = "planejado",
  EM_ANDAMENTO = "em_andamento",
  CONCLUIDO = "concluido",
  CANCELADO = "cancelado",
  ADIADO = "adiado"
}