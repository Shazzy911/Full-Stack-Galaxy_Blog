"use client";
import MainPage from "@/components/main/MainPage";
import React from "react";
import style from "./page.module.scss";
import Featured from "@/components/featured/Featured";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const page =  () => {
  
  return (
    <>
      <div className={style.container}>
      <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
        <Featured />
      </div>
    </>
  );
};

export default page;
