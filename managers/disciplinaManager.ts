import { Disciplina, Prioridade } from "../models/disciplina";

export function registrarEstudo(disciplina: Disciplina, horas: number): void {
  if (horas <= 0) return;

  disciplina.cargaHorariaEstudada += horas;
  disciplina.dataUltimaAtualizacao = new Date();

  if (disciplina.cargaHorariaEstudada >= disciplina.cargaHorariaTotal) {
    disciplina.cargaHorariaEstudada = disciplina.cargaHorariaTotal;
    disciplina.concluida = true;
  }
}

export function calcularProgresso(disciplina: Disciplina): number {
  if (disciplina.cargaHorariaTotal === 0) return 0;

  return (disciplina.cargaHorariaEstudada / disciplina.cargaHorariaTotal) * 100;
}

export function criarDisciplina(
  nome: string,
  cargaHorariaTotal: number,
  prioridade: Prioridade = Prioridade.Media,
): Disciplina {
  return {
    nome,
    cargaHorariaTotal,
    cargaHorariaEstudada: 0,
    cargaHorariaSemanal: 0,
    professor: "",
    objetivo: "",
    topicos: [],
    prioridade: prioridade,
    concluida: false,
    dataInicio: new Date(),
    tags: [],
    anotacoes: [],
    dataUltimaAtualizacao: new Date(),
  };
}
