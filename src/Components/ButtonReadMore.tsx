import { Link } from "react-router-dom";

interface ButtonReadMoreProps {
  postId: number;
}

function ButtonReadMore({ postId }: ButtonReadMoreProps) {
  return (
    <Link to={`/${postId}`}>
      <button>Читать далее</button>
    </Link>
  );
}

export default ButtonReadMore;
