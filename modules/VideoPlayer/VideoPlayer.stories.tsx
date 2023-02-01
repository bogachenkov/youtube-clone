import VideoPlayer from './VideoPlayer';
import { Meta, StoryObj } from '@storybook/react';
import { PlayerDataProvider } from '@lib/providers/player-api';

const meta:Meta<typeof VideoPlayer> = {
  title: 'VideoPlayer',
  component: VideoPlayer,
  decorators: [
    (Story) => (
      <PlayerDataProvider>
        <Story />
      </PlayerDataProvider>
    )
  ],
  args: {
    // controls
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  }
};

export default meta;

type Story = StoryObj<typeof VideoPlayer>;

export const Default:Story = {
  render: args => <VideoPlayer {...args} />,
  args: {}
};
