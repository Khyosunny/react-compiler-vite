import TodoList from "@/components/TodoList";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

const HomePage = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <Input value={value} onChange={handleChange} />
      <TodoList />
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 80%;
  height: 60px;
  padding: 20px;
  margin: 20px;
`;
