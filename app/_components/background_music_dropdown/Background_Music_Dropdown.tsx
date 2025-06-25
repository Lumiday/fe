import React, { useState, useRef, useEffect } from 'react';
import { Info, Upload, X } from 'lucide-react';
import { AudioPlayer } from './AudioPlayer';
import { MusicFileProps } from '@/type/components';
import DropDownBig from '../common/DropDownBig';
import { CheckBoxWithLabel } from '../common/CheckBoxWithLabel';
import Image from 'next/image';

export default function BackgroundMusicDropdown() {
  const [isBackgroundMusicEnabled, setIsBackgroundMusicEnabled] =
    useState(true);
  const [selectedMusic, setSelectedMusic] = useState('');
  const [autoPlay, setAutoPlay] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<MusicFileProps[]>([]);
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const defaultMusic: MusicFileProps[] = [
    { id: 'default1', name: '어쩌구저쩌구', src: null },
    { id: 'default2', name: '어쩌구저쩌구', src: null },
    { id: 'default3', name: '어쩌구저쩌구', src: null },
    { id: 'default4', name: '어쩌구저쩌구', src: null },
    { id: 'default5', name: '어쩌구저쩌구', src: null },
  ];

  // 오디오 엘리먼트 생성 및 관리
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.addEventListener('ended', () => {
      setIsPlaying(false);
      setCurrentPlaying(null);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // 파일 업로드 처리
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);

    files.forEach((file) => {
      // 파일 유효성 검사
      if (!file.type.includes('audio/')) {
        alert('오디오 파일만 업로드 가능합니다.');
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        // 10MB
        alert('파일 크기는 10MB 이하여야 합니다.');
        return;
      }

      const fileURL = URL.createObjectURL(file);
      const newFile: MusicFileProps = {
        id: `uploaded_${Date.now()}_${Math.random()}`,
        name: file.name.replace(/\.[^/.]+$/, ''), // 확장자 제거
        src: fileURL,
        file: file,
      };

      setUploadedFiles((prev) => [...prev, newFile]);
    });

    // 파일 입력 초기화
    if (event.target) {
      event.target.value = '';
    }
  };

  // 파일 삭제
  const removeUploadedFile = (fileId: string) => {
    setUploadedFiles((prev) => {
      const fileToRemove = prev.find((f) => f.id === fileId);
      if (fileToRemove && fileToRemove.src) {
        URL.revokeObjectURL(fileToRemove.src);
      }
      return prev.filter((f) => f.id !== fileId);
    });

    if (currentPlaying === fileId) {
      audioRef.current?.pause();
      setIsPlaying(false);
      setCurrentPlaying(null);
    }

    if (selectedMusic === fileId) {
      setSelectedMusic('');
    }
  };

  // 음악 재생/일시정지
  const handlePlayPause = (musicId: string, musicSrc: string | null) => {
    if (!musicSrc) {
      alert('이 음원은 재생할 수 없습니다.');
      return;
    }

    if (currentPlaying === musicId && isPlaying) {
      // 현재 재생 중인 음악 일시정지
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      // 다른 음악 재생 또는 일시정지된 음악 재생
      if (currentPlaying !== musicId) {
        audioRef.current!.src = musicSrc;
        setCurrentPlaying(musicId);
      }

      audioRef.current
        ?.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error('재생 오류:', error);
          alert('음악을 재생할 수 없습니다.');
        });
    }
  };

  // 라디오 버튼 선택 (하나만 선택되도록)
  const handleMusicSelection = (musicId: string) => {
    // 이미 선택된 음악을 다시 클릭하면 선택 해제
    if (selectedMusic === musicId) {
      setSelectedMusic('');
    } else {
      setSelectedMusic(musicId);
    }
  };

  // 파일 업로드 버튼 클릭
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <DropDownBig
      name="배경음악"
      checked={isBackgroundMusicEnabled}
      setChecked={setIsBackgroundMusicEnabled}
      isSwitchVisible={true}
    >
      {/* 기본 음원 섹션 */}
      <div className="flex items-start gap-[0.125rem]">
        <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex items-center">
          <div className="text-1-500 text-LumiDayGray-1e1">기본 음원</div>
        </div>
        <div className="flex flex-col">
          {defaultMusic.map((music) => (
            <div
              key={music.id}
              className="h-[2.5rem] flex items-center justify-start gap-[0.3125rem]"
            >
              <CheckBoxWithLabel
                checked={selectedMusic === music.id}
                onChange={() => handleMusicSelection(music.id)}
                label={music.name}
              />
              <AudioPlayer
                src={music.src}
                isPlaying={currentPlaying === music.id && isPlaying}
                onPlayPause={() => handlePlayPause(music.id, music.src)}
                disabled={!music.src}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 나의 음원 섹션 */}
      <div className="flex items-start gap-[0.125rem]">
        <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex items-center">
          <div className="text-1-500 text-LumiDayGray-1e1">나의 음원</div>
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          {/* 파일 업로드 버튼 */}
          <div
            className="w-[6.0625rem] h-[2.5rem] p-[0.625rem] bg-LumiDayGray-f0f hover:bg-LumiDayGray-999-30 rounded-[0.3125rem] flex items-center gap-[0.3125rem] cursor-pointer transition-colors"
            onClick={handleUploadClick}
          >
            <div className="text-LumiDayGray-1e1 text-875-400">
              + 파일 업로드
            </div>
          </div>

          {/* 업로드된 파일 목록 */}
          <div>
            {uploadedFiles.map((file) => (
              <div
                key={file.id}
                className="h-[2.5rem] flex items-center gap-[0.3125rem]"
              >
                <CheckBoxWithLabel
                  checked={selectedMusic === file.id}
                  onChange={() => handleMusicSelection(file.id)}
                  label={file.name}
                />
                <AudioPlayer
                  src={file.src}
                  isPlaying={currentPlaying === file.id && isPlaying}
                  onPlayPause={() => handlePlayPause(file.id, file.src)}
                />
                <button
                  onClick={() => removeUploadedFile(file.id)}
                  className="w-[1rem] h-[1rem] flex items-center justify-center text-red-500 hover:text-red-700 transition-colors"
                >
                  <X className="w-[0.75rem] h-[0.75rem]" />
                </button>
              </div>
            ))}
          </div>

          {/* 숨겨진 파일 입력 */}
          <input
            ref={fileInputRef}
            type="file"
            accept="audio/mp3,audio/wav,audio/mpeg"
            multiple
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* 자동 재생 섹션 */}
      <div className="flex items-center gap-[0.125rem]">
        <div className="w-[6.25rem] h-[2.5rem] px-[0.25rem] py-[0.4375rem] flex items-center">
          <div className="text-1-500 text-LumiDayGray-1e1">자동 재생</div>
        </div>
        <CheckBoxWithLabel
          checked={autoPlay}
          onChange={() => setAutoPlay(!autoPlay)}
          label="카카오톡 브라우저에서만 지원됩니다."
        />
      </div>

      {/* 하단 구분선 */}
      <div className="w-full h-[0.0625rem] bg-LumiDayGray-f0f" />

      {/* 안내 문구 */}
      <div className="flex items-center gap-[0.3125rem]">
        <Image
          src={'/imgs/Info.svg'}
          alt="Info"
          width={20}
          height={20}
          className="object-contain"
        />
        <div className="text-LumiDayGray-999 text-1-500">
          음악 파일은 최대 10mb이고, wav,mp3형식의 파일만 지원됩니다.
        </div>
      </div>
    </DropDownBig>
  );
}
