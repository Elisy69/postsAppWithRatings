import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { generateRatings } from "./features/posts/likesDislikesSlice.ts";
import PostPage from "./pages/article/ArticlePage.tsx";
import BlogPage from "./pages/blog/BlogPage.tsx";
import { useGetAllPostsQuery } from "./services/jsonplaceholder.ts";
import { useAppDispatch } from "./store/hooks.ts";

function App() {
  const { data } = useGetAllPostsQuery("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) {
      dispatch(generateRatings(data.length));
    }
  }, [data]);

  return (
    <div className="w-full h-full flex flex-col p-6">
      <Routes>
        <Route path="/" element={<BlogPage />}></Route>
        <Route path="/:id" element={<PostPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
