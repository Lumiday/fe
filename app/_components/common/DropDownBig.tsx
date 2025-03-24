import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Switch from './DropDownBIgSwitch';

interface DropDownBigProps {
  name: string;
  children: React.ReactNode;
  checked: boolean;
  setChecked: (checked: boolean) => void;
  isSwitchVisible: boolean;
}

export default function DropDownBig({
  name,
  children,
  checked,
  setChecked,
  isSwitchVisible,
}: DropDownBigProps) {
  return (
    <Accordion
      collapsible
      type="single"
      className="flex rounded-[10px] border border-LumiDayGray-500 bg-white w-[600px] overflow-hidden"
    >
      <AccordionItem value="item-1" className="w-full">
        <AccordionTrigger className="flex w-full p-5 items-center justify-between">
          <div className="flex items-center justify-center gap-[10px]">
            {isSwitchVisible && (
              <Switch checked={checked} setChecked={setChecked} />
            )}
            <p className="text-LumiDayGray-900 text-[20px] font-medium leading-normal">
              {name}
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-5 border-t-2 border-t-LumiDayGray-100">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
