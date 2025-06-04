interface Proptypes {
  cols?: number;
  defaultValue?: string;
  errorMessage?: string;
  isInvalid?: boolean;
  label: string;
  maxLength?: number;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  required?: boolean;
  rows?: number;
  value?: string;
  variant?: "border" | "none";
}

const TextArea = (props: Proptypes) => {
  const {
    cols = 30,
    defaultValue,
    errorMessage,
    isInvalid,
    label,
    maxLength = 5000,
    name,
    onChange,
    placeholder,
    required = false,
    rows = 5,
    value,
    variant = "border",
  } = props;

  const borderStyle =
    variant === "border"
      ? "border border-gray-300 dark:border-neutral-700 focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white"
      : "border-none focus:outline-none outline-0";
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-1 font-medium text-gray-700 dark:text-gray-200 text-sm"
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <textarea
        id={name}
        cols={cols}
        className={`bg-white dark:bg-neutral-800 p-2 rounded w-full font-inter dark:text-white text-sm transition-all ${borderStyle}`}
        defaultValue={defaultValue}
        maxLength={maxLength}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        value={value}
        onChange={onChange}
      />
      {isInvalid && <p className="text-red-500 text-xs">{errorMessage}</p>}
    </div>
  );
};

export default TextArea;
