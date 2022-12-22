import { useSubscriptionsStore } from '@lib/store';
import Button from '@modules/shared/Button';
import { useRouter } from 'next/router';
import React from 'react';

interface ISubscribeButtonProps {
  children?: React.ReactNode;
}

const SubscribeButton:React.FC<ISubscribeButtonProps> = (props) => {
  const { query: {video_id} } = useRouter();
  const { subscriptions, toggleSubscription } = useSubscriptionsStore();

  const isSubscribed = subscriptions.includes(video_id as string);

  return (
    <Button 
      theme={isSubscribed ? 'secondary' : 'primary'}
      onClick={() => toggleSubscription(video_id as string)}
    >
      SUBSCRIBE{isSubscribed ? 'D' : ''}
    </Button>
  );
}

export default SubscribeButton;
