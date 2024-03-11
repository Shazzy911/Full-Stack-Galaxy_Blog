import SearchBar from "@/components/search_bar/SearchBar"
import style from "./page.module.scss"
import AboutInformation from "@/components/about_info/AboutInformation"




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
    title: "Galaxy Blog - About",
    description: "This is the galaxy blog, it contains information about the developer and owner of  website",
  }
}