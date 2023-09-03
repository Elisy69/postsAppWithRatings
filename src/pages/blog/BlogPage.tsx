import { useEffect, useState } from "react";
import Header from "../../components/Header.tsx";
import Loading from "../../components/Loading.tsx";
import Searchbar from "../../components/Searchbar.tsx";
import { useGetAllPostsQuery } from "../../services/jsonplaceholder.ts";
import PostsList from "./posts/PostsList.tsx";

function Blog() {
  const [searchedValue, setSearchedValue] = useState("");
  const { data } = useGetAllPostsQuery(searchedValue);

  const handleChange = (e: string) => {
    setSearchedValue(e);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <Searchbar searchedValue={searchedValue} handleChange={handleChange} />
      {data ? <PostsList data={data} /> : <Loading />}
    </div>
  );
}

export default Blog;
