import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    vistHistory: [{ timeStamp: { type: Number } }],
  },
  { timestamps: true }
);


export default URL = mongoose.model("url", urlSchema);
