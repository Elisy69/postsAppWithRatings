import ButtonReadMore from "../../../components/buttons/ButtonReadMore";
import RatingBar from "../../../components/RatingBar";
import { Post } from "../../../services/jsonplaceholder";

interface FirstPostsProps {
  data: Post;
}

function FirstPost({ data }: FirstPostsProps) {
  return (
    <div className="flex flex-col sm:col-span-2 col-span-1 border shadow rounded-md">
      <div>
        <img src="https://placehold.co/1980x1080" alt="" />
      </div>
      <div className="flex py-4 px-2">
        <h3 className="font-bold">{data.title}</h3>
        <div className="ml-auto">
          <RatingBar id={data.id} />
        </div>
      </div>
      <div className="px-2">{data.body}</div>
      <ButtonReadMore postId={data.id} />
    </div>
  );
}

export default FirstPost;
