import { NextResponse } from "next/server";
import FeedBack from "@/app/(models)/FeedBack";

export async function GET(req, { params }) {
  try {
    
    const id = params.id;
    const foundFeedBack = await FeedBack.findOne({ _id: id });
    return NextResponse.json({ foundFeedBack }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
    try {
      const { id } = params;
      await FeedBack.findByIdAndDelete(id);
      return NextResponse.json({ message: "FeedBack Deleted" }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
  }



  export async function PUT(req, { params }) {
    try {
      const id = params.id;
      const body = await req.json();
      const updateFeedBackData = await FeedBack.findByIdAndUpdate(id,{
          ...body
      });
      return NextResponse.json({ message: "FeedBack updated" }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
  }