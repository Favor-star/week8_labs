import { FC } from "react";
import { cn } from "../utils";

interface InputProps {
  label: string;
  errorMessage?: string;
  placeholder: string;
  type?: string;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
}

const Input: FC<InputProps> = ({
  label,
  placeholder,
  autoComplete,
  errorMessage = "",
  type = "text",
  ...props
}) => {
  return (
    <fieldset className="w-full space-y-1">
      <div className="w-full flex justify-between items-end gap-2 px-1">
        <label htmlFor="" className="font-bold text-sm">
          {label}
        </label>
        <p className="inline text-xs text-red text-end">{errorMessage}</p>
      </div>
      <input
        type={type}
        id={label.toLocaleLowerCase().split(" ").join("-")}
        placeholder={placeholder}
        className={cn(
          "w-full ps-4 py-4 rounded-lg block border border-black/50 focus:outline-action focus:outline-2 transition-all font-medium placeholder:font-medium",
          errorMessage !== "" && "border-red"
        )}
        {...props}
        autoComplete={autoComplete}
      />
    </fieldset>
  );
};

export default Input;
