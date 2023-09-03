import DislikeIcon from "../../assets/svg/Dislike";
import {
  PostRating,
  toggleDislike,
} from "../../features/posts/likesDislikesSlice";
import { useAppDispatch } from "../../store/hooks";
interface DislikeButtonProps {
  rating: PostRating;
}

function DislikeButton({ rating }: DislikeButtonProps) {
  const dispatch = useAppDispatch();
  function hanldeLike() {
    dispatch(toggleDislike(rating.id));
  }

  return (
    <button onClick={hanldeLike}>
      <DislikeIcon isDisliked={rating.isDisliked} />
    </button>
  );
}

export default DislikeButton;
