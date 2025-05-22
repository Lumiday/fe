'use client';
import Image from 'next/image';
import React from 'react';

interface AddBtnProps {
  onAdd: () => void;
  children: React.ReactNode;
}

const AddBtn = ({ onAdd, children }: AddBtnProps) => {
  return (
    <button
      className="w-[8.3125rem] h-[2.5rem] flex justify-center items-center gap-[0.56rem] text-[#1E1E1E] text-[0.875rem] border border-[rgba(51, 51, 51, 0.20)] rounded-[0.625rem]"
      onClick={onAdd}
    >
      <Image
        src="/imgs/addBtn_plusImg.svg"
        alt="pus-img"
        width={13}
        height={13}
      />
      {children}
    </button>
  );
};

export default AddBtn;
