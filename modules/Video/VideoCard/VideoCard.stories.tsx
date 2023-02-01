import VideoCard from './VideoCard';
import { Meta, StoryObj } from '@storybook/react';
import { MockedVideoCollection } from 'mocks/apiResponses';

const meta:Meta<typeof VideoCard> = {
  title: 'Video/Card',
  component: VideoCard,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof VideoCard>;

export const Default:Story = {
  render: args => <VideoCard {...args} />,
  decorators: [
    (Story) => (
      <div style={{ width: 420 }}>
        <Story />
      </div>
    )
  ],
  args: {
    video: MockedVideoCollection.result[0]
  }
};