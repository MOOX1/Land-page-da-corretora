"use client";

import Link from "next/link";
import empreendimento from "../assets/empreendimento1.svg";
import Image from "next/image";
import CardImage from "@/components/CardImage/";

export default function Home() {
  return (
    <div className={"min-h-screen h-full w-full overflow-hidden"}>
      <nav className="flex gap-6 p-3">
        <Link href={"#"} className="text-base font-semibold">
          {" "}
          desconstrutivismo
        </Link>
        <Link href={"#"} className="text-base font-semibold">
          {" "}
          modernismo
        </Link>
        <Link href={"#"} className="text-base font-semibold">
          {" "}
          vanguardas
        </Link>
        <Link href={"#"} className="text-base font-semibold">
          {" "}
          construtivismo
        </Link>
      </nav>
      <div className="flex gap-8">
        <div className="flex-1 pl-20 mt-14  flex flex-col items-baseline gap-6">
          <h1 className="text-3xl">zaha hadid</h1>
          <p className="pl-10 w-full">
            Zaha Mohammad Hadid, foi uma arquiteta iraquiana-britânica
            identificada com a corrente desconstrutivista da arquitetura.
            Formou-se em matemática na Universidade Americana de Beirute. Após
            se formar, passou a estudar na Architectural Association de Londres.
          </p>
          <p className="pl-10 w-full">
            Em 2004, Zaha Hadid se tornou a primeira mulher a receber o Prêmio
            Pritzker de Arquitetura, atribuído pelo conjunto de sua obra.
            Anteriormente também fora premiada pela Ordem do Império Britânico
            pelos serviços realizados à arquitetura. Em 2015 ela quebrou a
            hegemonia masculina, ao ser laureada com a medalha de ouro do Royal
            Institute of British Architects.
          </p>
        </div>
        <div className="flex-1 flex items-end justify-end aspect-video w-full h-auto">
          <Image src={empreendimento} alt="" />
        </div>
      </div>
      <CardImage />
    </div>
  );
}
