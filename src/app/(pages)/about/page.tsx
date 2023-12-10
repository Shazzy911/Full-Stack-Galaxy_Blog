import SearchBar from "@/components/SearchBar/SearchBar"
import style from "./page.module.scss"
import AboutInformation from "@/components/aboutInfo/AboutInformation"




const Page = () => {
  return (
    <>
    <div className={style.container}>
         <SearchBar/>
         <AboutInformation/>
    </div>
    </>
  )
}

export default Page;
export function generateMetadata () { 
  return{
    title: "Galaxy About - Shahzaib",
    description: "This is the galaxy blog, it contains information about the developer and owner of  website",
  }
}