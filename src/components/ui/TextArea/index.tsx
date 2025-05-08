type Proptypes = {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  defaultValue?: string;
  rows?: number;
};

const TextArea = (props: Proptypes) => {
  const {
    name,
    label,
    placeholder,
    required = false,
    defaultValue,
    rows = 5,
  } = props;
  return (
    <div className="mb-3">
      <label htmlFor={name} className="block mb-1 font-libre text-md">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        cols={30}
        rows={rows}
        defaultValue={defaultValue}
        required={required}
        className="p-2 border border-neutral-300 rounded w-full"
      />
    </div>
  );
};

export default TextArea;
