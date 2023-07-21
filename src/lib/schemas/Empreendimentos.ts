import { Schema, models, model } from "mongoose";

export interface IEmpreendimentosProps {
  _id?: string;
  imageMain: string;
  imagePlant: string;
  name: string;
  description: string;
  localizacao: string;
}

const empreendimentosSchema = new Schema<IEmpreendimentosProps>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageMain: { type: String, required: true },
    imagePlant: { type: String, required: true },
    localizacao: { type: String, required: true },
  },
  { timestamps: true }
);

const Empreendimentos =
  models.empreendimentos || model("empreendimentos", empreendimentosSchema);

export default Empreendimentos;
