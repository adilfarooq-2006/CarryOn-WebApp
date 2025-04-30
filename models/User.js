import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: { type: String,},
    dec: { type: String,},
    email: { type: String, required: true },
    username: { type: String, required: true },
    profileimg: { type: String },
    coverimg: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});


export default mongoose.models.User || model("User", userSchema);