import SearchBar from "@/components/SearchBar/SearchBar";
import style from "./page.module.scss";
import ContactForm from "@/components/contactform/ContactForm";

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
