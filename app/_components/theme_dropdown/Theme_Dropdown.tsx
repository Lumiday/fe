'use client';

import { useState } from 'react';
import DropDownBig from '../common/DropDownBig';
import DropDownFont from './DropDownFont';
import DropDownSize from './DropDownSize';
import ColorSwatchSelector from './ColorSwatchSelector';
import PatternSelector from './PatternSelector';
import CheckBoxSelector from './CheckBoxSelector';

export type FontType =
  | 'pretendard'
  | 'ryudung'
  | 'gangwon'
  | 'nanum'
  | 'tmoney';
export type SizeType = 'normal' | 'smaller' | 'larger';
export type ColorType = 'white' | 'beige' | 'light pink' | 'pink' | 'sky';

export interface FontOption {
  value: FontType;
  label: string;
  fontClass: string;
}

export interface SizeOption {
  value: SizeType;
  label: string;
}

export interface CheckBoxState {
  disableZoom: boolean;
  scrollEffect: boolean;
}

export default function ThemeDropdown() {
  const [font, setFont] = useState<FontType>('pretendard');
  const [size, setSize] = useState<SizeType>('normal');
  const [selectedColor, setSelectedColor] = useState<ColorType>('white');
  const [selectedPattern, setSelectedPattern] = useState<string>('없음');
  const [checkBoxState, setCheckBoxState] = useState<CheckBoxState>({
    disableZoom: false,
    scrollEffect: false,
  });

  return (
    <div>
      <DropDownBig name="테마" isSwitchVisible={false}>
        <DropDownFont selectedValue={font} setSelectedValue={setFont} />
        <DropDownSize selectedValue={size} setSelectedValue={setSize} />
        <ColorSwatchSelector
          key={selectedColor}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <PatternSelector
          selectedPattern={selectedPattern}
          setSelectedPattern={setSelectedPattern}
        />
        <CheckBoxSelector state={checkBoxState} setState={setCheckBoxState} />
      </DropDownBig>
    </div>
  );
}
