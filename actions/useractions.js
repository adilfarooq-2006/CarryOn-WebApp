"use server"

import User from "@/models/User"
import connectDB from "@/db/connectDB"
import Payment from "@/models/Payment"
export const fetchuser = async (username) => {
    await connectDB();
    let u = await User.findOne({ username: username });
    console.log(u)
    if (!u) return null; // or you can return an error
    let user = u.toObject({ flattenObjectIds: true });
    return user;
}

export const fetchpayments = async (username) => {
    await connectDB()
    // find all payments sorted by decreasing order of amount and flatten object ids
    let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean()

    return p
}



export const updateProfile = async (data, oldusername) => {
    await connectDB()
    let ndata = Array.isArray(data) ? Object.fromEntries(data) : data;

    // If the username is being updated, check if username is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists" }
        }   
        await User.updateOne({email: ndata.email}, ndata)
        // Now update all the usernames in the Payments table 
        await Payment.updateMany({to_user: oldusername}, {to_user: ndata.username})
        
    }
    else{
        await User.updateOne({email: ndata.email}, ndata)
    }

    console.log("Updated user", ndata)
    return { success: true };
}
