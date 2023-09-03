import { Post } from "../../../services/jsonplaceholder";
import FirstPost from "./FirstPost";
import PostComponent from "./PostItem";

interface PostsListProps {
  data: Post[];
}

function PostsList({ data }: PostsListProps) {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
      {data.map((item, index) => {
        if (index === 0) return <FirstPost key={item.id} data={item} />;
        else return <PostComponent key={item.id} data={item} />;
      })}
    </div>
  );
}

export default PostsList;
