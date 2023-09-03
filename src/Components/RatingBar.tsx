import DislikeSvg from "../assets/svg/Dislikes";
import LikeSvg from "../assets/svg/Like";

import { useAppSelector } from "../store/hooks";

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
        <LikeSvg id={id} />
        {rating ? <div className="text-sm">{rating.likes}</div> : ""}
      </div>
      <div className="flex gap-1">
        <DislikeSvg id={id} />
        {rating ? <div className="text-sm">{rating.dislikes}</div> : ""}
      </div>
    </div>
  );
}

export default RatingBar;
