import React from 'react';
import { PatternType, PatternOption } from '@/type/components';

interface PatternSelectorProps {
  selectedPattern: PatternType;
  setSelectedPattern: (pattern: PatternType) => void;
  patterns?: PatternOption[];
}

export default function PatternSelector({
  selectedPattern,
  setSelectedPattern,
  patterns = [
    { value: '없음', label: '없음' },
    { value: '종이', label: '종이' },
    { value: '체크', label: '체크' },
    { value: '작은 꽃', label: '작은 꽃' },
  ],
}: PatternSelectorProps) {
  const handlePatternClick = (pattern: PatternType) => {
    setSelectedPattern(pattern);
  };

  return (
    <div className="flex justify-start items-center gap-[0.125rem]">
      <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.375rem] flex justify-start items-center gap-[0.625rem]">
        <div className="justify-start text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
          배경 패턴
        </div>
      </div>
      <div className="flex justify-start items-center gap-[0.625rem]">
        {patterns.map((pattern) => (
          <div
            key={pattern.value}
            className={`h-[2.5rem] px-[0.625rem] py-[0.375rem] rounded-[0.3125rem] flex justify-center items-center gap-[0.625rem] cursor-pointer transition-all duration-200 ease-in-out border-solid border-[0.0625rem] ${
              selectedPattern === pattern.value
                ? 'border-LumiDayGray-1e1 text-LumiDayGray-1e1 bg-white'
                : 'border-LumiDayGray-f0f text-LumiDayGray-999 bg-LumiDayGray-f0f hover:text-LumiDayGray-1e1 hover:border-LumiDayGray-1e1 '
            } ${pattern.className || ''}`}
            onClick={() => handlePatternClick(pattern.value)}
          >
            <div className="justify-start text-875-400 font-['Pretendard'] transition-colors duration-200 ease-in-out">
              {pattern.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
