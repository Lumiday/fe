'use client';

import React from 'react';
import CheckBoxGroup from '@/app/_components/common/CheckBox';
import DropDownBig from '@/app/_components/common/DropDownBig';
import CommonInput from '@/app/_components/common/CommonInput';
import { useState } from 'react';

const Wedding_Venue_Dropdown = () => {
  const [venue, setVenue] = useState('');
  const [selectMapStates, setSelectMaStates] = useState<
    Record<string, boolean>
  >({});
  const [MarkMapStates, setMarkMapStates] = useState<Record<string, boolean>>(
    {}
  );

  const handleSelectMapChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    itemId: string
  ) => {
    setSelectMaStates((prev) => ({
      ...prev,
      [itemId]: e.target.checked,
    }));
  };

  const handleMarkMapChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    itemId: string
  ) => {
    setMarkMapStates((prev) => ({
      ...prev,
      [itemId]: e.target.checked,
    }));
  };

  const selectMapItems = [
    {
      id: '1',
      label: '네이버지도',
      value: 'naver',
      checked: selectMapStates['1'] || false, //왼쪽 값이 undefined, null, false 등 "falsy"한 값이면 오른쪽 값(false)를 반환 그렇지 않으면 checkedStates['1'] 그대로 사용
    },
    {
      id: '2',
      label: '카카오 맵',
      value: 'kakao',
      checked: selectMapStates['2'] || false,
    },
    {
      id: '3',
      label: '구글 맵',
      value: 'google',
      checked: selectMapStates['3'] || false,
    },
  ];

  const markMapItems = [
    {
      id: '1',
      label: '지도 표시',
      value: 'mark',
      checked: MarkMapStates['1'] || false, //왼쪽 값이 undefined, null, false 등 "falsy"한 값이면 오른쪽 값(false)를 반환 그렇지 않으면 checkedStates['1'] 그대로 사용
    },
  ];

  return (
    <>
      <div>
        <DropDownBig name="예식 장소" isSwitchVisible={false}>
          <div className="flex flex-col gap-[1.25rem]">
            <div>
              <CommonInput
                value={venue}
                inputWidth={21.6875}
                type="text"
                label="예식장명"
                onChange={(e) => setVenue(e.target.value)}
                id="venue"
              />
            </div>
            <div>
              <CommonInput
                value={venue}
                inputWidth={21.6875}
                type="text"
                label="층과 홀"
                onChange={(e) => setVenue(e.target.value)}
                id="venue"
              />
            </div>
            <div>
              <CommonInput
                value={venue}
                inputWidth={17.875}
                type="text"
                label="주소"
                onChange={(e) => setVenue(e.target.value)}
                id="venue"
                isButton={true}
              />
            </div>
            <div className="w-[28.0625rem] h-[17.3125rem] border border-black"></div>
            <CheckBoxGroup
              title="지도 표시"
              items={markMapItems}
              onChange={handleMarkMapChange}
            />
            <CheckBoxGroup
              title="지도 선택"
              items={selectMapItems}
              onChange={handleSelectMapChange}
            />
          </div>
        </DropDownBig>
      </div>
    </>
  );
};

export default Wedding_Venue_Dropdown;
