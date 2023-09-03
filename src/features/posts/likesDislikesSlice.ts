import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getRatings } from "../../helpers/getRatings";

export interface PostRating {
  id: number;
  likes: number;
  dislikes: number;
  isLiked: boolean;
  isDisliked: boolean;
}

type RatingsSlice = PostRating[];

const initialState: RatingsSlice = [];

export const ratingsSlice = createSlice({
  name: "ratings",
  initialState,
  reducers: {
    generateRatings: (_, action: PayloadAction<number>) => {
      return getRatings(action.payload);
    },
    toggleLike: (state, action) => {
      const post = state.find((post) => post.id === action.payload);
      if (post) {
        post.isLiked ? post.likes-- : post.likes++;
        post.isLiked = !post.isLiked;
      }
    },
    toggleDislike: (state, action) => {
      const post = state.find((post) => post.id === action.payload);
      if (post) {
        post.isDisliked ? post.dislikes-- : post.dislikes++;
        post.isDisliked = !post.isDisliked;
      }
    },
  },
});

export const { generateRatings, toggleLike, toggleDislike } =
  ratingsSlice.actions;
export default ratingsSlice.reducer;
