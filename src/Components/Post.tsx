import { Post } from "../services/jsonplaceholder";
import ButtonReadMore from "./ButtonReadMore";
import RatingBar from "./RatingBar";

interface PostComponentProps {
  data: Post;
}

function PostComponent({ data }: PostComponentProps) {
  return (
    <div>
      <div>IMAGE</div>
      <div className="flex">
        <h3>{data.title}</h3>
        <RatingBar id={data.id} />
      </div>
      <ButtonReadMore postId={data.id} />
    </div>
  );
}

export default PostComponent;
