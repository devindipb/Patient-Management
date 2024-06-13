import mongoose from "mongoose";

const petSchema = mongoose.Schema(
  {
    petname: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    pettype: {
      type: String,
      required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },

  },
  {
    timestamps: true,
  }
);

export const Pet = mongoose.model('Pet', petSchema);
