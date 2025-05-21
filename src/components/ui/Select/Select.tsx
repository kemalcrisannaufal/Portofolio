interface Proptypes {
  defaultValue?: string;
  label: string;
  name: string;
  options: { name: string; value: string }[];
}

const Select = (props: Proptypes) => {
  const { defaultValue, label, name, options } = props;
  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className="block mb-1 font-mono font-semibold text-md"
      >
        {label}
      </label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        className="p-2 border border-gray-300 rounded w-full"
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
