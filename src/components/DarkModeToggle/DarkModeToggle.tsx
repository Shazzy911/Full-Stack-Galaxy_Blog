"use client"
import styles from "./DarkModeToggle.module.scss";
import { useContext } from 'react';
// import { ThemeContext } from "@/context/ThemeContext";

interface ContextValue {
  toggle: () => void;
  mode: "dark" | "light";
}

export default function DarkModeToggle() {

  // const context = useContext(ThemeContext);

  // if (!context) {
  //   throw new Error('ThemeContext undefined');  
  // }

  // const {toggle, mode}: ContextValue = context;
  // onClick={toggle}
  return (
    // JSX
    <div className={styles.container}   >  
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        // style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}