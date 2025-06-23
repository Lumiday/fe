import {
  DeceasedDisplayType,
  DeceasedDisplaySelectorProps,
} from '@/type/components';

export default function DeceasedDisplaySelector({
  selectedDisplay,
  setSelectedDisplay,
  displays = [
    { value: 'none', label: '표시 안 함' },
    { value: 'color', label: '색상변경' },
    { value: 'deceased', label: '故 표시' },
    { value: 'chrysanthemum', label: '국화 표시' },
  ],
}: DeceasedDisplaySelectorProps) {
  const handleDisplayClick = (display: DeceasedDisplayType) => {
    setSelectedDisplay(display);
  };

  return (
    <div className="flex justify-start items-center gap-[0.125rem]">
      <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.375rem] flex justify-start items-center gap-[0.625rem]">
        <div className="justify-start text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
          고인 표시
        </div>
      </div>
      <div className="flex justify-start items-center gap-[0.625rem]">
        {displays.map((display) => (
          <div
            key={display.value}
            className={`h-[2.5rem] px-[0.625rem] py-[0.375rem] rounded-[0.3125rem] flex justify-center items-center gap-[0.625rem] cursor-pointer transition-all duration-200 ease-in-out border-solid border-[0.0625rem] ${
              selectedDisplay === display.value
                ? 'border-LumiDayGray-1e1 text-LumiDayGray-1e1 bg-white'
                : 'border-LumiDayGray-f0f text-LumiDayGray-999 bg-LumiDayGray-f0f hover:text-LumiDayGray-1e1 hover:border-LumiDayGray-1e1'
            }`}
            onClick={() => handleDisplayClick(display.value)}
          >
            <div className="justify-start text-875-400 font-['Pretendard'] transition-colors duration-200 ease-in-out">
              {display.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
