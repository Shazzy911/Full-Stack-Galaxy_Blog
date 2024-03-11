import SearchBar from "@/components/search_bar/SearchBar";
import style from "./page.module.scss";
import ContactForm from "@/components/contact_form/ContactForm";

const Page = () => {
  return (
    <>
      <div className={style.container}>
        <SearchBar />
        <ContactForm />
      </div>
    </>
  );
};

export default Page;
export function generateMetadata () { 
  return{
    title: "Galaxy Blog - Contact",
    description: "This is the galaxy blog, it contains information about the developer and owner of  website",
  }
}