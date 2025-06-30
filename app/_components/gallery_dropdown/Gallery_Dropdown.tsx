'use client';

import { useState } from 'react';
import CheckBoxGroup from '@/app/_components/common/CheckBoxGroup';
import CommonInput from '@/app/_components/common/CommonInput';
import DropDownBig from '@/app/_components/common/DropDownBig';
import ViewModeSelector from '@/app/_components/common/ViewModeSelector';
import Image from 'next/image';
import ImageUploader from '@/app/_components/gallery_dropdown/ImageUploader';

const patterns = [
  { value: '스와이프', label: '스와이프' },
  { value: '그리드', label: '그리드' },
  { value: '바둑판', label: '바둑판' },
];

const GalleryDropdown = () => {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  // const [selectedPattern, setSelectedPattern] = useState<string>('스와이프');
  const [displayOptionsStates, setDisplayOptionsStates] = useState<
    Record<string, boolean>
  >({});
  const [formData, setFormData] = useState({
    title: '',
    pattern: '스와이프',
    popupViewer: false,
    images: [] as File[], //추론 불가로 인한 타입 단언 처리
  });

  const handleDisplayOptionsStates = (
    e: React.ChangeEvent<HTMLInputElement>,
    itemId: string
  ) => {
    setDisplayOptionsStates((prev) => ({
      ...prev,
      [itemId]: e.target.checked,
    }));
  };

  // const handlePatternChange = (newPattern: string) => {
  //   setSelectedPattern(newPattern);
  // };

  const handleImageUpload = (images: File[]) => {
    setUploadedImages(images);
    // API 호출 또는 상태 업데이트 로직 추가 uploadedImages
  };

  const displayOptionsItems = [
    {
      id: '1',
      label: '갤러리 사진을 터치하면, 갤러리 전용 팝업 뷰어가 나타납니다.',
      value: 'gallery',
      checked: displayOptionsStates['1'] || false, //왼쪽 값이 undefined, null, false 등 "falsy"한 값이면 오른쪽 값(false)를 반환 그렇지 않으면 checkedStates['1'] 그대로 사용
    },
  ];

  return (
    <DropDownBig name="갤러리" isSwitchVisible={false} isPadding={false}>
      <div className="p-[1.25rem] flex flex-col gap-[1.25rem]">
        <CommonInput
          type="text"
          label="제목"
          id="title"
          inputWidth={21.6875}
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        {/* 갤러리 타입 */}
        <ViewModeSelector
          name="갤러리 타입"
          patterns={patterns}
          // selectedPattern={selectedPattern}
          // setSelectedPattern={handlePatternChange}
          selectedPattern={formData.pattern}
          onChange={(value) => setFormData({ ...formData, pattern: value })}
        />
        <CheckBoxGroup
          title="팝업 뷰어"
          items={displayOptionsItems}
          onChange={handleDisplayOptionsStates}
        />
        <ImageUploader onUpload={handleImageUpload} maxImages={30} />
      </div>
      <div className="border border-LumiDayGray-F0F"></div>
      <div className="p-[1.25rem] flex flex-col gap-[0.62rem]">
        <p className="text-[0.8125rem] font-normal text-LumiDayGray-999 flex item-center gap-[0.31rem]">
          <Image
            src="/imgs/information.svg"
            alt="알림 표시"
            width={20}
            height={20}
          />
          사진은 최대 30장까지 첨부할 수 있습니다.
        </p>
        <p className="text-[0.8125rem] font-normal text-LumiDayGray-999 flex item-center gap-[0.31rem]">
          <Image
            src="/imgs/information.svg"
            alt="알림 표시"
            width={20}
            height={20}
          />
          드래그하여 사진 순서를 변경할 수 있습니다.
        </p>
      </div>
    </DropDownBig>
  );
};

export default GalleryDropdown;
