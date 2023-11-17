import { Schema, models, model, Model } from "mongoose";

interface ISpecificationsProps {
  houseSize: string;
  bedrooms: string;
  bathroom: string;
}

export interface IEmpreendimentosProps extends Document {
  _id?: string;
  imageMain: string;
  imagePlant: string;
  name: string;
  description: string;
  localizacao: string;
  specifications: ISpecificationsProps;
}

const specificationsSchema = new Schema<ISpecificationsProps>({
  bathroom: { type: String },
  bedrooms: { type: String },
  houseSize: { type: String },
});

const empreendimentosSchema = new Schema<IEmpreendimentosProps>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageMain: { type: String, required: true },
    imagePlant: { type: String, required: true },
    localizacao: { type: String, required: true },
    specifications: specificationsSchema,
  },
  { timestamps: true }
);

const Empreendimentos: Model<IEmpreendimentosProps> =
  models.empreendimentos || model("empreendimentos", empreendimentosSchema);

export default Empreendimentos;
