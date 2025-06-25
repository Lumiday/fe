import { CommonTextAreaProps } from '@/type/components';

export default function CommonTextAreaSize({
  inputWidth,
  inputHeight = 2.5,
  id,
  value,
  onChange,
  placeholder,
}: CommonTextAreaProps) {
  return (
    <div
      style={{ width: `${inputWidth}rem`, height: `${inputHeight}rem` }}
      className="flex items-start p-[0.625rem] rounded-[0.3125rem] border-solid border-[0.0625rem] border-LumiDayGray-999 focus-within:border-LumiDayGray-1e1 justify-startgap-[0.625rem]"
    >
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-full text-875-400 font-['Pretendard'] text-LumiDayGray-1e1 bg-transparent outline-none placeholder:text-LumiDayGray-999 resize-none"
      />
    </div>
  );
}
