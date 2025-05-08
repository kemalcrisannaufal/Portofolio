type Proptypes = {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: Proptypes) => {
  const {
    name,
    label,
    placeholder,
    type,
    required = false,
    onChange,
    defaultValue,
  } = props;
  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className="block mb-1 font-mono font-semibold text-md"
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        className="p-2 border border-neutral-300 rounded w-full"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
