import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  university: {
    type: String,
    required: true,
  },
  education: {
    type: [String],
    required: false,
  },
  institution: {
    type: [String],
    required: false,
  },
  certification: {
    type: [String],
    required: false,
  },
  certification_uni: {
    type: [String],
    required: false,
  },
  skills: {
    type: [String],
    required: false,
  },
  desc: {
    type: String,
    required: false,
  },
  isTeacher: {
    type: Boolean,
    default:false
  },
},{
  timestamps:true
});

export default mongoose.model("User", userSchema)