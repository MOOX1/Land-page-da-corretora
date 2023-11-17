import { Input as InputRadix } from "@/components/ui/input";
import type { UseFormRegister, Path, FieldValues } from "react-hook-form";

interface IInputProps<T extends FieldValues> {
  label: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  registerString: Path<T>;
}

export default function Input<T extends FieldValues>({
  label,
  placeholder,
  register,
  registerString,
}: IInputProps<T>) {
  return (
    <div className="flex-1">
      <p className="text-sm">{label}</p>
      <InputRadix
        type="string"
        placeholder={placeholder}
        className="rounded w-full placeholder:text-gray-400 text-sm p-1 mb-3"
        {...register(registerString)}
      />
    </div>
  );
}
