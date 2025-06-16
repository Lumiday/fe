import React from 'react';
import Image from 'next/image';
import CheckboxChecked from '@/public/imgs/CheckboxChecked.svg.svg';
import { CheckBoxState, CheckBoxProps } from '@/type/components';

interface CheckBoxSelectorProps {
  state: CheckBoxState;
  setState: (state: CheckBoxState) => void;
}

function CheckBoxItem({ checked, onChange, label }: CheckBoxProps) {
  return (
    <div className="h-10 inline-flex justify-start items-center gap-2.5">
      <div className="flex justify-start items-center gap-[5px]">
        <div className="w-4 h-4 relative cursor-pointer" onClick={onChange}>
          {checked ? (
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
          {label}
        </div>
      </div>
    </div>
  );
}

export default function CheckBoxSelector({
  state,
  setState,
}: CheckBoxSelectorProps) {
  const handleCheckboxChange = (key: keyof CheckBoxState) => {
    const newState = { ...state, [key]: !state[key] };
    setState(newState);
  };

  return (
    <div className="inline-flex justify-start items-start gap-0.5">
      <div className="w-24 h-10 px-1 py-1.5 flex justify-start items-center gap-2.5">
        <div className="justify-start text-stone-900 text-base font-medium font-['Pretendard']">
          기타
        </div>
      </div>
      <div className="inline-flex flex-col justify-center items-start">
        <CheckBoxItem
          checked={state.disableZoom}
          onChange={() => handleCheckboxChange('disableZoom')}
          label="청첩장 확대 금지"
        />
        <CheckBoxItem
          checked={state.scrollEffect}
          onChange={() => handleCheckboxChange('scrollEffect')}
          label="스크롤시 등장 효과"
        />
      </div>
    </div>
  );
}
