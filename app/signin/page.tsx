import Image from 'next/image';

export default function page() {
  return (
    <div className="flex">
      <div className="w-[40.25rem]"></div>
      <div className="flex flex-col items-center justify-center gap-[3.12rem] h-screen w-[28.875rem] ml-[7.06rem] ">
        <h1 className="text-[2.1875rem] font-[700] text-LumiDayGray-333 text-center">
          온라인 청첩장 서비스
          <br />
          <span>Lumiday</span>에 온 것을 환영합니다!
        </h1>
        <p className="text-1-400 text-LumiDayGray-1e1">
          네이버계정으로 간편하게 가입하고 나만의 모바일 청첩장을 제작하세요!
        </p>
        <button
          type="button"
          className="flex justify-between gap-[0.625rem] text-[1.25rem] font-[600] text-[#fff] py-[0.8125rem] px-[1.875rem] bg-[#03C75A] rounded-[0.625rem]"
        >
          <Image
            src="/imgs/naver.icon.svg"
            alt="naver"
            width={16}
            height={16}
          />
          네이버 계정으로 로그인
        </button>
      </div>
    </div>
  );
}
