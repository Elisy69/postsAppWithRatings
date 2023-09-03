import { Link } from "react-router-dom";

interface ButtonReadMoreProps {
  postId: number;
}

function ButtonReadMore({ postId }: ButtonReadMoreProps) {
  return (
    <Link
      to={`/${postId}`}
      className="hover:bg-gray-200 border-2 border-black text-sm px-2 py-1 rounded-full self-end m-4"
    >
      Читать далее
    </Link>
  );
}

export default ButtonReadMore;
