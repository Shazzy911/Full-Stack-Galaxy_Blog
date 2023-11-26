// import mongoose from "mongoose";
// import blog from "@/lib/models/blog";
// import { NextResponse } from "next/server";
// // import { connectionString } from "@/utils/db";

// const GET = async (request, { params }) => {
//   const { id } = params;
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     const post = await blog.findById(id);
//     return new NextResponse(JSON.stringify(post), { status: 200 });
//   } catch (err) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };

// export { GET };



import mongoose from "mongoose";
import NodeCache from "node-cache";
import blog from "@/lib/models/blog";
import { NextResponse } from "next/server";

const cache = new NodeCache();

const GET = async (request, { params }) => {
  const { id } = params;
  console.log(id);

  try {
    // Check if the data is already in the cache
    const cachedData = cache.get(id);
    if (cachedData) {
      console.log("Cache-hit");
      return new NextResponse(JSON.stringify(cachedData), { status: 200 });
    }

    // Connect to the MongoDB database
    await mongoose.connect(process.env.MONGODB_URI);

    // Fetch the blog post by ID
    const post = await blog.findById(id);

    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    // Cache the data with a TTL (adjust as needed)
    console.log("Cache-miss");
    cache.set(id, post, 600);

    // Return the response with the fetched post
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.error("Database Error:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};

export { GET };
