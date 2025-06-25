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

export interface ViewModeSelectorType {
  value: string;
  label: string;
  className?: string;
}

export interface CheckBoxState {
  [key: string]: boolean;
}

export interface CheckBoxWithLabelProps {
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
  inputHeight?: number;
  id: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
}

export interface CommonTextAreaProps {
  inputWidth: number;
  inputHeight?: number;
  id: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
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

export interface DropDownSizeProps {
  selectedValue: SizeType;
  setSelectedValue: (size: SizeType) => void;
}
export interface DropDownFontProps {
  selectedValue: FontType;
  setSelectedValue: (font: FontType) => void;
}
export interface CheckBoxSelectorProps {
  state: CheckBoxState;
  setState: (state: CheckBoxState) => void;
}

export type DropDownBIgSwitchProps = {
  checked: boolean;
  setChecked: (checked: boolean) => void;
};
export interface CheckBoxGrayOutProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

export interface MusicFileProps {
  id: string;
  name: string;
  src: string | null;
  file?: File;
}

export interface AudioPlayerProps {
  src: string | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  disabled?: boolean;
}

export interface RSVPContentsProps {
  [key: string]: string;
}
