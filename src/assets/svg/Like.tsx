import { toggleLike } from "../../features/posts/likesDislikesSlice";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

type LikeIconProps = {
  id: number;
};

function LikeIcon({ id }: LikeIconProps) {
  const post = useAppSelector((state) =>
    state.ratings.find((post) => post.id === id)
  );
  const dispatch = useAppDispatch();
  function hanldeLike() {
    return () => {
      dispatch(toggleLike(id));
    };
  }
  return (
    <svg
      onClick={hanldeLike()}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
      fill="none"
      viewBox="0 0 28 25"
      className={`${
        post?.isLiked ? `fill-green-500` : `fill-gray-400`
      } cursor-pointer`}
    >
      <path d="M.667 24.167h2.666c.734 0 1.334-.6 1.334-1.334v-12c0-.733-.6-1.333-1.334-1.333H.667v14.667zm26.44-9.494a2.64 2.64 0 00.226-1.066v-1.44c0-1.467-1.2-2.667-2.666-2.667h-7.334l1.227-6.2a1.336 1.336 0 00-.107-.88A6.402 6.402 0 0017.28.793l-.613-.626L8.12 8.713a2.675 2.675 0 00-.787 1.894V21.06c0 1.707 1.4 3.107 3.12 3.107h10.814c.933 0 1.813-.494 2.293-1.294l3.547-8.2z"></path>
    </svg>
  );
}

export default LikeIcon;
