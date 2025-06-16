import React from 'react';

interface PatternSelectorProps {
  selectedPattern: string;
  setSelectedPattern: React.Dispatch<React.SetStateAction<string>>;
  patterns?: string[];
}

export default function PatternSelector({
  selectedPattern,
  setSelectedPattern,
  patterns = ['없음', '종이', '체크', '작은 꽃'],
}: PatternSelectorProps) {
  const handlePatternClick = (pattern: string) => {
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
        {patterns.map((pattern, index) => (
          <div
            key={index}
            className={`h-10 px-2.5 py-1.5 bg-zinc-100 rounded-[5px] hover:text-stone-900 text-neutral-400 outline-1 outline-offset-[-1px] hover:outline-stone-900 flex justify-center items-center gap-2.5 cursor-pointer ${
              selectedPattern === pattern
                ? 'outline outline-1 outline-offset-[-1px] outline-gray-900'
                : 'outline-none'
            }`}
            onClick={() => handlePatternClick(pattern)}
          >
            <div
              className={`justify-start text-sm font-normal font-['Pretendard'] ${
                selectedPattern === pattern ? 'text-gray-900' : ''
              }`}
            >
              {pattern}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
