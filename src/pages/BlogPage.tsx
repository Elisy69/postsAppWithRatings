import { useEffect, useState } from "react";
import { useGetAllPostsQuery } from "../services/jsonplaceholder.ts";

import Header from "../Components/Header.tsx";
import Loading from "../Components/Loading";
import PostsList from "../Components/PostsList";
import Searchbar from "../Components/Searchbar";

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
