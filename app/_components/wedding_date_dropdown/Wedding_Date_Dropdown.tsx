'use client';

import React, { useState } from 'react';
import CheckBoxGroup from '@/app/_components/common/CheckBoxGroup';
import DropDownBig from '@/app/_components/common/DropDownBig';
import DropDownTime from '@/app/_components/wedding_date_dropdown/DropDownTime';
import DropDownDate from '@/app/_components/wedding_date_dropdown/DropDownDate';

const Wedding_Date_Dropdown = () => {
  const [displayOptionsStates, setDisplayOptionsStates] = useState<
    Record<string, boolean>
  >({});
  const [selectedValue, setSelectedValue] = useState('');

  const handleDisplayOptionsStates = (
    e: React.ChangeEvent<HTMLInputElement>,
    itemId: string
  ) => {
    setDisplayOptionsStates((prev) => ({
      ...prev,
      [itemId]: e.target.checked,
    }));
  };

  const displayOptionsItems = [
    {
      id: '1',
      label: '캘린더 표시',
      value: 'Calendar',
      checked: displayOptionsStates['1'] || false, //왼쪽 값이 undefined, null, false 등 "falsy"한 값이면 오른쪽 값(false)를 반환 그렇지 않으면 checkedStates['1'] 그대로 사용
    },
    {
      id: '2',
      label: '디데이 표시',
      value: 'D-Day',
      checked: displayOptionsStates['2'] || false,
    },
  ];

  const handleTimeChange = (item: string) => {
    setSelectedValue(item);
  };

  return (
    <DropDownBig name="예식 일시" isSwitchVisible={false}>
      <DropDownDate />
      <DropDownTime
        selectedValue={selectedValue} //현재선택된 시간
        setSelectedValue={handleTimeChange} //부모컴포넌트에서 전달됨 함수로 새로운 시간값을 설정해 부모상태 업
      />
      <CheckBoxGroup
        title="표시"
        items={displayOptionsItems}
        onChange={handleDisplayOptionsStates}
      />
    </DropDownBig>
  );
};

export default Wedding_Date_Dropdown;
