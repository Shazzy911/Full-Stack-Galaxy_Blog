import style from "./MainPage.module.scss";
import Image from "next/image";
import Button from "../buttons/Button";
import Link from "next/link";
import { postProps } from "@/types/postList";
import { FaClock } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { useQuery } from "react-query";



const fetchBlogPosts = async () => {
  const response = await fetch("http://localhost:3000/api/blog", {
    cache: "default"
  });

  if (!response.ok) {
    throw new Error("Server is not Responding");
  }

  const data: postProps[] = await response.json();
  return data;
};
const MainPage = async () => {
  // let blogPost: postProps[] = await getData();
  const { data: blogPost, isLoading, isError } = useQuery('blogPosts', fetchBlogPosts);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading data</div>;
  }
  if (!blogPost) {
    return <div>No data available</div>;
  }
  return (
    <div className={style.container}>
      {blogPost.map((value) => (
        <div className={style.blogCard} key={value.id}>
          <Image
            src={value.image || "@/images/post/post-lg/02.png"}
            width={575}
            height={371}
            alt="Image Not found"
            className={style.mainImage}
          />
          <div className={style.bloginfo}>
            <div className={style.headingBox}>
              <h1 className={style.heading}>
                <Link href={`/blog/${value._id}`}>{value.title}</Link>
              </h1>
            </div>
            <div className={style.date_category}>
              <span>
                <FaClock className={style.icon} />
                <p>{value.date}</p>
              </span>
              <span>
                <BiSolidCategoryAlt className={style.icon} />
                <p >{value.category}</p>
              </span>
            </div>
            <p className={style.mainDesc}>{value.desc}</p>
            <Button text="Read More" href={`/blog/${value._id}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
