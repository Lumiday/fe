import { CommonInputProps } from '@/type/components';

export default function CommonInputSize({
  type,
  inputWidth,
  id,
  value,
  onChange,
  placeholder,
}: CommonInputProps) {
  return (
    <div
      style={{ width: `${inputWidth}rem` }}
      className=" h-[2.5rem] p-[0.625rem] rounded-[0.3125rem] border-solid border-[0.0625rem] border-LumiDayGray-999 focus-within:border-LumiDayGray-1e1 flex justify-start items-center gap-[0.625rem]"
    >
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-full text-875-400 font-['Pretendard'] text-LumiDayGray-1e1 bg-transparent outline-none placeholder:text-LumiDayGray-999"
      />
    </div>
  );
}
