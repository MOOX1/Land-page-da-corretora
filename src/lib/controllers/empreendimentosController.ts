import Empreendimentos, {
  IEmpreendimentosProps,
} from "../schemas/Empreendimentos";
import database from "../database/mongoDB";

database.connect();

export async function GetEmpreendimentos() {
  const empreendimentos = await Empreendimentos.find();

  return empreendimentos;
}

export async function GetEmpreendimento(id: string) {
  const empreendimento = await Empreendimentos.findById(id).lean();

  return empreendimento;
}

export async function CreateEmpreendimento(data: IEmpreendimentosProps) {
  console.log(data);
  const newEmpreendimento = await Empreendimentos.findByIdAndUpdate(data._id, {
    imageMain: data.imageMain,
    imagePlant: data.imagePlant,
    name: data.name,
    description: data.description,
    localizacao: data.localizacao,
  });

  console.log(newEmpreendimento);

  newEmpreendimento.save();

  return { status: 200, newEmpreendimento };
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
