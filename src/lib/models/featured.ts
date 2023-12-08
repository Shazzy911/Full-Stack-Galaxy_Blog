import { Schema } from "mongoose";
import mongoose from "mongoose";
const feature = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    heading1: {
      type: String,
      required: true,
    },
    paragraph1: {
      type: String,
      required: true,
    },
    heading2: {
      type: String,
      required: true,
    },
    paragraph2: {
      type: String,
      required: true,
    },
    heading3: {
      type: String,
      required: true,
    },
    paragraph3: {
      type: String,
      required: true,
    },
    heading4: {
      type: String,
      required: true,
    },
    paragraph4: {
      type: String,
      required: true,
    },
    heading5: {
      type: String,
      required: true,
    },
    paragraph5: {
      type: String,
      required: true,
    },
    quotes: {
      type: String,
      required: true,
    },
    likes: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);


export default mongoose.models.feature_blogs || mongoose.model("feature_blogs", feature)