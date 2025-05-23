interface Proptypes {
  classname?: string;
  defaultValue?: string;
  disabled?: boolean;
  errorMessage?: string;
  isInvalid?: boolean;
  label?: string;
  maxLength?: number;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  variant?: "border" | "none";
}

const Input = ({
  classname = "",
  defaultValue,
  disabled = false,
  errorMessage,
  isInvalid = false,
  label,
  maxLength,
  name,
  onChange,
  placeholder,
  required = false,
  type = "text",
  value,
  variant = "border",
}: Proptypes) => {
  const baseInputStyle =
    "w-full p-2 rounded transition-all text-sm font-inter bg-white dark:bg-neutral-800 dark:text-white";

  const borderStyle =
    variant === "border"
      ? "border border-gray-300 dark:border-neutral-700 focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white"
      : "border-none focus:outline-none outline-0";

  const disabledStyle = disabled
    ? "opacity-60 cursor-not-allowed"
    : "cursor-text";

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 font-medium text-gray-700 dark:text-gray-200 text-sm"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        disabled={disabled}
        maxLength={maxLength}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`${baseInputStyle} ${borderStyle} ${disabledStyle} ${classname}`}
      />

      {isInvalid && <p className="mt-1 text-red-500 text-xs">{errorMessage}</p>}
    </div>
  );
};

export default Input;
