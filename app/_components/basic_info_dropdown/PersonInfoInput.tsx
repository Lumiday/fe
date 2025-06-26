import { PersonInfo } from '@/type/components';
import CheckBoxGrayOut from './CheckBoxGrayOut';
import CommonInputSize from '../common/CommonInputSize';

interface PersonInfoInputProps {
  label: string;
  person: PersonInfo;
  setPerson: React.Dispatch<React.SetStateAction<PersonInfo>>;
  showDeceasedCheckbox?: boolean;
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
      <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.375rem] flex justify-start items-center gap-[0.625rem]">
        <div className="justify-start text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
          {label}
        </div>
      </div>
      <div className="inline-flex flex-col justify-center items-start gap-[0.625rem]">
        <div className="inline-flex justify-start items-center gap-[0.625rem]">
          <div className="flex justify-start items-center gap-[0.625rem]">
            <CommonInputSize
              type="text"
              inputWidth={3.625}
              id={`${label}-lastName`}
              value={person.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              placeholder="성"
            />
            <CommonInputSize
              type="text"
              inputWidth={6.5}
              id={`${label}-firstName`}
              value={person.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              placeholder="이름"
            />
          </div>
          {showDeceasedCheckbox && (
            <CheckBoxGrayOut
              checked={person.isDeceased ?? false}
              onChange={handleCheckboxChange}
              label="故"
            />
          )}
        </div>
        <CommonInputSize
          type="tel"
          inputWidth={10.75}
          id={`${label}-phone`}
          value={person.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          placeholder="010-0000-0000"
        />
      </div>
    </div>
  );
}
