import { NextResponse } from "next/server";
import Cars from "@/app/(models)/Carsdetail";


export async function GET(req, { params }) {
  try {
    
    const id = params.id;
    const foundCars = await Cars.findOne({ _id: id });
    return NextResponse.json({ foundCars }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
    try {
      const { id } = params;
      await Cars.findByIdAndDelete(id);
      return NextResponse.json({ message: "Contact Deleted" }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
  }



  export async function PUT(req, { params }) {
    try {
      const id = params.id;
      const body = await req.json();
      const updateCarData = await Cars.findByIdAndUpdate(id,{
          ...body
      });
      return NextResponse.json({ message: "Contact updated" }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
  }