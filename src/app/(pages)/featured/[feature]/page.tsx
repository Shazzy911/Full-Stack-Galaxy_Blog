import Details from "@/components/details_interface/Details";
import { postProps } from "@/types/postList";


const getData = async ( id: string | number )=> {
  try {
    let response = await fetch(`http://localhost:3000/api/featured/${id}`, {
      cache: "default",
    })

    let data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to Fetch Data by Id");
  }
}

type Data = {
  params: {
    feature: string | number | (string | number)[];
  };
};

const Page = async ({ params }: Data) => {
  const id: string | number | any = params.feature;
  let post: postProps = await getData(id);
  return (
    <>
      <Details post={post}/>
    </>
  );
};

export default Page;
export function generateMetadata () { 
  return{
    title: "Galaxy Blog - Feature Category ",
    description: "This is the galaxy blog, it contains information about the developer and owner of  website",
  }
}