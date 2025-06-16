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
