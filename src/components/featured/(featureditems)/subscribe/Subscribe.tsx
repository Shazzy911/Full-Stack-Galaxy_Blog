import { BiColor } from "react-icons/bi";
import Button from "../../../buttons/Button";
import style from "./Subscribe.module.scss";

const size = 230;

const Subscribe = () => {
  return (
    <>
      <div className={style.container}>
        <h1>Subscribe Blog</h1>
        <div className={style.desc}>
          <p style={{color: "#b0b0b0"}}>
          Join our community, and let's embark on a journey of learning and discovery together. Subscribe now to unlock a world of knowledge tailored just for you
          </p>
        </div>
        <input type="text" placeholder="Your Email Address" />
        <Button text="Subscribe Now" />
      </div>
    </>
  );
};

export default Subscribe;
