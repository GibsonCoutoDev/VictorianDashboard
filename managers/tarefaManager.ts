import { Tarefa, StatusTarefa, TipoTarefa } from "../models/Tarefa";
import { supabase } from "../lib/supabase";

export class TarefaManager {
  // Buscar todas as tarefas do usuário
  async buscarTodas(usuarioId: string): Promise<Tarefa[]> {
    const { data, error } = await supabase
      .from("tarefas")
      .select("*")
      .eq("usuarioId", usuarioId);

    if (error) throw error;
    return data as Tarefa[];
  }

  // Buscar tarefas por disciplina
  async buscarPorDisciplina(disciplinaId: string): Promise<Tarefa[]> {
    const { data, error } = await supabase
      .from("tarefas")
      .select("*")
      .eq("disciplinaId", disciplinaId);

    if (error) throw error;
    return data as Tarefa[];
  }

  // Buscar tarefas por matéria
  async buscarPorMateria(materiaId: string): Promise<Tarefa[]> {
    const { data, error } = await supabase
      .from("tarefas")
      .select("*")
      .eq("materiaId", materiaId);

    if (error) throw error;
    return data as Tarefa[];
  }

  // Buscar tarefa por ID
  async buscarPorId(id: string): Promise<Tarefa | null> {
    const { data, error } = await supabase
      .from("tarefas")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data as Tarefa;
  }

  // Buscar tarefas pendentes
  async buscarPendentes(usuarioId: string): Promise<Tarefa[]> {
    const { data, error } = await supabase
      .from("tarefas")
      .select("*")
      .eq("usuarioId", usuarioId)
      .eq("concluida", false)
      .order("prazo", { ascending: true });

    if (error) throw error;
    return data as Tarefa[];
  }

  // Buscar tarefas para hoje
  async buscarParaHoje(usuarioId: string): Promise<Tarefa[]> {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const amanha = new Date(hoje);
    amanha.setDate(amanha.getDate() + 1);

    const { data, error } = await supabase
      .from("tarefas")
      .select("*")
      .eq("usuarioId", usuarioId)
      .eq("concluida", false)
      .gte("dataInicio", hoje.toISOString())
      .lt("dataInicio", amanha.toISOString());

    if (error) throw error;
    return data as Tarefa[];
  }

  // Criar nova tarefa
  async criar(tarefa: Omit<Tarefa, "id">): Promise<Tarefa> {
    const { data, error } = await supabase
      .from("tarefas")
      .insert(tarefa)
      .select()
      .single();

    if (error) throw error;
    return data as Tarefa;
  }

  // Atualizar tarefa
  async atualizar(id: string, tarefa: Partial<Tarefa>): Promise<Tarefa> {
    const { data, error } = await supabase
      .from("tarefas")
      .update(tarefa)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data as Tarefa;
  }

  // Marcar tarefa como concluída
  async marcarComoConcluida(id: string): Promise<Tarefa> {
    const agora = new Date();

    const { data, error } = await supabase
      .from("tarefas")
      .update({
        concluida: true,
        dataConclusao: agora.toISOString(),
        status: StatusTarefa.CONCLUIDA,
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data as Tarefa;
  }

  // Excluir tarefa
  async excluir(id: string): Promise<void> {
    const { error } = await supabase.from("tarefas").delete().eq("id", id);

    if (error) throw error;
  }

  // Buscar tarefas por status
  async buscarPorStatus(
    usuarioId: string,
    status: StatusTarefa,
  ): Promise<Tarefa[]> {
    const { data, error } = await supabase
      .from("tarefas")
      .select("*")
      .eq("usuarioId", usuarioId)
      .eq("status", status);

    if (error) throw error;
    return data as Tarefa[];
  }

  // Buscar tarefas por tipo
  async buscarPorTipo(usuarioId: string, tipo: TipoTarefa): Promise<Tarefa[]> {
    const { data, error } = await supabase
      .from("tarefas")
      .select("*")
      .eq("usuarioId", usuarioId)
      .eq("tipoTarefa", tipo);

    if (error) throw error;
    return data as Tarefa[];
  }

  // Buscar tarefas atrasadas
  async buscarAtrasadas(usuarioId: string): Promise<Tarefa[]> {
    const agora = new Date();

    const { data, error } = await supabase
      .from("tarefas")
      .select("*")
      .eq("usuarioId", usuarioId)
      .eq("concluida", false)
      .lt("prazo", agora.toISOString());

    if (error) throw error;

    // Atualizar status para ATRASADA
    for (const tarefa of data) {
      await this.atualizar(tarefa.id, { status: StatusTarefa.ATRASADA });
    }

    return data as Tarefa[];
  }
}
