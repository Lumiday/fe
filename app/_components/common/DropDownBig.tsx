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
  isPadding,
}: DropDownBigProps) {
  return (
    <Accordion
      collapsible
      type="single"
      className="flex rounded-[0.625rem] border-solid border-[0.0625rem] border-LumiDayGray-999 bg-white w-[37.5rem] overflow-hidden"
    >
      <AccordionItem value="item-1" className="w-full border-0">
        <AccordionTrigger className="flex items-center justify-between w-full p-[1.25rem]">
          <div className="flex items-center justify-center gap-[0.625rem]">
            {isSwitchVisible && checked !== undefined && setChecked && (
              <Switch checked={checked} setChecked={setChecked} />
            )}
            <p className="text-LumiDayGray-1e1 text-125-500">{name}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent
          className={`flex flex-col ${isPadding && 'p-[1.25rem] gap-[1.25rem]'} border-t-[0.125rem] border-LumiDayGray-f0f`}
        >
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
