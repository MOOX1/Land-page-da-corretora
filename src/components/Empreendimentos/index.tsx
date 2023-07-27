import Table from "@/components/table";
import CardImage from "./CardImage";
import { Suspense } from "react";

export default function Empreendimentos() {
  return (
    <div className="flex gap-2 p-3 h-full">
      <div className="flex-1 bg-white p-2 text-black rounded relative">
        <h1 className="border-b border-white py-2">Empreendimentos :</h1>
        <Suspense fallback={<p>Espera que jaja carrega</p>}>
          <Table />
        </Suspense>
      </div>
      <Suspense fallback={<p>Espera que jaja carrega</p>}>
        <CardImage />
      </Suspense>
    </div>
  );
}
