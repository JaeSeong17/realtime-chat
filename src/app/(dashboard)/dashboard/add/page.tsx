import AddFriendButton from '@/components/AddFriendButton';
import { FC } from 'react';

const page: FC = () => {
  return (
    <main className='pt-8'>
      <h1 className='font-bold text-5xl mb08'>친구 추가하기</h1>
      <AddFriendButton />
    </main>
  );
};

export default page;
