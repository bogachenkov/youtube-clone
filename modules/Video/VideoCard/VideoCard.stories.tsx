import VideoCard from './VideoCard';
import { Meta, StoryObj } from '@storybook/react';
import { MockedVideoCollection } from 'mocks/apiResponses';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta:Meta<typeof VideoCard> = {
  title: 'Video/Card',
  component: VideoCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 420 }}>
        <Story />
      </div>
    )
  ],
};

export default meta;

type Story = StoryObj<typeof VideoCard>;

export const Default:Story = {
  render: args => <VideoCard {...args} />,
  args: {
    video: MockedVideoCollection.result[0]
  }
};


Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const cardHeader = await canvas.findByTestId('video-card-header');

  await userEvent.hover(cardHeader);

  const cardHover = await canvas.findByTestId('video-card-overlay');
  await expect(cardHover).toBeInTheDocument();
}
