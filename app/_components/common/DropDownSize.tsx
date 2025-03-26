import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type SizeType = 'normal' | 'smaller' | 'larger';

interface SizeOption {
  value: SizeType;
  label: string;
}

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
        className="top-[-4px] left-[-10px] rounded-none rounded-b-[5px] border border-LumiDayGray-500"
      >
        {options
          .filter((option) => option.value !== selectedValue)
          .map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="rounded-none hover:bg-LumiDayGray-100"
            >
              {option.label}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
}
