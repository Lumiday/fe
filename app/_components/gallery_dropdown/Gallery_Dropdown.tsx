'use client';

import CommonInput from '@/app/_components/common/CommonInput';
import DropDownBig from '@/app/_components/common/DropDownBig';
import ViewModeSelector from '@/app/_components/common/ViewModeSelector';
import { useState } from 'react';

const patterns = [
  { value: '스와이프', label: '스와이프' },
  { value: '그리드', label: '그리드' },
  { value: '작은 꽃', label: '작은 꽃' },
];

const Gallery_Dropdown = () => {
  const [selectedPattern, setSelectedPattern] = useState<string>('스와이프');

  const handlePatternChange = (newPattern: string) => {
    setSelectedPattern(newPattern);
  };

  return (
    <DropDownBig name="갤러리" isSwitchVisible={false}>
      {/* <CommonInput type="text" label="제목" id="title" inputWidth={21.6875} /> */}
      {/* 갤러리 타입 */}
      <ViewModeSelector
        name="갤러리 타입"
        patterns={patterns}
        selectedPattern={selectedPattern}
        setSelectedPattern={handlePatternChange}
      />
    </DropDownBig>
  );
};

export default Gallery_Dropdown;
