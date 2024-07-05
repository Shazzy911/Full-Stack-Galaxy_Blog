import mongoose from "mongoose";
import NodeCache from "node-cache";
import feature from "@/lib/models/featured";
import { NextResponse } from "next/server";

const cache = new NodeCache();

const GET = async (request, { params }) => {
  const { id } = params;
  console.log(id);

  try {
    // Check if the data is already in the cache
    const cachedData = cache.get(id);
    if (cachedData) {
      return new NextResponse(JSON.stringify(cachedData), { status: 200 });
    }

    await mongoose.connect(process.env.MONGODB_URI);

    const post = await feature.findById(id);

    // Cache the data with a TTL (time-to-live) of 10 minutes (adjust as needed)
    cache.set(id, post, 600);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export { GET };
