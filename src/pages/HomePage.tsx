import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/test");
  };
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={handleClick}>버튼</button>
    </div>
  );
};

export default HomePage;
