

/// ===============   Redis   ==========================
// =====================================================

// import { NextResponse } from "next/server";
// import blog from "@/lib/models/blog";
// import mongoose from "mongoose";
// import Ioredis from "ioredis";
// import { connectionString } from "@/utils/db";

// const redis = new Ioredis({
//   // Configure ioredis connection options if needed
// });

// const GET = async (req) => {
//   // Key for Redis cache
//   const cacheKey = "blog_data";

//   let data = [];
//   let success = true;

//   try {
//     // Attempt to retrieve data from Redis cache
//     const cachedData = await redis.get(cacheKey);

//     if (cachedData) {
//       // If data is found in the cache, return it
//       data = JSON.parse(cachedData);
//       console.log("Cached Data")
//     } else {
//       // If data is not in the cache, fetch it from MongoDB
//       await mongoose.connect(connectionString);
//       data = await blog.find();
//       // Set the fetched data in the Redis cache with an expiration time (e.g., 2 Minutes)
//       await redis.set(cacheKey, JSON.stringify(data), "EX", 120);
//     }
//   } catch (error) {
//     data = { result: "error" };
//     success = false;
//   } 


//   return NextResponse.json(data);
// };

// export { GET };

// finally {
//   // Close the Redis connection
//   await redis.quit();
// }


// ===================== node-cache =====================


// import { ApolloServer } from "@apollo/server";
// import { expressMiddleware } from "@apollo/server/express4";
// import NodeCache from "node-cache";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import { connectionString } from "@/utils/db";
// import { NextResponse } from "next/server";
// import blog from "@/lib/models/blog";

// const myCache = new NodeCache({ stdTTL: 120, checkperiod: 30 });

// const startServer = async () => {
//   try {
//     await mongoose.connect(connectionString);

//     const server = new ApolloServer({
//       typeDefs: `
//         type Blog {
//           _id: ID
//           id: Int
//           image: String
//           title: String
//           date: String
//           category: String
//           desc: String
//           heading1: String
//           paragraph1: String
//           heading2: String
//           paragraph2: String
//           heading3: String
//           paragraph3: String
//           heading4: String
//           paragraph4: String
//           quotes: String
//           likes: String
//         }

//         type Query {
//           getBlog(id: ID!): Blog
//           getAllBlogs: [Blog]
//         }
//       `,
//       resolvers: {
//         Query: {
//           getAllBlogs: async () => {
//             const cacheKey = "blog_data";
//             let data = [];
//             try {
//               const cachedData = myCache.get(cacheKey);

//               if (cachedData) {
//                 data = cachedData;
//                 console.log("Cached Data");
//               } else {
//                 data = await blog.find();
//                 console.log("Data from Database");
//                 myCache.set(cacheKey, data);
//               }
//             } catch (error) {
//               console.error("Error:", error);
//             }

//             return data;
//           },
//         },
//       },
//     });

//     const app = express();

//     app.use(bodyParser.json());

//     await server.start();

//     app.use("/graphql", expressMiddleware(server));

//     app.listen(port, () => console.log(`Server is running on http://localhost:${port}/graphql`));
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };

// startServer();



import mongoose from "mongoose";
// import { connectionString } from "@/utils/db";
import { NextResponse } from "next/server";

// import featured from "@/lib/models/featured";
import Blog from "@/lib/models/blog";
const GET = async (req) => { 
    let data = [];
  let success = true;
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    data = await Blog.find();
  } catch (error) {
    data = { result: "error" };
    success: false;
  }
  return NextResponse.json(data);
 }
export {GET};
