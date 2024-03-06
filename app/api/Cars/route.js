import { NextResponse } from "next/server";
import Cars from "@/app/(models)/Carsdetail";



export async function POST(req) {
    try {
      const carsData = await req.json(); // Récupérer directement les données du corps de la requête
  
      await Cars.create(carsData);
  
      return NextResponse.json({ message: "Car Created" }, { status: 201 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
  }
  
  export async function GET(){
      try{
          const cars = await Cars.find();
          return NextResponse.json ({cars}, {status:200})
  
      }
      catch(err){
          return NextResponse({message: "Failed to get infos about cars",err},{status:500})
      }
  }