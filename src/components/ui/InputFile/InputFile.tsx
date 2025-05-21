/* eslint-disable @typescript-eslint/no-explicit-any */
interface Proptypes {
  label: string;
  name: string;
  onChange: (e: any) => void;
  required?: boolean;
}

const InputFile = (props: Proptypes) => {
  const { label, name, onChange, required = false } = props;
  return (
    <div className="block mb-2 w-full">
      <label htmlFor={name} className="w-full">
        <div className="flex gap-5 w-full">
          <div className="flex flex-grow justify-center items-center bg-gray-200 p-2 border border-gray-300 rounded">
            <i className="mr-2 text-2xl bx bx-pencil" />
            {label}
            {required && <span className="text-red-500"> *</span>}
          </div>
        </div>
      </label>
      <input
        id={name}
        name={name}
        type="file"
        className="hidden"
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default InputFile;
