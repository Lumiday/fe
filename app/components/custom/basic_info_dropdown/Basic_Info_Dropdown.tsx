'use client';

import { useState } from 'react';
import PersonInfoInput from './PersonInfoInput';
import { PersonInfo } from '@/type/components';
import DropDownBig from '../common/DropDownBig';
import ViewModeSelector from '@/app/components/custom/common/ViewModeSelector';

const patterns = [
  { value: '표시 안 함', label: '표시 안 함' },
  { value: '색상변경', label: '색상변경' },
  { value: '故 표시', label: '故 표시' },
  { value: '국화 표시', label: '국화 표시' },
];

export default function BasicInfoDropdown() {
  const [groom, setGroom] = useState<PersonInfo>({
    lastName: '',
    firstName: '',
    phone: '',
  });
  const [groomFather, setGroomFather] = useState<PersonInfo>({
    lastName: '',
    firstName: '',
    phone: '',
    isDeceased: false,
  });
  const [groomMother, setGroomMother] = useState<PersonInfo>({
    lastName: '',
    firstName: '',
    phone: '',
    isDeceased: false,
  });
  const [bride, setBride] = useState<PersonInfo>({
    lastName: '',
    firstName: '',
    phone: '',
  });
  const [brideFather, setBrideFather] = useState<PersonInfo>({
    lastName: '',
    firstName: '',
    phone: '',
    isDeceased: false,
  });
  const [brideMother, setBrideMother] = useState<PersonInfo>({
    lastName: '',
    firstName: '',
    phone: '',
    isDeceased: false,
  });
  const [selectedDisplay, setSelectedDisplay] = useState<string>('표시 안 함');

  const handleDisplayChange = (newDisplay: string) => {
    setSelectedDisplay(newDisplay);
  };

  return (
    <div>
      <DropDownBig name="기본 정보" isSwitchVisible={false} isPadding={false}>
        <div className="flex flex-col justify-start items-start gap-[1.25rem] p-[1.25rem]">
          <PersonInfoInput
            label="신랑"
            person={groom}
            setPerson={setGroom}
            showDeceasedCheckbox={false}
          />
          <PersonInfoInput
            label="신랑 아버지"
            person={groomFather}
            setPerson={setGroomFather}
          />
          <PersonInfoInput
            label="신랑 어머니"
            person={groomMother}
            setPerson={setGroomMother}
          />
        </div>
        <div className="w-[37.4375rem] h-[0.0625rem] bg-LumiDayGray-f0f" />
        <div className="flex flex-col justify-start items-start gap-[1.25rem] p-[1.25rem]">
          <PersonInfoInput
            label="신부"
            person={bride}
            setPerson={setBride}
            showDeceasedCheckbox={false}
          />
          <PersonInfoInput
            label="신부 아버지"
            person={brideFather}
            setPerson={setBrideFather}
          />
          <PersonInfoInput
            label="신부 어머니"
            person={brideMother}
            setPerson={setBrideMother}
          />
        </div>
        <div className="w-[37.4375rem] h-[0.0625rem] bg-LumiDayGray-f0f" />
        <div className="p-[1.25rem]">
          <ViewModeSelector
            name="고인 표시"
            patterns={patterns}
            selectedPattern={selectedDisplay}
            setSelectedPattern={handleDisplayChange}
          />
        </div>
      </DropDownBig>
    </div>
  );
}
