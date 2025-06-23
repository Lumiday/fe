import CheckboxChecked from '@/public/imgs/CheckboxChecked.svg.svg';
import { CheckBoxGrayOutProps } from '@/type/components';
import Image from 'next/image';

export default function CheckBoxGrayOut({
  checked,
  onChange,
  label,
}: CheckBoxGrayOutProps) {
  return (
    <div className="h-[2.5rem] inline-flex justify-start items-center gap-[0.625rem]  cursor-pointer">
      <div
        onClick={onChange}
        className="flex justify-start items-center gap-[0.3125rem]"
      >
        <div className="w-[1rem] h-[1rem] relative">
          {checked ? (
            <Image
              src={CheckboxChecked}
              alt="Checked"
              width={16}
              height={16}
              className="object-contain"
            />
          ) : (
            <div className="w-[1rem] h-[1rem] left-0 top-0 absolute rounded-[0.1875rem] border border-LumiDayGray-999 bg-white" />
          )}
        </div>
        <div
          className={`justify-start text-875-400 font-['Pretendard'] ${
            checked ? 'text-LumiDayGray-1e1' : 'text-LumiDayGray-999'
          }`}
        >
          {label}
        </div>
      </div>
    </div>
  );
}
