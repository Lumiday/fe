'use client';

import { useState } from 'react';
import DropDownBig from '../common/DropDownBig';
import DropDownFont from './DropDownFont';
import DropDownSize from './DropDownSize';
import ColorSwatchSelector from './ColorSwatchSelector';
import PatternSelector from './PatternSelector';
import CheckBoxSelector from './CheckBoxSelector';
import {
  ColorType,
  FontType,
  SizeType,
  PatternType,
  CheckBoxState,
} from '@/type/components';

export default function ThemeDropdown() {
  const [font, setFont] = useState<FontType>('pretendard');
  const [size, setSize] = useState<SizeType>('normal');
  const [selectedColor, setSelectedColor] = useState<ColorType>('white');
  const [selectedPattern, setSelectedPattern] = useState<PatternType>('없음');
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

  const handlePatternChange = (newPattern: PatternType) => {
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
        <PatternSelector
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
