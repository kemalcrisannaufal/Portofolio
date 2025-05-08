type Proptypes = {
  options: string[];
  name: string;
  label: string;
  checked: string[];
  setChecked: (option: string[]) => void;
};

const Checkbox = (props: Proptypes) => {
  const { name, label, options, checked, setChecked } = props;

  const handleOnChane = (option: string) => {
    const isExist = checked.find((item) => item === option);
    if (isExist) {
      setChecked(checked.filter((item) => item !== option));
    } else {
      setChecked([...checked, option]);
    }
  };
  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className="block mb-1 font-mono font-semibold text-md"
      >
        {label}
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {options.map((option, index) => {
          return (
            <div key={index} className="flex justify-start items-center mb-2">
              <input
                id={option}
                name={option}
                type="checkbox"
                checked={checked.includes(option)}
                className="p-2 border border-neutral-300 rounded"
                onChange={() => handleOnChane(option)}
              />
              <label htmlFor={option} className="ml-2">
                {option}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkbox;
