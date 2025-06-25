'use client';

import DropDownBig from '@/app/_components/common/DropDownBig';
import CommonInput from '@/app/_components/common/CommonInput';
import { useState } from 'react';

interface FormState {
  title: string;
  content: string;
}

const Notice_Dropdown = () => {
  const [formState, setFormState] = useState<FormState>({
    title: '',
    content: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };
  return (
    <DropDownBig name="모시는 글" isSwitchVisible={false} isPadding={false}>
      <CommonInput
        type="string"
        label="제목"
        inputWidth={27.6875}
        id="title"
        value={formState.title}
        onChange={handleInputChange}
      />
      <div className="flex">
        <p className="w-[6.25rem] py-[0.4375rem] px-[0.25rem]  text-1-500 text-LumiDayGray-1e1 mr-[0.25rem]">
          내용
        </p>
        <div>
          <textarea
            id="content"
            value={formState.content}
            onChange={handleInputChange}
            className="w-[27.6875rem] h-[14.25rem] border p-[0.62rem] border-LumiDayGray-999 rounded-[0.3125rem] resize-none "
            maxLength={300}
          />
          <div className="text-end text-LumiDayGray-999 text-[0.75rem]">
            {formState.content.length}/300
          </div>
        </div>
      </div>
    </DropDownBig>
  );
};

export default Notice_Dropdown;
