'use client';

import DropDownBig from '@/app/_components/common/DropDownBig';
import Switch from '@/app/_components/common/DropDownBIgSwitch';

export default function Home() {
  return (
    <>
      <div>
        home
        <DropDownBig name="예식 장소" isSwitchVisible={false}>
          <div>
            <div>
              <p className="text-1-500 text-LumiDayGray-1e1 ">예식장명</p>
              <input
                type="text"
                className="border p-[0.625rem] border-LumiDayGray-999 rounded-[0.3125rem]"
              />
            </div>
            <div>
              <p>층과 홀</p>
              <input type="text" />
            </div>
            <div>
              <p>주소</p>
              <div>
                <input type="text" />
                <button>검색</button>
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <div>
              <p>지도표시</p>
              <input type="checkbox" />
              지도 표시
            </div>
            <div>
              <p>지도 선택</p>
              <input type="checkbox" />
              네이버지도
              <input type="checkbox" />
              카카오 맵
              <input type="checkbox" />
              구글 맵
            </div>
          </div>
        </DropDownBig>
      </div>
    </>
  );
}
