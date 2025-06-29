'use client';

import React, { useState, useRef } from 'react';

interface ImageUploaderProps {
  onUpload?: (images: File[]) => void;
  maxImages?: number;
}

//현재 이미지를 받는 갯수를 maxImages 고정된 인자로 조절 할 수 있다
const ImageUploader = ({ onUpload, maxImages = 30 }: ImageUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [images, setImages] = useState<File[]>([]); //이미지
  const [previews, setPreviews] = useState<string[]>([]); //미리보기
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;

    const totalImages = images.length + files.length;
    if (totalImages > maxImages) {
      setErrorMessage(`최대 ${maxImages}장까지만 업로드 가능합니다.`);
      return;
    }

    const validFiles = files.filter((file) => {
      const isValidType = ['image/jpeg', 'image/png'].includes(file.type);
      const isValidSize = file.size <= 5 * 1024 * 1024;
      if (!isValidType)
        setErrorMessage(`${file.name}: 지원하지 않는 파일 형식입니다.`);
      if (!isValidSize) setErrorMessage(`${file.name}: 5MB를 초과했습니다.`);
      return isValidType && isValidSize;
    });

    if (validFiles.length) {
      setImages((prev) => [...prev, ...validFiles]);
      const newPreviews = validFiles.map((file) => URL.createObjectURL(file));
      setPreviews((prev) => [...prev, ...newPreviews]);
      setErrorMessage(null);
      if (onUpload) onUpload([...images, ...validFiles]);
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleCustomUploadClick = () => {
    if (fileInputRef.current && images.length < maxImages) {
      fileInputRef.current.click();
    }
  };

  const handleDelete = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
    if (onUpload) onUpload(images.filter((_, i) => i !== index));
    setErrorMessage(null);
  };

  return (
    <>
      <div className="flex">
        <label className="w-[6.25rem] py-[0.4375rem] px-[0.25rem] text-1-500 text-LumiDayGray-1e1 mr-[0.12rem]">
          사진 추가
        </label>
        <button
          onClick={handleCustomUploadClick}
          className={`w-[8.125rem] h-[8.125rem] p-[0.625rem] border border-LumiDayGray-999 rounded-[0.3125rem] text-LumiDayGray-999 text-1-500 hover:bg-LumiDayGray-f0f ${
            images.length >= maxImages
              ? 'bg-gray-400 cursor-not-allowed'
              : ' hover:text-LumiDayGray-d1d'
          }`}
          disabled={images.length >= maxImages}
        >
          사진 업로드
        </button>
        <input
          type="file"
          accept="image/jpeg,image/png" //내가 받을 이미지 확장자
          multiple
          onChange={handleImageUpload}
          ref={fileInputRef}
          className="hidden"
          disabled={images.length >= maxImages}
        />
      </div>
      <div className="w-[28.5625rem]  ml-[6.25rem] grid grid-cols-3 gap-y-6">
        {previews.map((preview, index) => (
          <div key={index} className="relative w-[8.125rem] ">
            <img
              src={preview}
              alt={`Preview ${index}`}
              className="w-full h-[8.125rem] object-cover rounded-[0.3125rem]"
            />
            <button
              onClick={() => handleDelete(index)}
              className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#999] text-[#F0F0F0] w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-[0.1875rem] "
              aria-label="Delete image"
            >
              <span className="flex items-center justify-center w-[0.82406rem] h-[0.82406rem]">
                ×
              </span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageUploader;
