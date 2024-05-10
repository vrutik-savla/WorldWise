// 229. Finishing the City View
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function ButtonBack() {
  // 218. Programmatic Navigation with useNavigate
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default ButtonBack;
