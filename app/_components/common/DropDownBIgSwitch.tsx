import React from 'react';

type SwitchProps = {
  checked: boolean;
  setChecked: (checked: boolean) => void;
};

const Switch = ({ checked, setChecked }: SwitchProps) => {
  const handleClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.stopPropagation();
  };

  return (
    <label
      onClick={handleClick}
      className="relative inline-block w-[51px] h-[31px] cursor-pointer select-none"
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
        className={`absolute top-[2px] left-[2px] w-[27px] h-[27px] bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          checked ? 'translate-x-[20px]' : ''
        }`}
      />
      <span
        className={`absolute -top-6 right-0 text-sm font-bold transition-colors duration-300 ${
          checked ? 'text-LumiDayGreen' : 'text-gray-400'
        }`}
      ></span>
    </label>
  );
};

export default Switch;
