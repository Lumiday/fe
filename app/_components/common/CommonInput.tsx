import { CommonInputProps } from '@/type/components';

const getWidthClass = (width: number): string => {
  switch (width) {
    case 58:
      return 'w-[58px]';
    case 104:
      return 'w-[104px]';
    case 172:
      return 'w-[172px]';
    default:
      return `w-[${width}px]`;
  }
};

export default function CommonInput({
  type,
  inputWidth,
  id,
  value,
  onChange,
  placeholder,
}: CommonInputProps) {
  const widthClass = getWidthClass(inputWidth);

  return (
    <div
      className={`${widthClass} h-10 p-2.5 rounded-[5px] outline outline-1 outline-offset-[-1px] outline-neutral-400 flex justify-start items-center gap-2.5 ${
        type === 'text' && inputWidth === 104 ? 'overflow-hidden' : ''
      }`}
    >
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-full text-sm font-normal font-['Pretendard'] text-black bg-transparent outline-none placeholder:text-neutral-400"
      />
    </div>
  );
}
