"use client";
import Image from "next/image";
import style from  "./TopBar.module.scss";
import Hero from "@/images/trace.svg";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/index";
import { setMenuOpen } from "@/app/redux/menuSlice";
// import {RootState} from "@/types/data"
// import { useDispatch, useSelector } from "react-redux";
// fbe05f
// d310c1
interface RootState {
  menu: {
    menuOpen: boolean;
  };
}

const TopBar = () => {

  // const dispatch = useAppDispatch();
  const dispatch = useAppDispatch()
  // const menuOpen = useAppSelector((state: RootState ) => state.menu.menuOpen);
  const menuOpen = useAppSelector((state: any ) => state.menu.menuOpen);
  return (
    <>
      <div className={`${style.container} ${menuOpen ? style.active : ''}`}>
        <Image src={Hero} height={55} width={55} alt="Image not Found"  className={style.mainImage}/>
        <div className={style.hamburger} onClick={() => dispatch(setMenuOpen(!menuOpen))}>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
        <span className={style.bar}></span>

        </div>
      </div>
    </>
  );
};

export default TopBar;
