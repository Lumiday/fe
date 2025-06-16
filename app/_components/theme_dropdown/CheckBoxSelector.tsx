import React from 'react';
import Image from 'next/image';
import { CheckBoxState } from './Theme_Dropdown';

// 이미지 import
import CheckboxChecked from '@/public/imgs/CheckboxChecked.svg.svg';

interface CheckBoxSelectorProps {
  state: CheckBoxState;
  setState: React.Dispatch<React.SetStateAction<CheckBoxState>>;
}

export default function CheckBoxSelector({
  state,
  setState,
}: CheckBoxSelectorProps) {
  const handleCheckboxChange = (key: keyof CheckBoxState) => {
    setState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="inline-flex justify-start items-start gap-0.5">
      <div className="w-24 h-10 px-1 py-1.5 flex justify-start items-center gap-2.5">
        <div className="justify-start text-stone-900 text-base font-medium font-['Pretendard']">
          기타
        </div>
      </div>
      <div className="inline-flex flex-col justify-center items-start">
        <div className="h-10 inline-flex justify-start items-center gap-2.5">
          <div className="flex justify-start items-center gap-[5px]">
            <div
              className="w-4 h-4 relative cursor-pointer"
              onClick={() => handleCheckboxChange('disableZoom')}
            >
              {state.disableZoom ? (
                <Image
                  src={CheckboxChecked}
                  alt="Checked"
                  width={16}
                  height={16}
                  className="object-contain"
                />
              ) : (
                <div className="w-4 h-4 left-0 top-0 absolute rounded-[3px] border border-neutral-400 bg-white" />
              )}
            </div>
            <div className="justify-start text-stone-900 text-sm font-normal font-['Pretendard']">
              청첩장 확대 금지
            </div>
          </div>
        </div>
        <div className="h-10 inline-flex justify-start items-center gap-2.5">
          <div className="flex justify-start items-center gap-[5px]">
            <div
              className="w-4 h-4 relative cursor-pointer"
              onClick={() => handleCheckboxChange('scrollEffect')}
            >
              {state.scrollEffect ? (
                <Image
                  src={CheckboxChecked}
                  alt="Checked"
                  width={16}
                  height={16}
                  className="object-contain"
                />
              ) : (
                <div className="w-4 h-4 left-0 top-0 absolute rounded-[3px] border border-neutral-400 bg-white" />
              )}
            </div>
            <div className="justify-start text-stone-900 text-sm font-normal font-['Pretendard']">
              스크롤시 등장 효과
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
