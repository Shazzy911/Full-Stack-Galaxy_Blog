"use client";
import MainPage from "@/components/main/MainPage";
import React from "react";
import style from "./page.module.scss";
import Featured from "@/components/featured/Featured";
import { QueryClient, QueryClientProvider } from "react-query";
import { useAppSelector } from "./redux/hooks";

const queryClient = new QueryClient();
const page = () => {
const toggleOpen = useAppSelector((state: any ) => state.toggle.toggleOpen);


   
  return (
    <>
      <div className={`${style.container} ${toggleOpen ? style.active : ''}`}> 
        <QueryClientProvider client={queryClient}>
          <MainPage />
        </QueryClientProvider>
        <Featured />
      </div>
    </>
  );
};

export default page;
