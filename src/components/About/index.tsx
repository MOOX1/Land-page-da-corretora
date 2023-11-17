import Image from "next/image";
import People from "@/assets/people.jpeg";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function About() {
  return (
    <div className="mpy-16 bg-black/30 flex items-center justify-center w-full">
      <div className=" flex flex-col items-center gap-3 justify-center">
        <p className="text-3xl uppercase">Bruna Morais</p>
        <div className="flex items-center">
          <Image src={People} alt="" />
        </div>
      </div>
      <div className=" p-14 w-1/2">
        <p className="w-10/12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, earum
          explicabo repellendus aperiam doloribus quos ad autem mollitia esse
          quae consequatur aut doloremque exercitationem dolores? Architecto
          deserunt corrupti eaque. Deleniti.
        </p>

        <p className="text-lg font-bold py-2">Entre em contato:</p>
        <div className="flex flex-col gap-2 w-10/12">
          <div className="flex gap-2">
            <Input placeholder="Nome" className="flex-1 rounded" />
            <Input placeholder="Telefone" className="flex-1 rounded" />
          </div>
          <div>
            <Textarea className="rounded" placeholder="Mensagem" />
          </div>
          <div className="flex justify-center">
            <Button className="w-min transition-colors duration-300 whitespace-nowrap uppercase hover:bg-white/30 bg-gray-700 border-white border text-white rounded-xl">
              {" "}
              Enviar{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
