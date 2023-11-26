import loader from "@/images/loader.svg";
import loader2 from "@/images/chevron-down.svg";
import Image from "next/image";
import style from "./loading.module.scss";
const loading = () => {
  return (
    <>
      <div className={style.container}>
        <Image src={loader} height={60} width={60} alt="Image not Found" />
        {/* <Image src={loader2} height={199} width={199} alt="Image not Found" /> */}
      </div>
    </>
  );
};

export default loading;
