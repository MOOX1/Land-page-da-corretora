import { NextResponse, NextRequest } from "next/server";
import { GetEmpreendimento } from "@/lib/controllers/empreendimentosController";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");
  if (!id) return NextResponse.error();

  const response = await GetEmpreendimento(id ?? "");

  console.log(response);

  return NextResponse.json(response);
}
