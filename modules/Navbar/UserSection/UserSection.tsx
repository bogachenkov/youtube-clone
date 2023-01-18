import { useAuthStore } from '@lib/store';
import Avatar from '@modules/shared/Avatar';
import React from 'react';
import SignInButton from '@modules/shared/SignInButton';
import DefaultIconButton from '@modules/shared/DefaultIconButton';

interface IUserSectionProps {
  children?: React.ReactNode;
}

const UserSection:React.FC<IUserSectionProps> = (props) => {  
  const user = useAuthStore(store => store.user);

  if (user) {
    return (
      <>
        <DefaultIconButton
          size={24}
          icon='NotificationsOutlined'
          title='Not Implemented'
          disabled
        />
        <Avatar name={user.authorDisplayName} />
      </>
    )
  }

  return <SignInButton fontSize={14} />
}

export default UserSection;
