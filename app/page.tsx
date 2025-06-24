'use client';

import BasicInfoDropdown from '@/app/_components/basic_info_dropdown/Basic_Info_Dropdown';
import Gallery_Dropdown from '@/app/_components/gallery_dropdown/Gallery_Dropdown';
import Notice_Dropdown from '@/app/_components/notice_dropdown/Notice_Dropdown';

export default function Home() {
  return (
    <>
      <div>
        <Notice_Dropdown />
        <BasicInfoDropdown />
        <Gallery_Dropdown />
      </div>
    </>
  );
}
