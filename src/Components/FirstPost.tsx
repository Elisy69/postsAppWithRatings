import { Post } from "../services/jsonplaceholder";
import ButtonReadMore from "./ButtonReadMore";
import RatingBar from "./RatingBar";
interface FirstPostsProps {
  data: Post;
}

function FirstPost({ data }: FirstPostsProps) {
  return (
    <div className="col-span-2">
      <div>IMAGE</div>
      <div className="flex">
        <h3>{data.title}</h3>
        <RatingBar id={data.id} />
      </div>
      <div>{data.body}</div>
      <ButtonReadMore postId={data.id} />
    </div>
  );
}

export default FirstPost;
