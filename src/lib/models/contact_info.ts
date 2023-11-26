import { Schema } from "mongoose";
import mongoose from "mongoose";
const user_info = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  selectedOption: {
    type: String,
    required: true,
  },
  textValue: {
    type: String,
    required: true,
  },
}, { timestamps: true });


export default mongoose.models.user_infos || mongoose.model("user_infos", user_info);