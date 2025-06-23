import React from 'react';
import Image from 'next/image';
import { AudioPlayerProps } from '@/type/components';

export const AudioPlayer = ({
  src,
  isPlaying,
  onPlayPause,
  disabled = false,
}: AudioPlayerProps) => {
  return (
    <div
      onClick={onPlayPause}
      className={`w-[1rem] h-[1rem] bg-LumiDayGray-999 rounded-full flex justify-center items-center cursor-pointer transition-colors ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-LumiDayGray-333'
      }`}
    >
      <Image
        src={isPlaying ? '/imgs/pause.svg' : '/imgs/play.svg'}
        alt={isPlaying ? 'Pause' : 'Play'}
        width={7}
        height={7}
        className="object-contain"
      />
    </div>
  );
};
