import { NextResponse, NextRequest } from "next/server";
import { GetEmpreendimentos } from "@/lib/controllers/empreendimentosController";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const response = await GetEmpreendimentos();

  return NextResponse.json(response);
}
