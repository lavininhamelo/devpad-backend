import mongoose, { Schema } from "mongoose";

const NoteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author_id: { type: Schema.Types.ObjectId, ref: "User" },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
  content: [
    {
      type: Schema.Types.ObjectId,
      ref: "Block",
    },
  ],
  type: Boolean,
  url: String,
});

export default mongoose.model("Note", NoteSchema);