import { useIsRepeatable, useIsShuffled, usePlaylistAPI } from '@lib/providers/playlist-api';
import DefaultIconButton from '@modules/shared/DefaultIconButton';
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
      <DefaultIconButton
        size={24}
        icon='Shuffle'
        onClick={api.shuffle}
        theme='text'
        title={'Shuffle playlist'}
        fontColor={isShuffled ? 'var(--color-light)' : 'var(--color-grayLight)'}
        hoverable
      />
      <DefaultIconButton
        size={24}
        icon='Repeat'
        onClick={api.toggleRepeat}
        theme='text'
        fontColor={isRepeatable ? 'var(--color-light)' : 'var(--color-grayLight)'}
        title='Loop playlist'
        hoverable
      />
    </Row>
  );
}

export default PlaylistActions;
