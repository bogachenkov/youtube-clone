import { GridViewOutlined, NotificationsOutlined, VideoCallOutlined } from '@mui/icons-material';
import React from 'react';
import Avatar from '@shared/Avatar';
import { StyledControlsSection } from './styled';
import { useAuthStore } from '@lib/store';
import Button from '@modules/shared/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface IControlsSectionProps {
  children?: React.ReactNode;
}

const ControlsSection:React.FC<IControlsSectionProps> = (props) => {
  const user = useAuthStore(store => store.user);
  const router = useRouter();

  return (
    <StyledControlsSection>
      {
        user ? <VideoCallOutlined fontSize='inherit' /> : null
      }
      <GridViewOutlined fontSize='inherit' />
      {
        user ?
        (
          <>
            <NotificationsOutlined fontSize='inherit' />
            <Avatar />
          </>
        )
        :
        <Link href={`/sign?referer=${router.asPath}`}>
          <Button>
            SIGN IN
          </Button>
        </Link>
      }
    </StyledControlsSection>
  );
}

export default ControlsSection;
