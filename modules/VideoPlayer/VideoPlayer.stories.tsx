import VideoPlayer from './VideoPlayer';
import { Meta, StoryObj } from '@storybook/react';
import { PlayerDataProvider } from '@lib/providers/player-api';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';

const meta:Meta<typeof VideoPlayer> = {
  title: 'VideoPlayer/VideoPlayer',
  component: VideoPlayer,
  render: args => <VideoPlayer {...args} />,
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
    autoPlay: false,
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  }
};

export default meta;

type Story = StoryObj<typeof VideoPlayer>;

const onLoadMock = jest.fn();

export const Default:Story = {
  args: {
  }
};

export const TogglePause:Story = {
  args: {
    onLoadedData: onLoadMock
  }
}

TogglePause.play = async ({ canvasElement }) => {
  const canvas = await within(canvasElement);

  const videoElement = await canvas.findByTestId('video-element') as HTMLVideoElement;
  const playButton = await canvas.findByTestId('play-button');

  await waitFor(() => {
    expect(onLoadMock).toHaveBeenCalled();
  }, { timeout: 5000 });

  await expect(videoElement.paused).not.toBeTruthy();
  await userEvent.click(playButton);
  await expect(videoElement.paused).toBeTruthy();
}

export const Unmute:Story = {
  args: {
    onLoadedData: onLoadMock
  }
}

Unmute.play = async ({ canvasElement }) => {
  const canvas = await within(canvasElement);

  const muteButton = await canvas.findByTestId('mute-button');
  const videoElement = await canvas.findByTestId('video-element') as HTMLVideoElement;

  await waitFor(() => {
    expect(onLoadMock).toHaveBeenCalled();
  }, { timeout: 5000 });

  await userEvent.click(muteButton);
  await expect(videoElement.muted).not.toBeTruthy();
}
