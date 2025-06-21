import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DropDownTimeProps {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

//오전 9시부터 오후 10시까지
const generateTimeOptions = () => {
  const options = [];
  for (let hour = 9; hour <= 21; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      if (hour === 21 && minute === 30) break; // 21:30 제외
      const value = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      const period = hour < 12 ? '오전' : '오후';
      const displayHour = hour % 12 === 0 ? 12 : hour % 12;
      const label = `${period} ${displayHour}:${minute.toString().padStart(2, '0')}`;
      options.push({ value, label });
    }
  }
  return options;
};

const DropDownTime = ({
  selectedValue,
  setSelectedValue,
}: DropDownTimeProps) => {
  const options = generateTimeOptions();

  return (
    <div className="self-stretch inline-flex justify-start items-center gap-0.5">
      <div className="w-[6.25rem] py-[0.4375rem] px-[0.25rem] text-1-500 text-LumiDayGray-1e1 mr-[0.25rem]">
        예식시간
      </div>
      <Select value={selectedValue} onValueChange={setSelectedValue}>
        <SelectTrigger
          className={`w-[5.6875rem] h-[2.5rem] p-[0.625rem] flex items-center 
           border-LumiDayGray-500 bg-white transition focus:outline-none focus:ring-0`}
        >
          <SelectValue placeholder="선택" className="text-red ">
            {options.find((option) => option.value === selectedValue)?.label}
          </SelectValue>
        </SelectTrigger>
        <SelectContent
          side="bottom"
          sideOffset={0}
          className="w-[5.6875rem] text-875-400 top-[-4px] flex rounded-none rounded-b-[5px] border border-LumiDayGray-500"
        >
          {options
            .filter((option) => option.value !== selectedValue)
            .map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="rounded-none p-0  p-[0.625rem] text-875-400  hover:bg-LumiDayGray-100 "
              >
                {option.label}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DropDownTime;
