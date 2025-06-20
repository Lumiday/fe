import { ChangeEvent } from 'react';

export type ColorType = 'white' | 'beige' | 'light pink' | 'pink' | 'sky';

export type FontType =
  | 'pretendard'
  | 'ryudung'
  | 'gangwon'
  | 'nanum'
  | 'tmoney';

export interface FontOption {
  value: FontType;
  label: string;
  fontClass: string;
}

export type SizeType = 'normal' | 'smaller' | 'larger';

export interface SizeOption {
  value: SizeType;
  label: string;
}

export type PatternType = '없음' | '종이' | '체크' | '작은 꽃';

export interface PatternOption {
  value: PatternType;
  label: string;
  className?: string;
}

export interface CheckBoxState {
  disableZoom: boolean;
  scrollEffect: boolean;
}

export interface CheckBoxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}
export interface PersonInfo {
  lastName: string;
  firstName: string;
  phone: string;
  isDeceased?: boolean;
}

export type DeceasedDisplayType =
  | 'none'
  | 'color'
  | 'deceased'
  | 'chrysanthemum';

export interface DeceasedDisplayOption {
  value: DeceasedDisplayType;
  label: string;
}

export interface PersonInfoInputProps {
  label: string;
  person: PersonInfo;
  setPerson: React.Dispatch<React.SetStateAction<PersonInfo>>;
  showDeceasedCheckbox?: boolean;
}

export interface DropDownBigProps {
  name: string;
  children: React.ReactNode;
  checked?: boolean;
  setChecked?: (checked: boolean) => void;
  isSwitchVisible: boolean;
}

export interface CommonInputProps {
  type: string;
  inputWidth: number;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export interface InputProps {
  type: string;
  label: string;
  inputWidth: number;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isButton?: boolean;
}

export interface DeceasedDisplaySelectorProps {
  selectedDisplay: DeceasedDisplayType;
  setSelectedDisplay: (display: DeceasedDisplayType) => void;
  displays?: DeceasedDisplayOption[];
}
