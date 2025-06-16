import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SizeType, SizeOption } from './Theme_Dropdown';

interface DropDownSizeProps {
  selectedValue: SizeType;
  setSelectedValue: React.Dispatch<React.SetStateAction<SizeType>>;
}

export default function DropDownSize({
  selectedValue,
  setSelectedValue,
}: DropDownSizeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const options: SizeOption[] = [
    { value: 'normal', label: '보통' },
    { value: 'smaller', label: '더 작게' },
    { value: 'larger', label: '더 크게' },
  ];

  const handleValueChange = (value: string) => {
    const sizeValue = value as SizeType;
    setSelectedValue(sizeValue);
  };

  return (
    <div className="self-stretch inline-flex justify-start items-center gap-0.5">
      <div className="w-24 h-10 px-1 py-1.5 flex justify-start items-center gap-2.5">
        <div className="justify-start text-gray-900 text-base font-medium font-['Pretendard']">
          글꼴 크기
        </div>
      </div>
      <Select
        value={selectedValue}
        onValueChange={handleValueChange}
        onOpenChange={(open) => setIsOpen(open)}
      >
        <SelectTrigger
          className={`w-[172px] h-10 p-[10px] flex items-center ${
            isOpen ? 'rounded-b-none border-b-0 border-green' : 'rounded-[5px]'
          } border-LumiDayGray-500 bg-white transition focus:outline-none focus:ring-0`}
        >
          <SelectValue placeholder="크기를 선택하세요">
            {options.find((option) => option.value === selectedValue)?.label}
          </SelectValue>
        </SelectTrigger>
        <SelectContent
          side="bottom"
          sideOffset={0}
          className="top-[-4px] rounded-none rounded-b-[5px] border border-LumiDayGray-500"
        >
          {options
            .filter((option) => option.value !== selectedValue)
            .map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="rounded-none h-10 hover:bg-LumiDayGray-100"
              >
                {option.label}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
}
