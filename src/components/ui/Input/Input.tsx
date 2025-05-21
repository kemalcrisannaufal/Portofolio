interface Proptypes {
  classname?: string;
  defaultValue?: string;
  disabled?: boolean;
  label: string;
  maxLength?: number;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}

const Input = (props: Proptypes) => {
  const {
    classname,
    defaultValue,
    disabled = false,
    label,
    maxLength,
    name,
    onChange,
    placeholder,
    required = false,
    type = "text",
    value,
  } = props;

  return (
    <div className="mb-1.5 md:mb-3">
      <label htmlFor={name} className="block mb-1 font-libre text-sm">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        className={`p-2 border border-gray-300 rounded w-full bg-white ${classname}`}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        maxLength={maxLength}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Input;
