import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SizeType, SizeOption } from '@/type/components';

interface DropDownSizeProps {
  selectedValue: SizeType;
  setSelectedValue: (size: SizeType) => void;
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
    setSelectedValue(value as SizeType);
  };

  return (
    <div className="self-stretch inline-flex justify-start items-center gap-[0.125rem]">
      <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center gap-[0.625rem]">
        <div className="justify-start text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
          글꼴 크기
        </div>
      </div>
      <Select
        value={selectedValue}
        onValueChange={handleValueChange}
        onOpenChange={(open) => setIsOpen(open)}
      >
        <SelectTrigger
          className={`w-[10.75rem] h-[2.5rem] p-[0.625rem] flex items-center ${
            isOpen
              ? 'rounded-b-none border-b-0 border-green'
              : 'rounded-[0.3125rem]'
          } border-LumiDayGray-999 bg-white transition focus:outline-none focus:ring-0`}
        >
          <SelectValue placeholder="크기를 선택하세요">
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
                className="rounded-none h-[2.5rem] focus:bg-LumiDayGray-999-30 text-875-400"
              >
                {option.label}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
}
