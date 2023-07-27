import {
  ContextMenu as ContextMenuUi,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenu() {
  return (
    <ContextMenuUi>
      <ContextMenuTrigger className="flex h-auto aspect-video w-full items-center justify-center  border border-black rounded border-dashed text-sm">
        Cadastre uma imagem
      </ContextMenuTrigger>
    </ContextMenuUi>
  );
}
