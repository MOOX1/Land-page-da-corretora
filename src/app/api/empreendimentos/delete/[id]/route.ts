import { NextRequest, NextResponse } from "next/server";
import { DeleteEmpreendimento } from "@/lib/controllers/empreendimentosController";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const response = DeleteEmpreendimento(params.id);

  return NextResponse.json({ status: 200 });
}
