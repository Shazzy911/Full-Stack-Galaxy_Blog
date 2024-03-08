import style from "./page.module.scss";
import Center_layout from "@/components/center_layout/Center_layout";
import Right_layout from "@/components/right_layout/Right_layout";

const Page = () => {
  return (
    <>
      <div className={`${style.container} `}> 
        <Center_layout/>
        <Right_layout/>
      </div>
    </>
  );
};
export default Page;
