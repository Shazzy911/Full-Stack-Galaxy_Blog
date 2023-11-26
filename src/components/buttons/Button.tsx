"use client";

// import Link from 'next/link'

import style from "./Button.module.scss";
import Arrow from "@/images/arrow-right.png"
import Image from 'next/image';
import { useRouter } from 'next/navigation';



type ButtonProps = {
  text?: string,
  url?: string ,
  href?: string | any,
  value?: string,
  // onClick?: ()=>router.push(href);
 

}
const Button = ({text, url, href , value}: ButtonProps) => {
  const router = useRouter()
  return (
 
    <button  className={style.container} value={value} onClick={()=>router.push(href)}>{text}
    <Image src={Arrow} width={19} height={12} alt='not found' className={style.arrow}/>
    </button>
    
  )
}

export default Button