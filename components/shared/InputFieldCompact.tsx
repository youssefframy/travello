import { HTMLInputTypeAttribute } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface InputProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  id: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  inputMode:
    | "email"
    | "search"
    | "tel"
    | "text"
    | "url"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;
  label: string;
  errorMessage?: string;
}

const InputFieldCompact = <T extends FieldValues>(props: InputProps<T>) => {
  const {
    name,
    id,
    placeholder,
    type,
    inputMode,
    label,
    register,
    errorMessage,
  } = props;
  return (
    <div>
      <div className="relative font-helvetica">
        <input
          type={type}
          id={id}
          inputMode={inputMode}
          aria-describedby="outlined_success_help"
          className="peer block w-full appearance-none rounded-lg border bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-black-500 focus:border-black-500 focus:outline-none focus:ring-0"
          placeholder={placeholder}
          {...register(name)}
        />
        <label
          htmlFor={id}
          className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-black-200/50 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
        >
          {label}
        </label>
      </div>
      <p
        id="outlined_success_help"
        className="mt-2 text-xs italic text-red-500"
      >
        {errorMessage}
      </p>
    </div>
  );
};

export default InputFieldCompact;
