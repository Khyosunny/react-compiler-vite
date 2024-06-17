import { useNavigate } from "react-router-dom";

const TestPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Test page</h1>
      <button onClick={handleClick}>버튼</button>
    </div>
  );
};

export default TestPage;
