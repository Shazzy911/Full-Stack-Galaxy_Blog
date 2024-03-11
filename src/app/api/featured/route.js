
import mongoose from "mongoose";
// import { connectionString } from "@/utils/db";
import { NextResponse } from "next/server";

import featured from "@/lib/models/featured";

const GET = async (req) => { 
    let data = [];
  let success = true;
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    data = await featured.find();
    console.log(data);
  } catch (error) {
    data = { result: "error" };
    success: false;
  }
  return NextResponse.json(data);
 }
export {GET};



// const GET =async ()=>{
//     let data = [];
//     try {
//         await mongoose.connect(connectionString)
//         data = await featured.find();
//     } catch (error) {
//         throw new Error("Something went wrong.... ")
//     }
//     return new NextResponse(data)
// }


// export {GET}



