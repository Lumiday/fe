import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { FontType, FontOption } from '@/type/components';

interface DropDownFontProps {
  selectedValue: FontType;
  setSelectedValue: (font: FontType) => void;
}

export default function DropDownFont({
  selectedValue,
  setSelectedValue,
}: DropDownFontProps) {
  const [isOpen, setIsOpen] = useState(false);

  const options: FontOption[] = [
    { value: 'pretendard', label: 'pretendard', fontClass: 'font-pretendard' },
    { value: 'ryudung', label: '온글잎', fontClass: 'font-ryudung text-1-400' },
    {
      value: 'gangwon',
      label: '강원교육모두체',
      fontClass: 'font-gangwon text-1-400',
    },
    { value: 'nanum', label: '나눔명조', fontClass: 'font-nanum text-1-400' },
    {
      value: 'tmoney',
      label: '티머니둥근바람',
      fontClass: 'font-tmoney text-875-400',
    },
  ];

  const selectedFontClass =
    options.find((option) => option.value === selectedValue)?.fontClass || '';

  const handleValueChange = (value: string) => {
    setSelectedValue(value as FontType);
  };

  return (
    <div className="self-stretch inline-flex justify-start items-center gap-[0.125rem]">
      <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center gap-[0.625rem]">
        <div className="justify-start text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
          글꼴
        </div>
      </div>
      <Select
        value={selectedValue}
        onValueChange={handleValueChange}
        onOpenChange={(open) => setIsOpen(open)}
      >
        <SelectTrigger
          className={`w-[10.75rem] h-[2.5rem] p-[0.625rem] ${
            isOpen
              ? 'rounded-b-none border-b-0 border-green'
              : 'rounded-[0.3125rem]'
          } border-LumiDayGray-999 bg-white transition focus:outline-none focus:ring-0 ${selectedFontClass} items-center`}
        >
          <SelectValue
            className="flex items-center"
            placeholder="폰트를 선택하세요"
          >
            {options.find((option) => option.value === selectedValue)?.label}
          </SelectValue>
        </SelectTrigger>
        <SelectContent
          side="bottom"
          sideOffset={0}
          className="top-[-0.25rem] rounded-none rounded-b-[0.3125rem] border border-LumiDayGray-999"
        >
          {options
            .filter((option) => option.value !== selectedValue)
            .map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className={`rounded-none h-[2.5rem] focus:bg-LumiDayGray-999-30 ${option.fontClass}`}
              >
                {option.label}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
}
