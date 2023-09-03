import DislikeSvg from "../assets/svgs/Dislikes";
import LikeSvg from "../assets/svgs/Like";

import { useAppSelector } from "../store/hooks";

interface RatingBarProps {
  id: number;
}

function RatingBar({ id }: RatingBarProps) {
  const rating = useAppSelector((state) =>
    state.ratings.find((post) => post.id === id)
  );

  return (
    <div className="flex">
      <div className="flex">
        <LikeSvg id={id} />
        {rating ? <div>{rating.likes}</div> : ""}
      </div>
      <div className="flex">
        <DislikeSvg id={id} />
        {rating ? <div>{rating.dislikes}</div> : ""}
      </div>
    </div>
  );
}

export default RatingBar;
