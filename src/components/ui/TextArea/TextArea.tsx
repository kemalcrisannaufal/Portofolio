interface Proptypes {
  defaultValue?: string;
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  rows?: number;
}

const TextArea = (props: Proptypes) => {
  const {
    defaultValue,
    label,
    name,
    placeholder,
    required = false,
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
        className="p-2 border border-gray-300 rounded w-full"
      />
    </div>
  );
};

export default TextArea;
