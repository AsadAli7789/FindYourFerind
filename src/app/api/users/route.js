
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

import { connectDB } from "@/lib/db/connectDB";
import { UserModal } from "@/lib/models/User";

export async function GET(request) {
  await connectDB();
  const users = await UserModal.find();
  return Response.json(
    {
      msg: "Users Fetched Successfully",
      users,
    },
    { status: 200 }
  );
}

export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  let newuser = new UserModal(obj);
   await newuser.save()


    return Response.json(newuser,{ msg:"data is added ",status:"201",}
     
    )


}

export async function PUT(request) {}

export async function DELETE(request) {}
