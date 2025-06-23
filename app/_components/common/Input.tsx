import { InputProps } from '@/type/components';

const Input = (props: InputProps) => {
  return (
    <div>
      <div className="flex items-center h-[2.5rem]">
        <label
          htmlFor={props.id}
          className="inline-block w-[6.25rem] py-[0.4375rem] px-[0.25rem] text-1-500 text-LumiDayGray-1e1 mr-[0.25rem]"
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
        {props.isButton && (
          <button className="py-[0.4375rem] px-[0.625rem] border border-LumiDayGray-1e1 rounded-[0.3125rem] h-[2.5rem] ml-[0.62rem] text-875-400 text-LumiDayGray-1e1">
            검색
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
