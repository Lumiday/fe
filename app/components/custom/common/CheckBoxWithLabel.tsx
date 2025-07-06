import { CheckBoxWithLabelProps } from '@/type/components';
import Image from 'next/image';
import CheckboxChecked from '@/public/imgs/CheckboxChecked.svg.svg';

export function CheckBoxWithLabel({
  checked,
  onChange,
  label,
}: CheckBoxWithLabelProps) {
  return (
    <div
      onClick={onChange}
      className="h-[2.5rem] inline-flex justify-start items-center gap-[0.125rem] cursor-pointer"
    >
      <div className="flex justify-start items-center gap-[0.3125rem]">
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
        <div className="justify-start text-LumiDayGray-1e1 text-875-400 font-['Pretendard']">
          {label}
        </div>
      </div>
    </div>
  );
}
