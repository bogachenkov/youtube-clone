import { useAuthStore } from '@lib/store';
import Avatar from '@modules/shared/Avatar';
import Link from 'next/link';
import React from 'react';
import {} from './styled';
import Button from '@modules/shared/Button';
import { useSignIn } from '@lib/hooks/useSignInPush';
import IconWrapper from '@modules/shared/IconWrapper';

interface IUserSectionProps {
  children?: React.ReactNode;
}

const UserSection:React.FC<IUserSectionProps> = (props) => {  
  const user = useAuthStore(store => store.user);
  const { path } = useSignIn();

  if (user) {
    return (
      <>
        <IconWrapper icon='NotificationsOutlined' />
        <Avatar src={user.authorProfileImageUrl} />
      </>
    )
  }

  return (
    <Link href={path}>
      <Button>
        SIGN IN
      </Button>
    </Link>
  )
}

export default UserSection;
