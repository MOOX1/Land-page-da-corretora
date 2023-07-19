import {
  Table as TableUi,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2, Pencil } from "lucide-react";

export default function Table() {
  return (
    <TableUi>
      <TableHeader className="bg-gray-300">
        <TableRow>
          <TableHead className="w-24 "> Imagem </TableHead>
          <TableHead> Nome </TableHead>
          <TableHead> Ações </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="hover:bg-gray-300">
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell className="font-medium">Paid</TableCell>
          <TableCell className="flex gap-2">
            <Pencil className="cursor-pointer hover:text-green-400 transition-colors w-5" />
            <Trash2 className="cursor-pointer hover:text-red-400 transition-colors w-5" />
          </TableCell>
        </TableRow>
      </TableBody>
    </TableUi>
  );
}
