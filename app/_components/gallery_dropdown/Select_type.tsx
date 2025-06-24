'use client';

import React from 'react';
import { SelectTypeOption } from '@/type/components';

interface PatternSelectorProps {
  name: string;
  selectedPattern: string;
  setSelectedPattern: (pattern: string) => void;
  patterns: SelectTypeOption[];
}

export default function Select_type({
  name,
  selectedPattern,
  setSelectedPattern,
  patterns,
}: PatternSelectorProps) {
  return (
    <div className="flex items-center gap-[0.12rem] bg-[pink]">
      <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem]  bg-[skyblue]">
        <div className="text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
          {name}
        </div>
      </div>
      <div className="flex gap-[0.62rem]">
        {patterns?.map((pattern) => {
          console.log(pattern);
          return (
            <div
              key={pattern.value}
              className={`h-[2.5rem] px-[0.625rem] py-[0.375rem] rounded-[0.3125rem] 
                ${selectedPattern === pattern.value ? 'bg-white text-LumiDayGray-1e1 border border-LumiDayGray-1e1' : 'bg-LumiDayGray-f0f text-LumiDayGray-999'} 
                hover:text-LumiDayGray-1e1 hover:border hover:border-[#1e1e1e] ${pattern.className || ''}`}
              onClick={() => setSelectedPattern(pattern.value)}
            >
              <div>{pattern.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
