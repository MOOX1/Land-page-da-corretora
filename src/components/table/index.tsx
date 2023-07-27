"use client";

import {
  Table as TableUi,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2, RotateCw } from "lucide-react";
import { useEffect, useState } from "react";
import { IEmpreendimentosProps } from "@/lib/schemas/Empreendimentos";
import Image from "next/image";

export default function Table() {
  const [empreendimentos, setEmpreendimentos] = useState<
    IEmpreendimentosProps[]
  >([]);

  const fetchEmpreendimentos = async () => {
    try {
      fetch("/api/empreendimentos", {
        next: {
          revalidate: 0,
        },
      })
        .then((data) => data.json())
        .then(setEmpreendimentos)
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmpreendimentos = async (id: string) => {
    try {
      fetch(`/api/empreendimentos/delete/${id}`, {
        method: "DELETE",
      })
        .finally(() => fetchEmpreendimentos())
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmpreendimentos();
  }, []);

  return (
    <TableUi>
      <TableHeader className="bg-gray-300">
        <TableRow>
          <TableHead className="w-24 "> Imagem </TableHead>
          <TableHead> Nome </TableHead>
          <TableHead> Ações </TableHead>
          <th>
            <RotateCw
              onClick={fetchEmpreendimentos}
              className="cursor-pointer absolute top-3 right-3 hover:text-green-400 transition-colors w-5"
            />
          </th>
        </TableRow>
      </TableHeader>
      <TableBody>
        {empreendimentos.map((item) => (
          <TableRow key={item.name} className="hover:bg-gray-300">
            <TableCell className="font-medium">
              <Image
                className="aspect-video w-24"
                src={item.imageMain}
                alt={item.name}
                height={50}
                width={50}
              />
            </TableCell>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell className="flex gap-2">
              <Trash2
                onClick={() =>
                  deleteEmpreendimentos(item._id?.toString() || "")
                }
                className="cursor-pointer hover:text-red-400 transition-colors w-5"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableUi>
  );
}
