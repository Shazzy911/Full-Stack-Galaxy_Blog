// import style from "./PostCard.module.scss";
import { postProps } from "@/types/postList"
// import { fetchData } from "@/types/data";

const PostCard = ({ id, title, date,image, category, quotes, likes, paragraph }: postProps) => {
  return (
    <div>
      <h1>This the Post Card</h1>
      <div>{id}</div>
      <div>{title}</div>
      <div>{date}</div>
      <div>{category}</div>
      <div>{quotes}</div>
      <div>{likes}</div>
      <div>{paragraph}</div>
      <div>{image}</div>
    </div>
  );
};

export default PostCard;
