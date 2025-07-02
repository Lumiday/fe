import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-center py-[1.5rem] bg-LumiDayGray-999">
      <div className="w-[69.5025rem] flex justify-between">
        <Image
          src="/imgs/header_logo.svg"
          alt="메인로고"
          width={111}
          height={39}
        />
        <button className="py-[0.625rem] px-[1.25rem] border border-[black]">
          로그인
        </button>
      </div>
    </div>
  );
};

export default Header;
