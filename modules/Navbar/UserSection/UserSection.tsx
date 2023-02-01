import { useAuthStore } from '@lib/store';
import Avatar from '@ui/Avatar';
import React from 'react';
import SignInButton from '@ui/SignInButton';
import IconButton from '@ui/IconButton';
import { User } from '@ts-types/User';

interface IUserSectionProps {
  children?: React.ReactNode;
  mockedUser?: User | null;
}

const UserSection:React.FC<IUserSectionProps> = ({
  mockedUser
}) => {
  const storeUser = useAuthStore(store => store.user);

  const user = mockedUser !== undefined ? mockedUser : storeUser;

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
