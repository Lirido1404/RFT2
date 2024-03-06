import { NextResponse } from "next/server";
import FeedBack from "@/app/(models)/FeedBack";



export async function POST(req) {
    try {
      const feedBackData = await req.json(); // Récupérer directement les données du corps de la requête
  
      await FeedBack.create(feedBackData);
  
      return NextResponse.json({ message: "Feedback Created" }, { status: 201 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
  }
  
  export async function GET(){
      try{
          const feedbacks = await FeedBack.find();
          return NextResponse.json ({feedbacks}, {status:200})
  
      }
      catch(err){
          return NextResponse({message: "Failed to get infos about feedback",err},{status:500})
      }
  }
  