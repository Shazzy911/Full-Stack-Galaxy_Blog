import style from "./Footer.module.scss";
import Link from "next/link";
import { linkPages } from "@/json/StaticData";
const Footer = () => {
  return (
    <div className={style.container}>
      {linkPages.map((link) => (
        <div key={link.id} className={style.linkContainer}>
          <h4 className={style.heading}>{link.heading}</h4>
          <Link href="/">Privacy State</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">State</Link>
          <Link href="/">Privacy</Link>
        </div>
      ))}
    </div>
  );
};

export default Footer;
