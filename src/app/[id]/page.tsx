import About from "@/components/About";
import SliderBanner from "@/components/SlideBanner";
import { IEmpreendimentosProps } from "@/lib/schemas/Empreendimentos";
import Image from "next/image";

interface IEmpreendimento {
  params: {
    id: string;
  };
}

const getEmpreendimento = async (
  id: string
): Promise<IEmpreendimentosProps | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/empreendimentos/findOne?id=${id}`,
      {
        next: {
          revalidate: 0,
        },
      }
    ).then((response) => response.json());

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default async function Empreendimento({ params }: IEmpreendimento) {
  const empreendimento = await getEmpreendimento(params.id);

  const urlMaps = empreendimento?.localizacao.split('src="')[1].split('"')[0];

  console.log(urlMaps);

  return (
    <div>
      <SliderBanner image={empreendimento?.imageMain ?? ""} />
      <div className="flex gap-8 mt-10">
        <div className="flex-1 pl-20 mt-14  flex flex-col items-baseline gap-6">
          <h1 className="text-3xl">{empreendimento?.name}</h1>
          <p className="pl-10 w-full">{empreendimento?.description}</p>
        </div>
        <div className="flex-1 flex items-end justify-end aspect-video w-full h-auto">
          <Image
            src={empreendimento?.imagePlant ?? ""}
            width={1000}
            height={1000}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center my-8">
        <iframe
          src={urlMaps}
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <About />
    </div>
  );
}
