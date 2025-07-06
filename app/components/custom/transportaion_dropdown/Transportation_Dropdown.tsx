import { useState } from 'react';
import DropDownBig from '../common/DropDownBig';
import CommonInputSize from '../common/CommonInputSize';
import CommonTextAreaSize from '../common/CommonTextAreaSize';
import Image from 'next/image';

interface TransportationInput {
  id: string;
  type: string;
  directions: string;
}

export function TransportationDropdown() {
  const [isChecked, setIsChecked] = useState(true);
  const [inputs, setInputs] = useState<TransportationInput[]>([
    { id: `input-1`, type: '', directions: '' },
    { id: `input-2`, type: '', directions: '' },
  ]);

  const addInputSet = () => {
    const newId = `input-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    setInputs([...inputs, { id: newId, type: '', directions: '' }]);
  };

  const removeInputSet = (id: string) => {
    if (inputs.length > 1) {
      setInputs(inputs.filter((input) => input.id !== id));
    }
  };

  const updateType = (id: string, value: string) => {
    setInputs(
      inputs.map((input) =>
        input.id === id ? { ...input, type: value } : input
      )
    );
  };

  const updateDirections = (id: string, value: string) => {
    setInputs(
      inputs.map((input) =>
        input.id === id ? { ...input, directions: value } : input
      )
    );
  };

  return (
    <DropDownBig
      name="교통수단"
      checked={isChecked}
      setChecked={setIsChecked}
      isSwitchVisible={true}
    >
      <div className="flex flex-col gap-[1.25rem]">
        {inputs.map((input) => (
          <div key={input.id} className="flex items-start gap-[0.125rem]">
            <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex justify-start items-center">
              <div className="justify-start text-LumiDayGray-1e1 text-1-500 font-['Pretendard']">
                교통수단
              </div>
            </div>
            <div className="flex flex-col gap-[0.625rem]">
              <CommonInputSize
                id={`${input.id}-type`}
                type="text"
                value={input.type}
                onChange={(e) => updateType(input.id, e.target.value)}
                inputWidth={21.6875}
                placeholder="교통수단(지하철,버스,자가용 등)"
              />
              <CommonTextAreaSize
                id={`${input.id}-directions`}
                inputWidth={21.6875}
                inputHeight={4.9375}
                value={input.directions}
                onChange={(e) => updateDirections(input.id, e.target.value)}
                placeholder="오시는 길을 입력하세요."
              />
            </div>
            <div className="flex items-center justify-center w-[2.4375rem] h-[2.5rem] p-[0.25rem]">
              <div className="relative w-[1.9375rem] h-[1.9375rem]">
                <button
                  onClick={() => removeInputSet(input.id)}
                  aria-label="입력 세트 삭제"
                  className="absolute w-[1.25rem] h-[1.25rem] left-[0.1875rem] top-[0.21875rem] bg-LumiDayGray-f0f hover:bg-LumiDayGray-999-30 rounded-[0.125rem] flex items-center justify-center transition-bg duration-300 ease-in-out"
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
        ))}
        <button
          onClick={addInputSet}
          className="flex items-center justify-center w-[8.3125rem] h-[2.5rem] bg-LumiDayGray-f0f hover:bg-LumiDayGray-999-30 rounded-[0.625rem] gap-[0.5625rem] transition-bg duration-300 ease-in-out"
        >
          <Image
            src="/imgs/addBtn_plusImg.svg"
            width={13}
            height={13}
            alt="plus-img"
          />
          <span
            className="text-LumiDayGray-1e1 text-875-400"
            style={{ width: 'auto', height: 'auto' }}
          >
            교통수단 추가
          </span>
        </button>
      </div>
    </DropDownBig>
  );
}
