import style from "./page.module.scss"
import { postProps } from "@/types/postList";
import Image from "next/image";


const getData = async (ad: string | number, id: string | number )=> {
  try {
    let response = await fetch(`http://localhost:3000/api/${ad}/${id}`, {
      cache: "no-cache",
    })

    let data = await response.json()
    return data;
  } catch (error) {
    throw new Error("Failed to Fetch Data by Id");
  }
}

type Data = {
  params: {
    id: string | number | (string | number)[];
  };
};


const Page = async ({ params }: Data) => {
  console.log(params.id)
  const [one, two]: any = params.id;

  let post: postProps = await getData(one, two);
  return (
    <>

      <div className={style.container} >
        <Image src={post.image || "@/images/author.png"} height={480} width={750} alt="Image not Found" className={style.mainImage} />
        <h1>
          {post.title}
        </h1>
        <p>
          {post.paragraph1}    </p>
        <div className={style.privacyData}>
          <span>
            <span className={style.dot}>
            </span>
            <h2>{post.heading1}</h2>
          </span>
          <p>{post.paragraph1}</p>
          <span>
            <span className={style.dot}>
            </span>
            <h2>{post.heading2}</h2>
          </span>
          <p>{post.paragraph2}</p>
          <span>
            <span className={style.dot}>
            </span>
            <h2>{post.heading3}</h2>
          </span>
          <p>{post.paragraph3}</p>
          <span>
            <span className={style.dot}>
            </span>
            <h2>{post.heading4}</h2>
          </span>
          <p>{post.paragraph4}</p>
        </div>
        <div className={style.mainDesc}>
          <h4 className={style.secondHeading}>
            {post.quotes}
          </h4>
          <h3>-{post.likes}</h3>
        </div>
      </div>

    </>
  );
};

export default Page;
