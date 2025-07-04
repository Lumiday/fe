'use client';

import React, { useState } from 'react';
import DropDownBig from '../common/DropDownBig';
import CommonInputSize from '../common/CommonInputSize';
import CommonTextAreaSize from '../common/CommonTextAreaSize';
import ViewModeSelector from '../common/ViewModeSelector';
import { CheckBoxWithLabel } from '../common/CheckBoxWithLabel';
import Image from 'next/image';

interface AccountInput {
  id: string;
  groupName: string;
  accountHolder: string;
  bank: string;
  accountNumber: string;
  kakaoPay: boolean;
}

export function AccountInfoDropdown() {
  const [isChecked, setIsChecked] = useState(true);
  const [title, setTitle] = useState('마음 전하실 곳');
  const [content, setContent] = useState(
    '참석이 어려우신 분들을 위해 계좌번호를 기재하였습니다.\n너그러운 마음으로 양해 부탁드립니다.'
  );
  const [selectedPattern, setSelectedPattern] = useState('기본');
  const [groomInputs, setGroomInputs] = useState<AccountInput[]>([
    {
      id: `input-1`,
      groupName: '신랑측',
      accountHolder: '',
      bank: '',
      accountNumber: '',
      kakaoPay: false,
    },
  ]);

  const [brideInputs, setBrideInputs] = useState<AccountInput[]>([
    {
      id: `input-1`,
      groupName: '신부측',
      accountHolder: '',
      bank: '',
      accountNumber: '',
      kakaoPay: false,
    },
  ]);

  const patterns = [
    { value: '기본', label: '기본' },
    { value: '버튼', label: '버튼' },
    { value: '아코디언', label: '아코디언' },
  ];

  const addInputSet = (groupName: string) => {
    const newId = `input-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newInput = {
      id: newId,
      groupName,
      accountHolder: '',
      bank: '',
      accountNumber: '',
      kakaoPay: false,
    };

    if (groupName === '신랑측') {
      setGroomInputs([...groomInputs, newInput]);
    } else if (groupName === '신부측') {
      setBrideInputs([...brideInputs, newInput]);
    }
  };

  const removeInputSet = (id: string, groupName: string) => {
    if (groupName === '신랑측' && groomInputs.length > 1) {
      setGroomInputs(groomInputs.filter((input) => input.id !== id));
    } else if (groupName === '신부측' && brideInputs.length > 1) {
      setBrideInputs(brideInputs.filter((input) => input.id !== id));
    }
  };

  const updateInput = (
    id: string,
    field: keyof AccountInput,
    value: string | boolean,
    groupName: string
  ) => {
    if (groupName === '신랑측') {
      setGroomInputs(
        groomInputs.map((input) =>
          input.id === id ? { ...input, [field]: value } : input
        )
      );
    } else if (groupName === '신부측') {
      setBrideInputs(
        brideInputs.map((input) =>
          input.id === id ? { ...input, [field]: value } : input
        )
      );
    }
  };

  return (
    <DropDownBig
      name="계좌번호"
      checked={isChecked}
      setChecked={setIsChecked}
      isSwitchVisible={true}
      isPadding={false}
    >
      <div className="flex flex-col gap-[1.25rem] my-[1.25rem]">
        <div className="flex flex-col gap-[1.25rem] px-[1.25rem]">
          {/* Title Section */}
          <div className="flex items-start gap-[0.125rem]">
            <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center">
              <div className="text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
                제목
              </div>
            </div>
            <CommonInputSize
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              inputWidth={21.6875}
              placeholder="제목을 입력하세요"
            />
          </div>

          {/* Content Section */}
          <div className="flex items-start gap-[0.125rem]">
            <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center">
              <div className="text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
                내용
              </div>
            </div>
            <CommonTextAreaSize
              id="content"
              inputWidth={21.6875}
              inputHeight={5.3125}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
            />
          </div>

          {/* Design Section */}
          <ViewModeSelector
            name="디자인"
            selectedPattern={selectedPattern}
            setSelectedPattern={setSelectedPattern}
            patterns={patterns}
          />
        </div>

        {/* 하단 구분선 */}
        <div className="w-full h-[0.0625rem] bg-LumiDayGray-f0f" />

        {/* 신랑측 Account Information Section */}
        <div className="flex flex-col gap-[1.25rem] px-[1.25rem]">
          {groomInputs.map((input) => (
            <div key={input.id} className="flex flex-col gap-[1.25rem]">
              <div className="flex flex-col items-start gap-[0.125rem]">
                <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center">
                  <div className="text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
                    그룹명
                  </div>
                </div>
                <div className="flex items-center gap-[0.125rem]">
                  <CommonInputSize
                    id={`${input.id}-groupName`}
                    type="text"
                    value={input.groupName}
                    onChange={(e) =>
                      updateInput(
                        input.id,
                        'groupName',
                        e.target.value,
                        '신랑측'
                      )
                    }
                    inputWidth={28}
                    placeholder="그룹명을 입력하세요"
                  />
                  <div className="flex items-center justify-center w-[2.4375rem] h-[2.5rem] p-[0.25rem]">
                    <button
                      onClick={() => removeInputSet(input.id, '신랑측')}
                      aria-label="계좌정보 삭제"
                      className="w-[1.25rem] h-[1.25rem] bg-LumiDayGray-f0f hover:bg-LumiDayGray-999-30 rounded-[0.125rem] flex items-center justify-center transition-bg duration-300 ease-in-out"
                    >
                      <Image
                        src="/imgs/addBtn_deleteImg.svg"
                        width={16}
                        height={16}
                        alt="delete-img"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-[0.125rem]">
                <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center">
                  <div className="text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
                    예금주
                  </div>
                </div>
                <CommonInputSize
                  id={`${input.id}-accountHolder`}
                  type="text"
                  value={input.accountHolder}
                  onChange={(e) =>
                    updateInput(
                      input.id,
                      'accountHolder',
                      e.target.value,
                      '신랑측'
                    )
                  }
                  inputWidth={21.6875}
                  placeholder="예금주 명"
                />
              </div>

              <div className="flex items-start gap-[0.125rem]">
                <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center">
                  <div className="text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
                    계좌정보
                  </div>
                </div>
                <div className="flex gap-[0.625rem]">
                  <CommonInputSize
                    id={`${input.id}-bank`}
                    type="text"
                    value={input.bank}
                    onChange={(e) =>
                      updateInput(input.id, 'bank', e.target.value, '신랑측')
                    }
                    inputWidth={6.3125}
                    placeholder="은행"
                  />
                  <CommonInputSize
                    id={`${input.id}-accountNumber`}
                    type="text"
                    value={input.accountNumber}
                    onChange={(e) =>
                      updateInput(
                        input.id,
                        'accountNumber',
                        e.target.value,
                        '신랑측'
                      )
                    }
                    inputWidth={14.75}
                    placeholder="계좌번호"
                  />
                </div>
              </div>

              <div className="flex items-center gap-[0.125rem]">
                <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center">
                  <div className="text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
                    간편 송금
                  </div>
                </div>
                <CheckBoxWithLabel
                  checked={input.kakaoPay}
                  onChange={() =>
                    updateInput(input.id, 'kakaoPay', !input.kakaoPay, '신랑측')
                  }
                  label="카카오 페이"
                />
              </div>
            </div>
          ))}
          {/* 신랑측 Add Button */}
          <button
            onClick={() => addInputSet('신랑측')}
            className="flex items-center justify-center w-[8.3125rem] h-[2.5rem] bg-LumiDayGray-f0f hover:bg-LumiDayGray-999-30 rounded-[0.625rem] gap-[0.5625rem] transition-bg duration-300 ease-in-out"
          >
            <Image
              src="/imgs/addBtn_plusImg.svg"
              width={13}
              height={13}
              alt="plus-img"
            />
            <span className="text-LumiDayGray-1e1 text-875-400 font-['Pretendard']">
              계좌정보 추가
            </span>
          </button>
        </div>

        {/* 하단 구분선 */}
        <div className="w-full h-[0.0625rem] bg-LumiDayGray-f0f" />

        {/* 신부측 Account Information Section */}
        <div className="flex flex-col gap-[1.25rem] px-[1.25rem]">
          {brideInputs.map((input) => (
            <div key={input.id} className="flex flex-col gap-[1.25rem]">
              <div className="flex flex-col items-start gap-[0.125rem]">
                <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center">
                  <div className="text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
                    그룹명
                  </div>
                </div>
                <div className="flex items-center gap-[0.125rem]">
                  <CommonInputSize
                    id={`${input.id}-groupName`}
                    type="text"
                    value={input.groupName}
                    onChange={(e) =>
                      updateInput(
                        input.id,
                        'groupName',
                        e.target.value,
                        '신부측'
                      )
                    }
                    inputWidth={28}
                    placeholder="그룹명을 입력하세요"
                  />
                  <div className="flex items-center justify-center w-[2.4375rem] h-[2.5rem] p-[0.25rem]">
                    <button
                      onClick={() => removeInputSet(input.id, '신부측')}
                      aria-label="계좌정보 삭제"
                      className="w-[1.25rem] h-[1.25rem] bg-LumiDayGray-f0f hover:bg-LumiDayGray-999-30 rounded-[0.125rem] flex items-center justify-center transition-bg duration-300 ease-in-out"
                    >
                      <Image
                        src="/imgs/addBtn_deleteImg.svg"
                        width={16}
                        height={16}
                        alt="delete-img"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-[0.125rem]">
                <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center">
                  <div className="text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
                    예금주
                  </div>
                </div>
                <CommonInputSize
                  id={`${input.id}-accountHolder`}
                  type="text"
                  value={input.accountHolder}
                  onChange={(e) =>
                    updateInput(
                      input.id,
                      'accountHolder',
                      e.target.value,
                      '신부측'
                    )
                  }
                  inputWidth={21.6875}
                  placeholder="예금주 명"
                />
              </div>

              <div className="flex items-start gap-[0.125rem]">
                <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center">
                  <div className="text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
                    계좌정보
                  </div>
                </div>
                <div className="flex gap-[0.625rem]">
                  <CommonInputSize
                    id={`${input.id}-bank`}
                    type="text"
                    value={input.bank}
                    onChange={(e) =>
                      updateInput(input.id, 'bank', e.target.value, '신부측')
                    }
                    inputWidth={6.3125}
                    placeholder="은행"
                  />
                  <CommonInputSize
                    id={`${input.id}-accountNumber`}
                    type="text"
                    value={input.accountNumber}
                    onChange={(e) =>
                      updateInput(
                        input.id,
                        'accountNumber',
                        e.target.value,
                        '신부측'
                      )
                    }
                    inputWidth={14.75}
                    placeholder="계좌번호"
                  />
                </div>
              </div>

              <div className="flex items-center gap-[0.125rem]">
                <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center">
                  <div className="text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
                    간편 송금
                  </div>
                </div>
                <CheckBoxWithLabel
                  checked={input.kakaoPay}
                  onChange={() =>
                    updateInput(input.id, 'kakaoPay', !input.kakaoPay, '신부측')
                  }
                  label="카카오 페이"
                />
              </div>
            </div>
          ))}
          {/* 신부측 Add Button */}
          <button
            onClick={() => addInputSet('신부측')}
            className="flex items-center justify-center w-[8.3125rem] h-[2.5rem] bg-LumiDayGray-f0f hover:bg-LumiDayGray-999-30 rounded-[0.625rem] gap-[0.5625rem] transition-bg duration-300 ease-in-out"
          >
            <Image
              src="/imgs/addBtn_plusImg.svg"
              width={13}
              height={13}
              alt="plus-img"
            />
            <span className="text-LumiDayGray-1e1 text-875-400 font-['Pretendard']">
              계좌정보 추가
            </span>
          </button>
        </div>

        {/* 하단 구분선 */}
        <div className="w-full h-[0.0625rem] bg-LumiDayGray-f0f" />
      </div>
    </DropDownBig>
  );
}
