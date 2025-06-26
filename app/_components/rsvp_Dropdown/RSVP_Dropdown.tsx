import React, { useState, useRef, useEffect } from 'react';
import {
  CheckBoxState,
  PersonInfo,
  RSVPContentsProps,
} from '@/type/components';
import DropDownBig from '../common/DropDownBig';
import Image from 'next/image';
import { CheckBoxWithLabel } from '../common/CheckBoxWithLabel';
import CommonInputSize from '../common/CommonInputSize';
import CommonTextAreaSize from '../common/CommonTextAreaSize';

export default function RSVPDropdown() {
  const [isRSVPEnabled, setIsRSVPEnabled] = useState(true);
  const [checkBoxState, setCheckBoxState] = useState<CheckBoxState>({
    attendees: false,
    companionName: false,
    contact: false,
    meal: false,
    additionalNotes: false,
  });

  const [RSVPContents, setRSVPContents] = useState<RSVPContentsProps>({
    title: '',
    contents: '',
    buttonName: '',
  });

  const handleCheckboxChange = (key: keyof CheckBoxState) => {
    setCheckBoxState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleInputChange = (field: keyof RSVPContentsProps, value: string) => {
    setRSVPContents((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <DropDownBig
      name="참석의사"
      checked={isRSVPEnabled}
      setChecked={setIsRSVPEnabled}
      isSwitchVisible={true}
    >
      <div className="inline-flex justify-start items-start gap-[0.125rem]">
        <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center">
          <div className="justify-start text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
            제목
          </div>
        </div>
        <CommonInputSize
          type="text"
          inputWidth={27.8125}
          id="RSVP-Title"
          value={RSVPContents.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
          placeholder="참석 의사 전달"
        />
      </div>
      <div className="inline-flex justify-start items-start gap-[0.125rem]">
        <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center">
          <div className="justify-start text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
            내용
          </div>
        </div>
        <CommonTextAreaSize
          inputWidth={27.8125}
          inputHeight={5}
          id="RSVP-Contents"
          value={RSVPContents.contents}
          onChange={(e) => handleInputChange('contents', e.target.value)}
          placeholder={`신랑,신부에게 참석의사를 \n미리 전달할 수 있어요`}
        />
      </div>
      <div className="inline-flex justify-start items-start gap-[0.125rem]">
        <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center">
          <div className="justify-start text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
            버튼이름
          </div>
        </div>
        <CommonInputSize
          type="text"
          inputWidth={27.8125}
          id="RSVP-Button-Name"
          value={RSVPContents.buttonName}
          onChange={(e) => handleInputChange('buttonName', e.target.value)}
          placeholder="참석 의사 전달하기"
        />
      </div>
      <div className="inline-flex justify-start items-start gap-[0.125rem]">
        <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center">
          <div className="justify-start text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
            항목
          </div>
        </div>
        <div className="flex justify-start items-start gap-[0.625rem]">
          <CheckBoxWithLabel
            checked={checkBoxState.attendees}
            onChange={() => handleCheckboxChange('attendees')}
            label="인원"
          />
          <CheckBoxWithLabel
            checked={checkBoxState.companionName}
            onChange={() => handleCheckboxChange('companionName')}
            label="동행인 성함"
          />
          <CheckBoxWithLabel
            checked={checkBoxState.contact}
            onChange={() => handleCheckboxChange('contact')}
            label="연락처"
          />
          <CheckBoxWithLabel
            checked={checkBoxState.meal}
            onChange={() => handleCheckboxChange('meal')}
            label="식사여부"
          />
          <CheckBoxWithLabel
            checked={checkBoxState.additionalNotes}
            onChange={() => handleCheckboxChange('additionalNotes')}
            label="기타 전달사항"
          />
        </div>
      </div>
      {/* 하단 구분선 */}
      <div className="w-full h-[0.0625rem] bg-LumiDayGray-f0f" />

      {/* 안내 문구 */}
      <div className="flex items-center gap-[0.3125rem]">
        <Image
          src={'/imgs/Info.svg'}
          alt="Info"
          width={20}
          height={20}
          className="object-contain"
        />
        <div className="text-LumiDayGray-999 text-1-500">
          참석의사 집계 결과는 제작 내역에서 확인하실 수 있습니다.
        </div>
      </div>
    </DropDownBig>
  );
}
