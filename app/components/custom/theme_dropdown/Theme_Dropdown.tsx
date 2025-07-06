'use client';

import { useState } from 'react';
import DropDownBig from '../common/DropDownBig';
import DropDownFont from './DropDownFont';
import DropDownSize from './DropDownSize';
import ColorSwatchSelector from './ColorSwatchSelector';
import ViewModeSelector from '@/app/components/custom/common/ViewModeSelector';
import CheckBoxSelector from './CheckBoxSelector';
import {
  ColorType,
  FontType,
  SizeType,
  CheckBoxState,
} from '@/type/components';

const patterns = [
  { value: '없음', label: '없음' },
  { value: '종이', label: '종이' },
  { value: '체크', label: '체크' },
  { value: '작은 꽃', label: '작은 꽃' },
];

export default function ThemeDropdown() {
  const [font, setFont] = useState<FontType>('pretendard');
  const [size, setSize] = useState<SizeType>('normal');
  const [selectedColor, setSelectedColor] = useState<ColorType>('white');
  const [selectedPattern, setSelectedPattern] = useState<string>('없음');
  const [checkBoxState, setCheckBoxState] = useState<CheckBoxState>({
    disableZoom: false,
    scrollEffect: false,
  });

  const handleFontChange = (newFont: FontType) => {
    setFont(newFont);
  };

  const handleSizeChange = (newSize: SizeType) => {
    setSize(newSize);
  };

  const handleColorChange = (newColor: ColorType) => {
    setSelectedColor(newColor);
  };

  const handlePatternChange = (newPattern: string) => {
    setSelectedPattern(newPattern);
  };

  const handleCheckBoxChange = (newState: CheckBoxState) => {
    setCheckBoxState(newState);
  };

  return (
    <div>
      <DropDownBig name="테마" isSwitchVisible={false}>
        <DropDownFont
          selectedValue={font}
          setSelectedValue={handleFontChange}
        />
        <DropDownSize
          selectedValue={size}
          setSelectedValue={handleSizeChange}
        />
        <ColorSwatchSelector
          selectedColor={selectedColor}
          setSelectedColor={handleColorChange}
        />
        <ViewModeSelector
          name="배경 패턴"
          patterns={patterns}
          selectedPattern={selectedPattern}
          setSelectedPattern={handlePatternChange}
        />
        <CheckBoxSelector
          state={checkBoxState}
          setState={handleCheckBoxChange}
        />
      </DropDownBig>
    </div>
  );
}
