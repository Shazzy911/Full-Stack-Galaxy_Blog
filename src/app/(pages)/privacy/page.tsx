import SearchBar from "@/components/SearchBar/SearchBar";
import style from "./page.module.scss";
import Privacy from "@/components/privacy/Privacy";
const page = () => {
  return (
    <>
      <div className={style.container}>
        <SearchBar />
        <h1>Privacy & Policy</h1>
        <p>
          bottom line is it’s our aim to always take care of both of us, <br />
          Please read this terms and stated below, goodies Byes.
        </p>
        <Privacy/>
      </div>
    </>
  );
};

export default page;
