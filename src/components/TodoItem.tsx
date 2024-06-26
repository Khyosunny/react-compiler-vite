import { TodoListResponseType } from "@/types/todo";
import styled from "styled-components";

interface Props {
  item: TodoListResponseType;
}

const TodoItem = ({ item }: Props) => {
  return <Wrapper>{item.title}</Wrapper>;
};

export default TodoItem;

const Wrapper = styled.li`
  background-color: white;
  border-radius: 14px;
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
`;
