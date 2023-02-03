import VideoPlayer from './VideoPlayer';
import { Meta, StoryObj } from '@storybook/react';
import { PlayerDataProvider } from '@lib/providers/player-api';

const meta:Meta<typeof VideoPlayer> = {
  title: 'VideoPlayer/VideoPlayer',
  component: VideoPlayer,
  decorators: [
    (Story) => (
      <PlayerDataProvider>
        <div style={{
          width: '100%',
          maxWidth: 1000,
          margin: '0 auto'
        }}>
          <Story />
        </div>
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
  args: {

  }
};
