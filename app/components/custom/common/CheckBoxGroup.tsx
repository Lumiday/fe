import { CheckBoxWithLabel } from './CheckBoxWithLabel';

interface CheckBoxItem {
  id: string;
  label: string;
  value: string;
  checked?: boolean;
}

interface CheckBoxGroupProps {
  title: string;
  items: CheckBoxItem[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, itemId: string) => void;
}

const CheckBoxGroup = ({ title, items, onChange }: CheckBoxGroupProps) => {
  return (
    <div className="flex items-center h-[2.5rem]">
      <p className="w-[6.25rem] py-[0.4375rem] px-[0.25rem] text-1-500 text-LumiDayGray-1e1 mr-[0.25rem]">
        {title}
      </p>
      <div className="flex items-center justify-start gap-[0.625rem]">
        {items.map((item) => (
          <div key={item.id} className="flex items-center h-[2.5rem]">
            <CheckBoxWithLabel
              checked={item.checked || false}
              onChange={() =>
                onChange(
                  {
                    target: { checked: !item.checked },
                  } as React.ChangeEvent<HTMLInputElement>,
                  item.id
                )
              }
              label={item.label}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxGroup;
