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
    <div className="flex justify-start items-center gap-0.5">
      <div className="w-24 h-10 px-1 py-1.5 flex justify-start items-center gap-2.5">
        <div className="justify-start text-gray-900 text-base font-medium font-['Pretendard']">
          배경 패턴
        </div>
      </div>
      <div className="flex justify-start items-center gap-2.5">
        {patterns.map((pattern) => (
          <div
            key={pattern.value}
            className={`h-10 px-2.5 py-1.5 bg-zinc-100 rounded-[5px] hover:text-stone-900 text-neutral-400 outline-1 outline-offset-[-1px] hover:outline-stone-900 flex justify-center items-center gap-2.5 cursor-pointer ${
              selectedPattern === pattern.value
                ? 'outline outline-1 outline-offset-[-1px] outline-gray-900'
                : 'outline-none'
            } ${pattern.className || ''}`}
            onClick={() => handlePatternClick(pattern.value)}
          >
            <div
              className={`justify-start text-sm font-normal font-['Pretendard'] ${
                selectedPattern === pattern.value ? 'text-gray-900' : ''
              }`}
            >
              {pattern.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
