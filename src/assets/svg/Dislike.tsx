type DislikeIconProps = {
  isDisliked: boolean;
};

function DislikeIcon({ isDisliked }: DislikeIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
      fill="none"
      viewBox="0 0 28 25"
      className={`${
        isDisliked ? `fill-red-500` : `fill-gray-400`
      } cursor-pointer`}
    >
      <path d="M.667.833h2.666c.734 0 1.334.6 1.334 1.334v12c0 .733-.6 1.333-1.334 1.333H.667V.833zm26.44 9.494c.146.333.226.693.226 1.066v1.44c0 1.467-1.2 2.667-2.666 2.667h-7.334l1.227 6.2c.067.293.027.613-.107.88a6.4 6.4 0 01-1.173 1.627l-.613.626-8.547-8.546a2.675 2.675 0 01-.787-1.894V3.953c0-1.72 1.4-3.12 3.12-3.12h10.8c.947 0 1.814.494 2.294 1.294l3.56 8.2z"></path>
    </svg>
  );
}

export default DislikeIcon;
