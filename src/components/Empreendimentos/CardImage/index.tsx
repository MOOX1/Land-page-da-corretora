"use client";

import AddImage from "@/components/Empreendimentos/AddImage";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Control, UseFormReturn, useForm } from "react-hook-form";
import * as zod from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { handleClientScriptLoad } from "next/script";

const schema = z.object({
  nome: z.string().min(1, "Informe um email válido"),
  localizacao: z.string().min(1, "Campo Obrigatório"),
  descricao: z.string().min(1, "Campo Obrigatório"),
});

type TFormDataProps = z.infer<typeof schema>;

export default function CardImage() {
  const [imageMain, setImageMain] = useState<File>();
  const [imagePlant, setImagePlant] = useState<File>();

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    reset,
  } = useForm<TFormDataProps>({
    mode: "onSubmit",
    criteriaMode: "firstError",
    resolver: zod.zodResolver(schema),
    defaultValues: {
      descricao: "",
      localizacao: "",
      nome: "",
    },
  });

  const onSubmit = async (data: TFormDataProps) => {
    const formData = new FormData();

    formData.append("file", setImageMain.toString());
    formData.append("upload_preset", "kjoct0g0");

    const response = fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/upload`,
      {}
    );
    console.log(data);
    console.log(imageMain);
    console.log(imagePlant);
  };

  const handleImage = (value: File, main: boolean) => {
    if (main) return setImageMain(value);

    return setImagePlant(value);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-[3] bg-white w-full text-black rounded h-full p-3"
    >
      <h1 className="w-full py-2 text-center border-b border-gray-200 mb-2">
        Adicionar novo empreendimento
      </h1>
      <div className="flex w-full gap-3">
        <div className="w-2/5 flex flex-col gap-2">
          <AddImage
            handleImage={(e) => handleImage(e, true)}
            keySTRING="main"
            label="Cadastrar imagem principal:"
          />
          <AddImage
            handleImage={(e) => handleImage(e, false)}
            keySTRING="plant"
            label="Cadastrar planta:"
          />
        </div>
        <div className="flex w-full flex-col ">
          <p className="text-sm">Nome:</p>
          <Input
            type="text"
            className="rounded w-full placeholder:text-gray-400 text-sm p-1 mb-3"
            placeholder="Nome do empreendimento"
            {...register("nome")}
          />
          <p className="text-sm">Localização:</p>
          <Input
            type="text"
            className="rounded w-full placeholder:text-gray-400 text-sm p-1 mb-3"
            placeholder="Localização:"
            {...register("localizacao")}
          />
          <p className="text-sm">Descrição</p>
          <Textarea
            placeholder="descrição do empreendimento"
            className="w-full rounded resize-none h-auto placeholder:text-gray-400 p-1"
            rows={10}
            {...register("descricao")}
          />
          <Button
            variant={"outline"}
            type="submit"
            className="w-full bg-gray-600 mt-3 rounded"
          >
            Cadastrar
          </Button>
        </div>
      </div>
    </form>
  );
}
