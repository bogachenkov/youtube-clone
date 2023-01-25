import { useAuthStore } from '@lib/store';
import Avatar from '@ui/Avatar';
import React from 'react';
import SignInButton from '@ui/SignInButton';
import IconButton from '@ui/IconButton';

interface IUserSectionProps {
  children?: React.ReactNode;
}

const UserSection:React.FC<IUserSectionProps> = (props) => {  
  const user = useAuthStore(store => store.user);

  if (user) {
    return (
      <>
        <IconButton
          size={24}
          icon='NotificationsOutlined'
          title='Not Implemented'
        />
        <Avatar name={user.authorDisplayName} />
      </>
    )
  }

  return <SignInButton fontSize={14} />
}

export default UserSection;
