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
    <div className="inline-flex justify-start items-start gap-0.5">
      <div className="w-[100px] h-10 px-1 py-1.5 flex justify-start items-center gap-2.5">
        <div className="justify-start text-gray-900 text-base font-medium font-['Pretendard']">
          고인 표시
        </div>
      </div>
      <div className="flex justify-start items-center gap-2.5">
        {displays.map((display) => (
          <div
            key={display.value}
            className={`h-10 px-2.5 py-1.5 bg-zinc-100 rounded-[5px] hover:text-stone-900 text-neutral-400 outline-1 outline-offset-[-1px] hover:outline-stone-900 flex justify-center items-center gap-2.5 cursor-pointer ${
              selectedDisplay === display.value
                ? 'outline outline-1 outline-offset-[-1px] outline-gray-900'
                : 'outline-none'
            }`}
            onClick={() => handleDisplayClick(display.value)}
          >
            <div
              className={`justify-start text-sm font-normal font-['Pretendard'] ${
                selectedDisplay === display.value ? 'text-gray-900' : ''
              }`}
            >
              {display.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
