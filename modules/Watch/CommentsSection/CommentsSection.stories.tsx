import CommentsSection from './CommentsSection';
import { Meta, StoryObj } from '@storybook/react';
import { useStore } from '@lib/providers/GlobalStoreProvider';
import { useLayoutEffect } from 'react';

const meta:Meta<typeof CommentsSection> = {
  title: 'Watch/CommentsSection',
  component: CommentsSection,
  decorators: [
    (Story) => {
      const { authStore } = useStore();

      useLayoutEffect(() => {
        authStore.signIn();
      }, []);

      return <Story />
    }
  ]
};

export default meta;

type Story = StoryObj<typeof CommentsSection>;

export const Default:Story = {
  render: args => <CommentsSection {...args} />,
  args: {}
};
