import Empreendimentos, {
  IEmpreendimentosProps,
} from "../schemas/Empreendimentos";
import database from "../database/mongoDB";

database.connect();

export async function GetEmpreendimentos() {
  const empreendimentos = await Empreendimentos.find();

  return empreendimentos;
}

export async function CreateEmpreendimento(data: IEmpreendimentosProps) {
  const newEmpreendimento = await Empreendimentos.create({
    imageMain: data.imageMain,
    imagePlant: data.imagePlant,
    name: data.name,
    description: data.description,
    localizacao: data.localizacao,
  });

  const empreendimento = await newEmpreendimento.save();

  return { status: 200, empreendimento };
}

export async function DeleteEmpreendimento(id: string) {
  const empreendimentoDeleted = await Empreendimentos.findByIdAndDelete({
    _id: id,
  });

  if (!empreendimentoDeleted) {
    return { status: 404, message: "Usuário não encontrado" };
  }

  return empreendimentoDeleted;
}
