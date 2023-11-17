"use client";

import Table from "@/components/table";
import CardImage from "./CardImage";
import { Suspense, useState } from "react";
import { IEmpreendimentosProps } from "@/lib/schemas/Empreendimentos";

export default function Empreendimentos() {
  const [dataSelected, setDataSelected] = useState<
    IEmpreendimentosProps | undefined
  >();

  const handleSelectedEmpreendimento = (item: IEmpreendimentosProps) => {
    setDataSelected(item);
  };

  return (
    <div className="flex  justify-center w-full overflow-hidden gap-2 p-3 h-full">
      <div className="flex-1 bg-white p-2 text-black rounded relative">
        <h1 className="border-b border-white py-2">Empreendimentos :</h1>
        <Suspense fallback={<p>Espera que jaja carrega</p>}>
          <Table onClick={handleSelectedEmpreendimento} />
        </Suspense>
      </div>
      <Suspense fallback={<p>Espera que jaja carrega</p>}>
        <div className="flex-[2] h-full   ">
          <CardImage itemSelected={dataSelected} />
        </div>
      </Suspense>
    </div>
  );
}
