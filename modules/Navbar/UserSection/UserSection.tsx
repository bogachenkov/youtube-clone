import { useAuthStore } from '@lib/store';
import { NotificationsOutlined } from '@mui/icons-material';
import Avatar from '@modules/shared/Avatar';
import Link from 'next/link';
import React from 'react';
import {} from './styled';
import Button from '@modules/shared/Button';
import { useSignIn } from '@lib/hooks/useSignInPush';

interface IUserSectionProps {
  children?: React.ReactNode;
}

const UserSection:React.FC<IUserSectionProps> = (props) => {  
  const user = useAuthStore(store => store.user);
  const { path } = useSignIn();

  if (user) {
    return (
      <>
        <NotificationsOutlined fontSize='inherit' />
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
