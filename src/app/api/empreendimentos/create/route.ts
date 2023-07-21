import { NextResponse, NextRequest } from "next/server";
import { CreateEmpreendimento } from "@/lib/controllers/empreendimentosController";

export async function POST(req: NextRequest) {
  const res = await req.json();

  const response = await CreateEmpreendimento(res);

  return NextResponse.json({ status: 200, message: "done" });
}
