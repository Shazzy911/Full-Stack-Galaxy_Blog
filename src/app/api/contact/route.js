import mongoose from "mongoose";
import { NextResponse } from "next/server";

// import blog from "@/lib/models/blog";
import contact_info from "@/lib/models/contact_info";


const POST = async (req) => {
  try {
    const payload = await req.json();
    await mongoose.connect(process.env.MONGODB_URI);
    let contact = new contact_info(payload);
    const result = await contact.save();
    return NextResponse.json({ result, success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { result: error, success: false },
      { status: 404 }
    );
  }
};

export { POST };


// pages/api/contact/route.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import mongoose from 'mongoose';
// import { connectionString } from '@/utils/db';
// import contactSchema from '@/lib/models/Contacts';

// type FormData = {
//   firstname: string;
//   lastname: string;
//   email: string;
//   selectedOption: string;
//   textValue: string;
// };

// const POST = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     if (req.method === 'POST') {
//       const payload: FormData = req.body;
//       await mongoose.connect(connectionString);

//       // Create a new contact using the ContactModel
//       const contact = new contactSchema(payload);

//       // Save the contact to the database
//       const result = await contact.save();
//       console.log(result);

//       // Respond with a JSON success message by returning an object
//       return res.status(201).json({ result, success: true });
//     } else {
//       // Respond with an error message for unsupported methods
//       return res.status(405).json({ message: 'Method Not Allowed' });
//     }
//   } catch (error) {
//     // Respond with an error message if there was an issue
//     return res.status(500).json({ result: error, success: false });
//   }
// };

// export {POST};



