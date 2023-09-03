import { getRandomLikesNumber } from "./getRandomLikesNumber";

export function getRatings(postsCount: number) {
  const ratings = [];
  for (let i = 0; i < postsCount; i++) {
    ratings.push({
      id: i + 1,
      likes: getRandomLikesNumber(),
      dislikes: getRandomLikesNumber(),
      isLiked: false,
      isDisliked: false,
    });
  }
  return ratings;
}
