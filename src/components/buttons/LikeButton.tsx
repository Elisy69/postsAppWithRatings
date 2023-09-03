import LikeIcon from "../../assets/svg/Like";
import {
  PostRating,
  toggleLike,
} from "../../features/posts/likesDislikesSlice";
import { useAppDispatch } from "../../store/hooks";
interface LikeButtonProps {
  rating: PostRating;
}

function LikeButton({ rating }: LikeButtonProps) {
  const dispatch = useAppDispatch();
  function hanldeLike() {
    dispatch(toggleLike(rating.id));
  }

  return (
    <button onClick={hanldeLike}>
      <LikeIcon isLiked={rating.isLiked} />
    </button>
  );
}

export default LikeButton;
