import styled from "styled-components";
import TodoItem from "@/components/TodoItem";
import useGetTodoListQuery from "@/hooks/useGetTodoListQuery";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const TodoList = () => {
  const onIntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  };

  const ref = useIntersectionObserver<HTMLDivElement>(onIntersectionObserverCallback);
  const { data, hasNextPage, fetchNextPage } = useGetTodoListQuery();

  return (
    <Wrapper>
      <List>
        {data?.pages.map((page) => {
          return page.result.map((item) => {
            return <TodoItem key={item.id} item={item} />;
          });
        })}
      </List>
      {hasNextPage && <div ref={ref}>loading...</div>}
    </Wrapper>
  );
};

export default TodoList;

const Wrapper = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
`;
