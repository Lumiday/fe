'use client';

import React, { useState } from 'react';
import { EndingContentsProps } from '@/type/components';
import DropDownBig from '../common/DropDownBig';
import Image from 'next/image';
import CommonInputSize from '../common/CommonInputSize';
import CommonTextAreaSize from '../common/CommonTextAreaSize';
import ImageUploader from '../gallery_dropdown/ImageUploader';

export default function EndingDropdown() {
  const [isEndingEnabled, setIsEndingEnabled] = useState(true);
  const [RSVPContents, setRSVPContents] = useState<EndingContentsProps>({
    title: '',
    contents: '',
    image: [] as File[],
  });

  const handleInputChange = (
    field: keyof EndingContentsProps,
    value: string
  ) => {
    setRSVPContents((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (images: File[]) => {
    setRSVPContents((prev) => ({ ...prev, image: images }));
  };

  return (
    <DropDownBig
      name="참석의사"
      checked={isEndingEnabled}
      setChecked={setIsEndingEnabled}
      isSwitchVisible={true}
    >
      <div className="inline-flex justify-start items-start gap-[0.125rem]">
        <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center">
          <div className="justify-start text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
            제목
          </div>
        </div>
        <CommonInputSize
          type="text"
          inputWidth={27.8125}
          id="RSVP-Title"
          value={RSVPContents.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
          placeholder="참석 의사 전달"
        />
      </div>
      <div className="inline-flex justify-start items-start gap-[0.125rem]">
        <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center">
          <div className="justify-start text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
            내용
          </div>
        </div>
        <CommonTextAreaSize
          inputWidth={27.8125}
          inputHeight={5}
          id="RSVP-Contents"
          value={RSVPContents.contents}
          onChange={(e) => handleInputChange('contents', e.target.value)}
          placeholder={`신랑,신부에게 참석의사를 \n미리 전달할 수 있어요`}
        />
      </div>

      <div className="inline-flex justify-start items-start gap-[0.125rem]">
        <ImageUploader maxImages={1} onUpload={handleImageUpload} />
      </div>
      {/* 하단 구분선 */}
      <div className="w-full h-[0.0625rem] bg-LumiDayGray-f0f" />

      {/* 안내 문구 */}
      <div className="flex items-center gap-[0.3125rem]">
        <Image
          src={'/imgs/Info.svg'}
          alt="Info"
          width={20}
          height={20}
          className="object-contain"
        />
        <div className="text-LumiDayGray-999 text-1-500">
          사진은 최대 1장까지 업로드 가능합니다.
        </div>
      </div>
    </DropDownBig>
  );
}
