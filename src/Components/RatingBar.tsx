import { useAppSelector } from "../store/hooks";
import DislikeButton from "./buttons/DislikeButton";
import LikeButton from "./buttons/LikeButton";

interface RatingBarProps {
  id: number;
}

function RatingBar({ id }: RatingBarProps) {
  const rating = useAppSelector((state) =>
    state.ratings.find((post) => post.id === id)
  );

  return (
    <div className="flex gap-4">
      <div className="flex gap-1">
        {rating ? <LikeButton rating={rating} /> : ""}

        {rating ? <div className="text-sm">{rating.likes}</div> : ""}
      </div>
      <div className="flex gap-1">
        {rating ? <DislikeButton rating={rating} /> : ""}

        {rating ? <div className="text-sm">{rating.dislikes}</div> : ""}
      </div>
    </div>
  );
}

export default RatingBar;
