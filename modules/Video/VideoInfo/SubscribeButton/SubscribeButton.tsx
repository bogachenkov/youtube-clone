import { useSubscriptionsStore } from '@lib/store';
import Button, { IButtonProps } from '@modules/shared/Button';
import React from 'react';

interface ISubscribeButtonProps extends IButtonProps {
  children?: React.ReactNode;
  id: string;
}

const SubscribeButton:React.FC<ISubscribeButtonProps> = ({
  id,
  ...props
}) => {
  const subscriptions = useSubscriptionsStore(store => store.subscriptions);
  const toggleSubscription = useSubscriptionsStore(store => store.toggleSubscription);

  const isSubscribed = subscriptions.includes(id as string);

  return (
    <Button 
      theme={isSubscribed ? 'secondary' : 'primary'}
      onClick={() => toggleSubscription(id as string)}
      {...props}
    >
      SUBSCRIBE{isSubscribed ? 'D' : ''}
    </Button>
  );
}

export default SubscribeButton;
