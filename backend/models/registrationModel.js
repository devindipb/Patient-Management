import mongoose from "mongoose";

const registrationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    address: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

  },
  {
    timestamps: true,
  }
);

export const Registration = mongoose.model('Registration', registrationSchema);
