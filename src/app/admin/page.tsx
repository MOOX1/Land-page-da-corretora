"use client";

import Table from "@/components/table";
import AddImage from "@/components/AddImage";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Admin() {
  return (
    <div className="flex gap-2 p-3 h-full">
      <div className="flex-1 bg-white p-2 text-black rounded">
        <h1 className="border-b border-white py-2">Empreendimentos :</h1>
        <Table />
      </div>
      <div className="flex-[3] bg-white w-full text-black rounded h-full p-3">
        <h1 className="w-full py-2 text-center border-b border-gray-200 mb-2">
          Adicionar novo empreendimento
        </h1>
        <div className="flex w-full gap-3">
          <div className="w-2/5 flex flex-col gap-2">
            <AddImage key="main" label="Cadastrar imagem principal:" />
            <AddImage key="plant" label="Cadastrar planta:" />
          </div>
          <div className="flex w-full flex-col ">
            <p className="text-sm">Nome:</p>
            <Input
              type="text"
              className="rounded w-full placeholder:text-gray-400 text-sm p-1 mb-3"
              placeholder="Nome do empreendimento"
            />
            <p className="text-sm">Localização:</p>
            <Input
              type="text"
              className="rounded w-full placeholder:text-gray-400 text-sm p-1 mb-3"
              placeholder="Localização:"
            />
            <p className="text-sm">Descrição</p>
            <Textarea
              placeholder="descrição do empreendimento"
              className="w-full rounded resize-none h-auto placeholder:text-gray-400 p-1"
              rows={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
