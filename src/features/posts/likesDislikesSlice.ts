import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getRatings } from "../../helpers/generateRatings";

interface PostRatings {
  id: number;
  likes: number;
  dislikes: number;
}

type RatingsSlice = PostRatings[];

const initialState: RatingsSlice = [];

export const ratingsSlice = createSlice({
  name: "ratings",
  initialState,
  reducers: {
    generateRatings: (state, action: PayloadAction<number>) => {
      return getRatings(action.payload);
    },
    like: (state, action) => {
      const postIndex = state.findIndex((post) => post.id === action.payload);
      state[postIndex].likes++;
    },
    dislike: (state, action) => {
      const postIndex = state.findIndex((post) => post.id === action.payload);
      state[postIndex].dislikes++;
    },
  },
});

export const { generateRatings, like, dislike } = ratingsSlice.actions;
export default ratingsSlice.reducer;
