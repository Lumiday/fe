import React from 'react';
import { ColorType } from './Theme_Dropdown';

interface ColorSwatchSelectorProps {
  selectedColor: ColorType;
  setSelectedColor: React.Dispatch<React.SetStateAction<ColorType>>;
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
    <div className="self-stretch inline-flex justify-start items-center gap-0.5">
      <div className="w-24 h-10 px-1 py-1.5 flex justify-start items-center gap-2.5">
        <div className="justify-start text-gray-900 text-base font-medium font-['Pretendard']">
          배경 색상
        </div>
      </div>
      <div className="flex justify-start items-center gap-2.5">
        {colors.map((color) => (
          <div
            key={color}
            className={`w-10 h-10 p-[3px] rounded-[5px] outline outline-1 outline-offset-[-1px] ${
              selectedColor === color
                ? 'outline-zinc-800'
                : 'outline-neutral-400'
            } flex justify-center items-center gap-2.5 cursor-pointer`}
            onClick={() => handleSwatchClick(color)}
          >
            <div
              className={`w-8 h-8 ${colorMap[color]} rounded-[5px] border-[0.50px] border-neutral-400`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
