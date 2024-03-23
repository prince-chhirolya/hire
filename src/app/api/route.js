import { NextResponse,NextRequest } from "next/server";
import Dbconnect from "@/lib/connect";
import UserDetails from "../Server/UserDetails";
export async function POST(req,res) {
    await Dbconnect();
    const data = await req.json();
    await UserDetails(data);
    console.log(data);
    return NextResponse.json({message : "message"});
    }