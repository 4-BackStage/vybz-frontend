'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@repo/ui/components/ui';
import ShowMoreButton from '@/components/common/button/ShowMoreButton';
import { createChatRoom } from '@/services/chat-services/chat-create-services';

export default function FollowingBuskerBox({
  userUuid,
  buskerName,
  buskerId,
  buskerProfileImage,
  isMenuOpen,
  onMenuToggle,
}: {
  userUuid: string;
  buskerName: string;
  buskerId: string;
  buskerProfileImage: string;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}) {
  return (
    <div className="flex space-x-4 items-center text-center text-white">
      <div className="relative w-12 h-12 shrink-0">
        <Image
          src={buskerProfileImage || '/defaultProfile.png'}
          alt="Busker"
          fill
          sizes="48px"
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="flex-1 truncate overflow-hidden whitespace-nowrap text-lg font-semibold">
        {buskerName}
      </h3>
      <Link href={`/chat/list`} className="flex-1">
        <Button
          className="w-full bg-div-background font-semibold"
          onClick={async () => await createChatRoom(buskerId, userUuid)}
        >
          메세지 보내기
        </Button>
      </Link>
      <ShowMoreButton
        buskerId={buskerId}
        isOpen={isMenuOpen}
        onToggle={onMenuToggle}
      />
    </div>
  );
}
