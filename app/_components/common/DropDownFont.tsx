import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type FontType = 'pretendard' | 'ryudung' | 'gangwon' | 'nanum' | 'tmoney';

interface FontOption {
  value: FontType;
  label: string;
  fontClass: string;
}

interface DropDownFontProps {
  selectedValue: FontType;
  setSelectedValue: React.Dispatch<React.SetStateAction<FontType>>;
}

export default function DropDownFont({
  selectedValue,
  setSelectedValue,
}: DropDownFontProps) {
  const [isOpen, setIsOpen] = useState(false);

  const options: FontOption[] = [
    { value: 'pretendard', label: 'pretendard', fontClass: 'font-pretendard' },
    { value: 'ryudung', label: '온글잎', fontClass: 'font-ryudung text-base' },
    {
      value: 'gangwon',
      label: '강원교육모두체',
      fontClass: 'font-gangwon text-base',
    },
    { value: 'nanum', label: '나눔명조', fontClass: 'font-nanum text-base' },
    { value: 'tmoney', label: '티머니 둥근바람', fontClass: 'font-tmoney' },
  ];

  const selectedFontClass =
    options.find((option) => option.value === selectedValue)?.fontClass || '';

  const handleValueChange = (value: string) => {
    const fontValue = value as FontType;
    setSelectedValue(fontValue);
  };

  return (
    <Select
      value={selectedValue}
      onValueChange={handleValueChange}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <SelectTrigger
        className={`w-[172px] h-10 p-[10px] ${
          isOpen ? 'rounded-b-none border-b-0 border-green' : 'rounded-[5px]'
        } border-LumiDayGray-500 bg-white transition focus:outline-none focus:ring-0 ${selectedFontClass} items-center`}
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
        className="top-[-4px] left-[-10px] rounded-none rounded-b-[5px] border border-LumiDayGray-500"
      >
        {options
          .filter((option) => option.value !== selectedValue)
          .map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className={`rounded-none hover:bg-LumiDayGray-100 ${option.fontClass}`}
            >
              {option.label}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
}
