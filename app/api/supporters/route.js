import connectDB from "@/db/connectDB";
import Payment from "@/models/Payment";

export async function POST(req){
    await connectDB();   
    console.log('connect to db')              //  connects to Mongo
    const body = await req.json()
    const { supporterName, creatorUsername, amount, message } = body;
    const newPayment = await Payment.create({
      name: supporterName,
      to_user: creatorUsername,
      amount,
      message,
    });
    await newPayment.save();
    
    const updatedPayment = await Payment.findByIdAndUpdate(
        newPayment.id,
        { done: true },
        { new: true }
      );
    console.log('Updated Payment:', updatedPayment)
    return Response.json({ success: true, payment: updatedPayment }, { status: 201 });

  }

export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const creatorUsername = searchParams.get('creatorUsername');
  if (!creatorUsername) {
    return Response.json({ success: false, message: "Missing creatorUsername" }, { status: 400 });
  }
  const payments = await Payment.find({ to_user: creatorUsername, done: true });

  return Response.json({ success: true, payments });
  
}