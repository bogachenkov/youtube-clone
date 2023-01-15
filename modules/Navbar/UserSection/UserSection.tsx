import { useAuthStore } from '@lib/store';
import Avatar from '@modules/shared/Avatar';
import React from 'react';
import IconWrapper from '@modules/shared/IconWrapper';
import SignInButton from '@modules/shared/SignInButton';

interface IUserSectionProps {
  children?: React.ReactNode;
}

const UserSection:React.FC<IUserSectionProps> = (props) => {  
  const user = useAuthStore(store => store.user);

  if (user) {
    return (
      <>
        <IconWrapper icon='NotificationsOutlined' />
        <Avatar name={user.authorDisplayName} />
      </>
    )
  }

  return <SignInButton fontSize={14} />
}

export default UserSection;
