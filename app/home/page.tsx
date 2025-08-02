'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrag, useDrop } from 'react-dnd';
import ThemeDropdown from '../components/custom/theme_dropdown/Theme_Dropdown';
import BasicInfoDropdown from '../components/custom/basic_info_dropdown/Basic_Info_Dropdown';
import Wedding_Date_Dropdown from '../components/custom/wedding_date_dropdown/Wedding_Date_Dropdown';
import Wedding_Venue_Dropdown from '../components/custom/wedding_venue_dropdown/Wedding_Venue_Dropdown';
import Notice_Dropdown from '../components/custom/notice_dropdown/Notice_Dropdown';
import BackgroundMusicDropdown from '../components/custom/background_music_dropdown/Background_Music_Dropdown';
import { AccountInfoDropdown } from '../components/custom/account_info_dropdown/Account_Info_Dropdown';
import { TransportationDropdown } from '../components/custom/transportaion_dropdown/Transportation_Dropdown';
import GalleryDropdown from '../components/custom/gallery_dropdown/Gallery_Dropdown';
import RSVPDropdown from '../components/custom/rsvp_Dropdown/RSVP_Dropdown';
import EndingDropdown from '../components/custom/ending_dropdown/Ending_Dropdown';

// 설정 항목의 타입 정의
type SettingsItem = {
  id: string;
  component: React.ComponentType;
  name: string;
};

// 드래그 앤 드롭 항목 타입 정의
const ItemTypes = {
  SETTINGS_ITEM: 'settingsItem',
};

// 드래그 가능한 설정 항목 컴포넌트의 Props 인터페이스
interface DraggableSettingsItemProps {
  item: SettingsItem;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  isReorderMode: boolean; // 드래그/드롭 제어를 위한 prop
  children: React.ReactNode;
}

// 드래그 가능한 설정 항목 컴포넌트
function DraggableSettingsItem({
  item,
  index,
  moveItem,
  isReorderMode,
  children,
}: DraggableSettingsItemProps) {
  // 드래그 상태 관리
  const [{ isDragging }, dragRef] = useDrag({
    type: ItemTypes.SETTINGS_ITEM,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: isReorderMode, // 드래그 가능 여부 조건부 설정
  });

  // 드롭 대상 설정
  const [, dropRef] = useDrop({
    accept: ItemTypes.SETTINGS_ITEM,
    hover: (draggedItem: { index: number }) => {
      if (!isReorderMode) return; // 호버 로직 조건부 허용
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  // 드래그 및 드롭 참조를 항상 연결하되, 활성화 여부는 조건부
  const setRef = (node: HTMLDivElement | null) => {
    dragRef(node);
    dropRef(node);
  };

  return (
    <div
      ref={setRef}
      className={`flex items-center w-full ${
        isDragging && isReorderMode ? 'opacity-50' : 'opacity-100'
      } transition-opacity`}
    >
      {/* 드래그 핸들 조건부 표시 */}
      {isReorderMode && (
        <div className="cursor-grab active:cursor-grabbing hover:opacity-70 transition-opacity">
          <Image
            src="/imgs/drag_handle.svg"
            alt="드래그 핸들"
            width={20}
            height={20}
          />
        </div>
      )}
      <div className="flex-1">{children}</div>
    </div>
  );
}

// 홈 페이지 컴포넌트
export default function HomePage() {
  // 순서 변경 모드 상태
  const [isReorderMode, setIsReorderMode] = useState<boolean>(false);

  // 설정 항목 목록 상태
  const [settingsItems, setSettingsItems] = useState<SettingsItem[]>([
    { id: 'theme', component: ThemeDropdown, name: '테마 설정' },
    { id: 'basic-info', component: BasicInfoDropdown, name: '기본 정보' },
    { id: 'wedding-date', component: Wedding_Date_Dropdown, name: '웨딩 날짜' },
    {
      id: 'wedding-venue',
      component: Wedding_Venue_Dropdown,
      name: '웨딩 장소',
    },
    { id: 'notice', component: Notice_Dropdown, name: '공지사항' },
    {
      id: 'background-music',
      component: BackgroundMusicDropdown,
      name: '배경음악',
    },
    {
      id: 'transportation',
      component: TransportationDropdown,
      name: '교통정보',
    },
    { id: 'account-info', component: AccountInfoDropdown, name: '계좌정보' },
    { id: 'gallery', component: GalleryDropdown, name: '갤러리' },
    { id: 'rsvp', component: RSVPDropdown, name: 'RSVP' },
    { id: 'ending', component: EndingDropdown, name: '엔딩' },
  ]);

  // 항목 순서 변경 함수
  const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
    setSettingsItems((prevItems) => {
      const newItems = [...prevItems];
      const draggedItem = newItems[dragIndex];
      newItems.splice(dragIndex, 1);
      newItems.splice(hoverIndex, 0, draggedItem);
      return newItems;
    });
  }, []);

  // 순서 변경 모드 토글 함수
  const toggleReorderMode = (): void => {
    setIsReorderMode(!isReorderMode);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen w-screen bg-LumiDayGray-f0f">
        <div className="flex justify-center pt-[1.5625rem] gap-[1.25rem]">
          {/* 모바일 프레임 */}
          <div className="w-[24.5625rem] h-[53.25rem] bg-white rounded-[0.625rem] border border-LumiDayGray-999" />

          {/* 오른쪽 설정 패널 */}
          <div className="w-[37.4375rem] flex flex-col justify-start items-end gap-[1.25rem]">
            {/* 순서변환 헤더 */}
            <div
              className={`flex justify-start items-center gap-[0.625rem] cursor-pointer hover:opacity-70 transition-opacity ${isReorderMode ? 'opacity-70' : ''}`}
              onClick={toggleReorderMode}
            >
              <Image
                src="/imgs/drag_handle.svg"
                alt="드래그 핸들"
                width={20}
                height={20}
              />
              <div className="flex text-LumiDayGray-1e1 text-[1.25rem] font-['Pretendard'] text-125-500">
                순서변환
              </div>
            </div>

            {/* 설정 항목들 */}
            <div className="flex flex-col gap-[1.25rem] w-full">
              {settingsItems.map((item, index) => {
                const Component = item.component;

                return (
                  <div key={item.id} className="w-full">
                    <DraggableSettingsItem
                      item={item}
                      index={index}
                      moveItem={moveItem}
                      isReorderMode={isReorderMode}
                    >
                      <Component />
                    </DraggableSettingsItem>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
