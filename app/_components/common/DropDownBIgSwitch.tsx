import { DropDownBIgSwitchProps } from '@/type/components';
import React from 'react';

const Switch = ({ checked, setChecked }: DropDownBIgSwitchProps) => {
  const handleClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.stopPropagation();
  };

  return (
    <label
      onClick={handleClick}
      className="relative inline-block w-[3.1875rem] h-[1.9375rem] cursor-pointer select-none"
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="sr-only"
      />
      <div
        className={`absolute inset-0 rounded-full transition-colors duration-300 ${
          checked ? 'bg-LumiDayGreen' : 'bg-gray-300'
        }`}
      />
      <div
        className={`absolute top-[0.125rem] left-[0.125rem] w-[1.6875rem] h-[1.6875rem] bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          checked ? 'translate-x-[1.25rem]' : ''
        }`}
      />
      <span
        className={`absolute top-[-1.5rem] right-0 transition-colors duration-300 ${
          checked ? 'text-LumiDayGreen' : 'text-gray-400'
        }`}
      ></span>
    </label>
  );
};

export default Switch;
