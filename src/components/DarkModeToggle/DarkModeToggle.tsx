"use client"
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import styles from "./DarkModeToggle.module.scss";
import { setToggleOpen } from "@/app/redux/toggleSlice";

export default function DarkModeToggle() {
  const dispatch = useAppDispatch();
  const toggleOpen = useAppSelector((state: any ) => state.toggle.toggleOpen);
 localStorage.setItem("togggleOpen", toggleOpen);
// console.log(toggleOpen);
  
  return (
    // JSX
    <div className={styles.container}  onClick={() => dispatch(setToggleOpen(!toggleOpen))} >  
      <div className={styles.icon}>🔆</div>
      <div className={styles.icon}>🌙</div>
      <div
        className={`${styles.ball} ${toggleOpen ? styles.active : ''}`}
      />
    </div>
  );
}
