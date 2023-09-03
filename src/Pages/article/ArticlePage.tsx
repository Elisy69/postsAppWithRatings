import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import RatingBar from "../../components/RatingBar";
import { useGetPostByIdQuery } from "../../services/jsonplaceholder";

type MyParams = {
  id: string;
};

function PostPage() {
  const { id } = useParams<keyof MyParams>() as MyParams;
  const { data } = useGetPostByIdQuery(id);

  return (
    <div className="p-4">
      {data ? (
        <div>
          <div className="flex justify-between">
            <Link to={"/"}>⬅️ Вернуться к статьям</Link>
            <RatingBar id={Number(id)} />
          </div>
          <h1 className="text-center px-2">{data.title}</h1>
          <div className="px-10">
            <img src="https://placehold.co/1980x1080" alt="" />
          </div>
          <p className="px-10 pt-12">{data.body}</p>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default PostPage;
