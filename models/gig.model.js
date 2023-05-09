import mongoose from "mongoose";
const { Schema } = mongoose;

const GigSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    sub_title: {
      type: String,
      required: true,
    },
    sub_code: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: false,
    },
    userId: {
      type: String,
      required: true,
    },
    shortTitle: {
      type: String,
      required: false,
    },
    shortDesc: {
      type: String,
      required: false,
    },
    features: {
      type: [String],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Gig", GigSchema);