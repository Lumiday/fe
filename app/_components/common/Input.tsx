interface InputProps {
  type: string;
  label: string;
  inputWidth: number;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isButton?: boolean;
}

const Input = (props: InputProps) => {
  return (
    <div>
      <div className="flex items-center h-[2.5rem]">
        <label
          htmlFor={props.id}
          className="inline-block w-[6.25rem] py-[0.4375rem] px-[0.25rem] bg-[pink] p text-1-500 text-LumiDayGray-1e1 mr-[0.25rem]"
        >
          {props.label}
        </label>
        <input
          id={props.id}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          className="border h-full p-[0.625rem] border-LumiDayGray-999 rounded-[0.3125rem]"
          style={{ width: `${props.inputWidth}rem` }}
        />
        {props.isButton && <button>검색</button>}
      </div>
    </div>
  );
};

export default Input;
