'use client';

import React, { useState, useRef } from 'react';

interface ImageUploaderProps {
  onUpload?: (images: File[]) => void;
  maxImages?: number; //이미지의 최댓값을 넘기는건가?
}

//드래그 가능
//코드 한번번 확인

const ImageUploader = ({ onUpload, maxImages = 3 }: ImageUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [images, setImages] = useState<File[]>([]); //이미지
  const [previews, setPreviews] = useState<string[]>([]); //미리보기
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event', event);
    // lastModified: 1750949119737
    // lastModifiedDate: Thu Jun 26 2025 23:45:19 GMT+0900 (한국 표준시) {}
    // name :"스크린샷 2025-06-26 오후 11.45.14.png"
    // size: 383091
    // type: "image/png"
    // webkitRelativePath: ""
    const files = Array.from(event.target.files || []);
    //유사 배열 객체나 이터러블 객체(예: 문자열, Set, Map 등)를 새로운 배열로 변환하는 자바스크립트 메서드
    console.log('files', files);
    if (!files.length) return; //file.length가 0일 경우 true로 바뀌면서 반환된다.

    const totalImages = images.length + files.length;
    if (totalImages > maxImages) {
      setErrorMessage(`최대 ${maxImages}장까지만 업로드 가능합니다.`);
      return;
    }

    const validFiles = files.filter((file) => {
      //filter는 true인 파일만 validFiles 배열에 남깁
      //조건에 맞는 요소만 걸러내는 함수
      const isValidType = ['image/jpeg', 'image/png'].includes(file.type); //true, false 반환
      const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB 바이트 단위로 체크  //true, false 반환
      if (!isValidType)
        setErrorMessage(`${file.name}: 지원하지 않는 파일 형식입니다.`);
      if (!isValidSize) setErrorMessage(`${file.name}: 5MB를 초과했습니다.`);
      return isValidType && isValidSize; //해당 파일의 크기와 확장자를 확인 //true, false 반환
    });

    if (validFiles.length) {
      setImages((prev) => [...prev, ...validFiles]);
      const newPreviews = validFiles.map((file) => URL.createObjectURL(file)); //URL.createObjectURL(file) 함수를 호출해서 브라우저가 임시로 접근할 수 있는 '파일 URL'을 생성
      // URL.createObjectURL()을 쓰면, 브라우저가 그 파일을 가리키는 임시 주소(URL)를 만들어줍니다.
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

  // py (top,bottom) px (left, right)
  return (
    <>
      <div className="flex">
        <label className="w-[6.25rem] py-[0.4375rem] px-[0.25rem] text-1-500 text-LumiDayGray-1e1 mr-[0.12rem] bg-[pink]">
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
          {/* {images.length >= maxImages ? '업로드 완료' : '이미지 선택'} */}+
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
      {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
      <div className="w-[28.5625rem] bg-[skyblue] ml-[6.25rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {previews.map((preview, index) => (
          <div key={index} className="relative w-[8.125rem]">
            <img
              src={preview}
              alt={`Preview ${index}`}
              className="w-full h-32 object-cover rounded"
            />
            <button
              onClick={() => handleDelete(index)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              aria-label="Delete image"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageUploader;
