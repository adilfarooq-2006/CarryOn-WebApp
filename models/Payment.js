import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {  type: String, required: true },
  to_user: { type: String, required: true },
  oid: { type: String},
    amount: { type: Number, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    done: { type: Boolean, default: false },
});

export default mongoose.models.Payment || mongoose.model("Payment", userSchema);