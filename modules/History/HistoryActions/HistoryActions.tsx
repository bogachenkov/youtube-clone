import { useHistoryStore } from '@lib/store';
import Spacer from '@modules/shared/Spacer';
import React from 'react';
import HistoryActionButton from '../HistoryActionButton';

interface IHistoryActionsProps {
  children?: React.ReactNode;
}

const HistoryActions:React.FC<IHistoryActionsProps> = (props) => {
  const clearHistory = useHistoryStore(store => store.clearHistory);
  const toggleWatching = useHistoryStore(store => store.toggleWatching);
  const isWatching = useHistoryStore(store => store.isWatching);
  
  return (
    <>
      <HistoryActionButton
        icon='DeleteOutlined'
        text='Clear All Watch History'
        onClick={clearHistory}
      />
      <Spacer vertical={18} />
      <HistoryActionButton
        icon={isWatching ? 'PauseCircleOutlined' : 'PlayCircleOutlined'}
        text={`${isWatching ? 'Pause' : 'Turn on'} Watch History`}
        onClick={toggleWatching}
      />
      <Spacer vertical={18} />
      <HistoryActionButton
        icon='SettingsOutlined'
        text='Manage All History'
      />
    </>
  );
}

export default HistoryActions;
