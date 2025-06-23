'use client';

import { useState } from 'react';
import PersonInfoInput from './PersonInfoInput';
import { PersonInfo, DeceasedDisplayType } from '@/type/components';
import DeceasedDisplaySelector from './DeceasedDisplaySelector';
import DropDownBig from '../common/DropDownBig';

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
  const [selectedDisplay, setSelectedDisplay] =
    useState<DeceasedDisplayType>('none');

  const handleDisplayChange = (newDisplay: DeceasedDisplayType) => {
    setSelectedDisplay(newDisplay);
  };

  return (
    <div>
      <DropDownBig name="기본 정보" isSwitchVisible={false}>
        <div className="flex flex-col justify-start items-start gap-[1.25rem]">
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
        <div className="flex flex-col justify-start items-start gap-[1.25rem]">
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
        <DeceasedDisplaySelector
          selectedDisplay={selectedDisplay}
          setSelectedDisplay={handleDisplayChange}
        />
        <div className="w-[37.4375rem] h-[0.0625rem] bg-LumiDayGray-f0f" />
      </DropDownBig>
    </div>
  );
}
