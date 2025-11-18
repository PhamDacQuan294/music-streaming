import mongoose from "mongoose";

const likeSongSchema = new mongoose.Schema(
  {
    userId: String,
    songId: String,
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);

const LikeSong = mongoose.model("LikeSong", likeSongSchema, "like-songs");

export default LikeSong;