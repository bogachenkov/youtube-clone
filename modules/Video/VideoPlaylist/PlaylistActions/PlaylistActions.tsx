import { useIsRepeatable, useIsShuffled, usePlaylistAPI } from '@lib/providers/playlist-api';
import Button from '@modules/shared/Button';
import IconWrapper from '@modules/shared/IconWrapper';
import Row from '@modules/shared/Row';
import React from 'react';

interface IPlaylistActionsProps {
  children?: React.ReactNode;
}

const PlaylistActions:React.FC<IPlaylistActionsProps> = () => {
  const api = usePlaylistAPI();
  const isShuffled = useIsShuffled();
  const isRepeatable = useIsRepeatable();

  return (
    <Row gap={20}>
      <Button
        onClick={api.shuffle}
        theme='text'
        fontColor={isShuffled ? 'var(--color-light)' : 'var(--color-grayLight)'}
        hoverable
      >
        <IconWrapper size={24} icon='Shuffle' />
      </Button>
      <Button
        onClick={api.toggleRepeat}
        theme='text'
        fontColor={isRepeatable ? 'var(--color-light)' : 'var(--color-grayLight)'}
        hoverable>
        <IconWrapper size={24} icon='Repeat' />
      </Button>
    </Row>
  );
}

export default PlaylistActions;
