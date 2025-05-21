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
}

const Input = (props: Proptypes) => {
  const {
    classname,
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
  } = props;

  return (
    <div>
      <div>
        {label && (
          <label htmlFor={name} className="block mb-1 font-libre text-sm">
            {label}
            {required && <span className="text-red-500">*</span>}
          </label>
        )}

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

      {isInvalid && <p className="mt-1 text-red-500 text-xs">{errorMessage}</p>}
    </div>
  );
};

export default Input;
