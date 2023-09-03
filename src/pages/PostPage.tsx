import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import RatingBar from "../Components/RatingBar";
import { useGetPostByIdQuery } from "../services/jsonplaceholder";

type MyParams = {
  id: string;
};

function PostPage() {
  const { id } = useParams<keyof MyParams>() as MyParams;
  const { data } = useGetPostByIdQuery(id);

  return (
    <div>
      {data ? (
        <div>
          <div className="flex">
            <Link to={"/"}>
              <button>⬅️ Вернуться к статьям</button>
            </Link>
            <RatingBar id={Number(id)} />
          </div>
          <h1>{data.title}</h1>
          <div>image</div>
          <p>{data.body}</p>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default PostPage;
