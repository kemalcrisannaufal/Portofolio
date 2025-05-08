type Proptypes = {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  defaultValue?: string;
};

const TextArea = (props: Proptypes) => {
  const { name, label, placeholder, required = false, defaultValue } = props;
  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className="block mb-1 font-mono font-semibold text-md"
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        cols={30}
        rows={5}
        defaultValue={defaultValue}
        required={required}
        className="p-2 border border-neutral-300 rounded w-full"
      />
    </div>
  );
};

export default TextArea;
