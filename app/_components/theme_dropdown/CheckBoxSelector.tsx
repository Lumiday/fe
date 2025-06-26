import React from 'react';
import { CheckBoxState } from '@/type/components';
import { CheckBoxWithLabel } from '../common/CheckBoxWithLabel';

interface CheckBoxSelectorProps {
  state: CheckBoxState;
  setState: (state: CheckBoxState) => void;
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
    <div className="inline-flex justify-start items-start gap-[0.03125rem]">
      <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center">
        <div className="justify-start text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
          기타
        </div>
      </div>
      <div className="inline-flex flex-col justify-center items-start">
        <CheckBoxWithLabel
          checked={state.disableZoom}
          onChange={() => handleCheckboxChange('disableZoom')}
          label="청첩장 확대 금지"
        />
        <CheckBoxWithLabel
          checked={state.scrollEffect}
          onChange={() => handleCheckboxChange('scrollEffect')}
          label="스크롤시 등장 효과"
        />
      </div>
    </div>
  );
}
