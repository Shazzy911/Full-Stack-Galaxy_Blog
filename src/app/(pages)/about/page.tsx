import SearchBar from "@/components/SearchBar/SearchBar"
import style from "./page.module.scss"
import AboutInformation from "@/components/aboutInfo/AboutInformation"




const page = () => {
  return (
    <>
    <div className={style.container}>
         <SearchBar/>
         <AboutInformation/>
    </div>
    </>
  )
}

export default page
export function generateMetadata () { 
  return{
    title: "Galaxy About - Shahzaib",
    description: "This is the galaxy blog, it contains information about the developer and owner of  website",
  }
}