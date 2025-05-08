type Proptypes = {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classname?: string;
  disabled?: boolean;
  maxLength?: number;
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
    classname,
    disabled = false,
    maxLength,
  } = props;
  return (
    <div className="mb-3">
      <label htmlFor={name} className="block mb-1 font-libre text-sm">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        className={`p-2 border border-neutral-300 rounded w-full bg-white ${classname}`}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        maxLength={maxLength}
      />
    </div>
  );
};

export default Input;
