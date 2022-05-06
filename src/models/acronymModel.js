import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const AcronymSchema = new Schema({
  acronym: {
    type: String,
    required: 'Enter acronym'
  },
  definition: {
    type: String,
    required: "Enter definition"
  },
})