import ButtonReadMore from "../../../components/buttons/ButtonReadMore";
import RatingBar from "../../../components/RatingBar";
import { Post } from "../../../services/jsonplaceholder";

interface PostItemProps {
  data: Post;
}

function PostItem({ data }: PostItemProps) {
  return (
    <div className="flex flex-col border shadow rounded-md">
      <div>
        <img className="" src="https://placehold.co/1980x1080" alt="" />
      </div>

      <h3 className="p-2 font-bold text-lg">{data.title}</h3>
      <div className="p-2 max-h-[5rem] flex justify-between items-center">
        <RatingBar id={data.id} />
        <ButtonReadMore postId={data.id} />
      </div>
    </div>
  );
}

export default PostItem;
