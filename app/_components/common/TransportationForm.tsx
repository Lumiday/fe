'use client';
import React, { useState } from 'react';
import AddBtn from '@/app/_components/common/AddBtn';
import Image from 'next/image';

type sectionsType = {
  id: number;
  transport: string;
  direction: string;
};

export default function TransportationForm() {
  const [sections, setSections] = useState<sectionsType[]>([
    { id: 0, transport: '', direction: '' },
  ]);

  const handleAdd = () => {
    setSections((prev) => [
      ...prev,
      { id: prev.length, transport: '', direction: '' },
    ]);
  };

  const handleInputChange = (
    id: number,
    field: 'transport' | 'direction',
    newValue: string
  ) => {
    console.log(field);
    setSections((prev) =>
      prev.map((section) =>
        section.id === id ? { ...section, [field]: newValue } : section
      )
    );
  };

  console.log(sections);
  const handleRemove = (id: number) => {
    if (sections.length === 0) return;
    setSections((prev) => prev.filter((section) => section.id !== id));
  };

  return (
    <div className="flex flex-col gap-[1.25rem] w-full ">
      {sections.map((section) => (
        <div key={section.id} className="flex items-start">
          <label className="w-[6.25rem] h-[2.5rem] flex items-center text-#1E1E1E font-medium ">
            교통수단
          </label>
          <div className="flex flex-col gap-[0.62rem] w-full">
            <input
              placeholder="교통수단(지하철,버스,자가용 등)"
              className="border border-[#999] rounded-[0.3125rem] p-[0.625rem] w-full  placeholder:text-[#999] font-[0.875rem]"
              value={section.transport}
              onChange={(e) =>
                handleInputChange(section.id, 'transport', e.target.value)
              }
            />
            <textarea
              placeholder="오시는 길을 입력하세요."
              className="border border-[#999] rounded-[0.3125rem] p-[0.625rem] w-full resize-none placeholder:text-[#999] font-[0.875rem]"
              value={section.direction}
              onChange={(e) =>
                handleInputChange(section.id, 'direction', e.target.value)
              }
            />
          </div>
          <button
            className="bg-[#F0F0F0] w-[1.25rem] h-[1.25rem] rounded-[0.125rem] flex justify-center items-center ml-[0.56rem] mt-[0.44rem] group-hover:opacity-100 transition-opacity"
            onClick={() => handleRemove(section.id)}
          >
            <Image
              src="/imgs/addBtn_deleteImg.svg"
              width={10.032}
              height={10.032}
              alt="delete-img"
            />
          </button>
        </div>
      ))}
      <AddBtn onAdd={handleAdd}>교통수단 추가</AddBtn>
    </div>
  );
}
