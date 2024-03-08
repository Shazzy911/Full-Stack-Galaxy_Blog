import style from "./Featuring.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/buttons/Button";
import { postProps } from "@/types/postList";
import { FaClock } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";


const getData = async () => {
  try {
    let response = await fetch("http://localhost:3000/api/featured", {
      cache: "default"
    });
    let data: postProps[] = await response.json();
    return data;
  } catch (error) {
    throw new Error("Server is not Responding");
  }
};
const Featuring = async () => {
  let blogPost: postProps[] = await getData();
  return (
    <>
      <div className={style.container}>
        <h1 className={style.mainHeading}>Featured Posts</h1>
        <div className={style.featuredCard}>

          {blogPost.map((data) => (
            <div key={data.id} className={style.blogCard}>
              <Image
                src={data.image || "@/images/post/post-md/03.png"}
                width={310}
                height={200}
                alt="Image Not found"
                className={style.mainImage}
              />
              <div className={style.bloginfo}>
                <div className={style.headingBox}>
                  <h1 className={style.heading}>
                    <Link href={`/featured/${data._id}`}>{data.title}</Link>
                  </h1>
                </div>
                <div className={style.date_category}>
                  <span>
                    <FaClock className={style.icon} />
                    <p>{data.date}</p>
                  </span>
                  <span>
                    <BiSolidCategoryAlt className={style.icon} />
                    <p className={style.textParagraph}>{data.category}</p>
                  </span>
                </div>
                <Button text="Read More" href={`/featured/${data._id}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Featuring;
