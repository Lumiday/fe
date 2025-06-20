import Image from 'next/image';
import {
  CheckBoxProps,
  PersonInfo,
  PersonInfoInputProps,
} from '@/type/components';
import CheckboxChecked from '@/public/imgs/CheckboxChecked.svg.svg';
import CommonInput from '../common/CommonInput';

function CheckBoxItem({ checked, onChange, label }: CheckBoxProps) {
  return (
    <div className="h-10 inline-flex justify-start items-center gap-2.5">
      <div className="flex justify-start items-center gap-[5px]">
        <div className="w-4 h-4 relative cursor-pointer" onClick={onChange}>
          {checked ? (
            <Image
              src={CheckboxChecked}
              alt="Checked"
              width={16}
              height={16}
              className="object-contain"
            />
          ) : (
            <div className="w-4 h-4 left-0 top-0 absolute rounded-[3px] border border-neutral-400 bg-white" />
          )}
        </div>
        <div
          className={`justify-start text-sm font-normal font-['Pretendard'] ${
            checked ? 'text-stone-900' : 'text-neutral-400'
          }`}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

export default function PersonInfoInput({
  label,
  person,
  setPerson,
  showDeceasedCheckbox = true,
}: PersonInfoInputProps) {
  const handleInputChange = (field: keyof PersonInfo, value: string) => {
    setPerson((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = () => {
    setPerson((prev) => ({ ...prev, isDeceased: !prev.isDeceased }));
  };

  return (
    <div className="inline-flex justify-start items-start gap-0.5">
      <div className="w-[100px] h-10 px-1 py-1.5 flex justify-start items-center gap-2.5">
        <div className="justify-start text-stone-900 text-base font-medium font-['Pretendard']">
          {label}
        </div>
      </div>
      <div className="inline-flex flex-col justify-center items-start gap-2.5">
        <div className="inline-flex justify-start items-center gap-2.5">
          <div className="flex justify-start items-center gap-2.5">
            <CommonInput
              type="text"
              inputWidth={58}
              id={`${label}-lastName`}
              value={person.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              placeholder="성"
            />
            <CommonInput
              type="text"
              inputWidth={104}
              id={`${label}-firstName`}
              value={person.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              placeholder="이름"
            />
          </div>
          {showDeceasedCheckbox && (
            <CheckBoxItem
              checked={person.isDeceased ?? false}
              onChange={handleCheckboxChange}
              label="故"
            />
          )}
        </div>
        <CommonInput
          type="tel"
          inputWidth={172}
          id={`${label}-phone`}
          value={person.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          placeholder="010-0000-0000"
        />
      </div>
    </div>
  );
}
