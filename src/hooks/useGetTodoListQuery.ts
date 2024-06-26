import { getTodoList } from "@/apis/todoApi";
import { queryKeys } from "@/utils/queryKeys";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetTodoListQuery = () => {
  return useInfiniteQuery({
    queryKey: queryKeys.todoList,
    queryFn: ({ pageParam = 1 }) => getTodoList(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
  });
};

export default useGetTodoListQuery;
