import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Switch from './DropDownBIgSwitch';
import { DropDownBigProps } from '@/type/components';

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
      <AccordionItem value="item-1" className="w-full border-0">
        <AccordionTrigger className="flex items-center justify-between w-full p-5 ">
          <div className="flex items-center justify-center gap-[10px]">
            {isSwitchVisible && checked !== undefined && setChecked && (
              <Switch checked={checked} setChecked={setChecked} />
            )}
            <p className="text-LumiDayGray-900 text-[20px] font-medium leading-normal">
              {name}
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent className=" flex flex-col p-5 border-t-2 border-LumiDayGray-100 gap-5">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
