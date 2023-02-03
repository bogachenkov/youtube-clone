import VideoControls from './VideoControls';
import { Meta, StoryObj } from '@storybook/react';
import { PlayerDataProvider } from '@lib/providers/player-api';
import { VideoControlsStoryWrapper } from './styled';

const meta:Meta<typeof VideoControls> = {
  title: 'VideoPlayer/VideoControls',
  component: VideoControls,
  decorators: [
    (Story) => (
      <PlayerDataProvider>
        <VideoControlsStoryWrapper>
          <Story />
        </VideoControlsStoryWrapper>
      </PlayerDataProvider>
    )
  ],
};

export default meta;

type Story = StoryObj<typeof VideoControls>;

export const Default:Story = {
  render: args => <VideoControls {...args} />,
  args: {}
};
