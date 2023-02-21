import VideoPlaylist from './VideoPlaylist';
import { Meta, StoryObj } from '@storybook/react';
import { PlaylistDataProvider } from '@lib/providers/playlist-api';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta:Meta<typeof VideoPlaylist> = {
  title: 'Watch/VideoPlaylist',
  component: VideoPlaylist,
  render: args => <VideoPlaylist {...args} />,
  decorators: [
    (Story) => (
      <PlaylistDataProvider>
        <Story />
      </PlaylistDataProvider>
    )
  ],
};

export default meta;

type Story = StoryObj<typeof VideoPlaylist>;

export const Default:Story = {
  args: {}
};

export const ShufflePlaylist:Story = {
  play: async ({ canvasElement }) => {
    const canvas = await within(canvasElement);

    const shuffleButton = await canvas.findByTestId('shuffle-button');

    await expect(shuffleButton.getAttribute('data-shuffled')).toBe("false");
    await userEvent.click(shuffleButton);
    await expect(shuffleButton.getAttribute('data-shuffled')).toBe("true");
  }
}

export const RepeatPlaylist:Story = {
  play: async ({ canvasElement }) => {
    const canvas = await within(canvasElement);

    const repeatButton = await canvas.findByTestId('repeat-button');

    await expect(repeatButton.getAttribute('data-repeatable')).toBe("false");
    await userEvent.click(repeatButton);
    await expect(repeatButton.getAttribute('data-repeatable')).toBe("true");
  }
}