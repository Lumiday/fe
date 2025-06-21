import React from 'react';
import { ColorType } from '@/type/components';

interface ColorSwatchSelectorProps {
  selectedColor: ColorType;
  setSelectedColor: (color: ColorType) => void;
}

export default function ColorSwatchSelector({
  selectedColor,
  setSelectedColor,
}: ColorSwatchSelectorProps) {
  const colors: ColorType[] = ['white', 'beige', 'light pink', 'pink', 'sky'];

  const colorMap: { [key in ColorType]: string } = {
    white: 'bg-white',
    beige: 'bg-stone-200',
    'light pink': 'bg-stone-200',
    pink: 'bg-rose-200',
    sky: 'bg-sky-100',
  };

  const handleSwatchClick = (color: ColorType) => {
    setSelectedColor(color);
  };

  return (
    <div className="self-stretch inline-flex justify-start items-center gap-[0.125rem]">
      <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center gap-[0.625rem]">
        <div className="justify-start text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
          배경 색상
        </div>
      </div>
      <div className="flex justify-start items-center gap-[0.625rem]">
        {colors.map((color) => (
          <div
            key={color}
            className={`flex items-center justify-center w-[2.5rem] h-[2.5rem] border-solid rounded-[0.3125rem] cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 ${
              selectedColor === color
                ? 'border-[0.0625rem] border-LumiDayGray-1e1'
                : 'border-[0.0375rem] border-LumiDayGray-999 hover:border-LumiDayGray-1e1'
            }`}
            onClick={() => handleSwatchClick(color)}
          >
            <div
              className={`w-[2.125rem] h-[2.125rem] ${colorMap[color]} rounded-[0.3125rem] border-[0.03125rem] border-LumiDayGray-999 transition-all duration-200 ease-in-out`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
