import Library from './Library';
import { Meta, StoryObj } from '@storybook/react';
import { useMockedLibraryTabs } from 'mocks/libraryTabs';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta:Meta<typeof Library> = {
  title: 'Library/Library',
  component: Library,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Library>;

export const Default:Story = {
  decorators: [
    (Story) => {
      const tabs = useMockedLibraryTabs();
      return <Story mockedTabs={tabs} />
    }
  ],
  render: (_, context) => <Library mockedTabs={context.mockedTabs} />
};


Default.play = async ({ canvasElement }) => {
  const canvas = await within(canvasElement);

  const playlistTab = await canvas.findByText('Playlists');
  await userEvent.click(playlistTab);
  const playlistTitle = await canvas.findByRole('heading', { name: 'Demo Playlist' });
  await expect(playlistTitle).toBeInTheDocument();

  const likedVideosTab = await canvas.findByText('Liked Videos');
  await userEvent.click(likedVideosTab);
  const likedVideosTitle = await canvas.findByRole('heading', { name: 'Liked Videos' });
  await expect(likedVideosTitle).toBeInTheDocument();
}