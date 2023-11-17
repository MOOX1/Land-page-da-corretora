import SliderBanner from "@/components/SlideBanner";
import CardImage from "@/components/CardImage";
import { IEmpreendimentosProps } from "@/lib/schemas/Empreendimentos";

import "swiper/css";
import About from "@/components/About";

const getData = async (): Promise<IEmpreendimentosProps[] | undefined> => {
  try {
    const response: IEmpreendimentosProps[] = await fetch(
      `${process.env.NEXTAUTH_URL}/api/empreendimentos`,
      {
        next: {
          revalidate: 0,
        },
      }
    ).then((data) => data.json());

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const empreendimentos: IEmpreendimentosProps[] | undefined = await getData();
  return (
    <div className={"min-h-screen h-full w-full overflow-hidden"}>
      <SliderBanner
        id={empreendimentos?.[0]._id ?? ""}
        image={empreendimentos?.[0].imageMain ?? ""}
        name={empreendimentos?.[0].name ?? ""}
        description={empreendimentos?.[0].description ?? ""}
      />

      <CardImage data={empreendimentos ?? []} />
      <About />
    </div>
  );
}
