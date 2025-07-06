'use client';

import React from 'react';
import { ViewModeSelectorType } from '@/type/components';

interface ViewModeSelectorProps {
  name: string;
  selectedPattern: string;
  setSelectedPattern?: (pattern: string) => void;
  patterns: ViewModeSelectorType[];
  onChange?: (pattern: string) => void;
}

export default function ViewModeSelector({
  name,
  selectedPattern,
  setSelectedPattern,
  onChange,
  patterns,
}: ViewModeSelectorProps) {
  const handleClick = (pattern: string) => {
    if (setSelectedPattern) setSelectedPattern(pattern);
    if (onChange) onChange(pattern);
  };

  return (
    <div className="flex items-center gap-[0.12rem]">
      <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem]">
        <div className="text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
          {name}
        </div>
      </div>
      <div className="flex gap-[0.62rem]">
        {patterns?.map((pattern) => (
          <div
            key={pattern.value}
            className={`h-[2.5rem] px-[0.625rem] py-[0.375rem] rounded-[0.3125rem] hover:cursor-pointer flex items-center 
                ${selectedPattern === pattern.value ? 'bg-white text-LumiDayGray-1e1 border border-LumiDayGray-1e1' : 'bg-LumiDayGray-f0f text-LumiDayGray-999 border border-LumiDayGray-f0f'} 
                hover:text-LumiDayGray-1e1 hover:border hover:border-[#1e1e1e] ${pattern.className || ''} 
                transition-all duration-300 ease-in-out`}
            onClick={() => handleClick(pattern.value)}
          >
            <div>{pattern.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
