import { TodoListResponseType } from "@/types/todo";
import { api } from "./api";

export async function getTodoList(pageParam: number) {
  const { data } = await api.get<TodoListResponseType[]>(`/todos`, {
    params: {
      _start: pageParam,
      _limit: 10,
    },
  });

  if (data.length < 10) {
    return {
      result: data,
      nextPage: undefined,
    };
  }

  return {
    result: data,
    nextPage: pageParam + 1,
  };
}
