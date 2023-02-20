import VideoCardOverlay from './VideoCardOverlay';
import { Meta, StoryObj } from '@storybook/react';
import { StyledThumb, StyledVideoCard } from '../VideoCard/styled';
import { getHighResThumb } from '@lib/utils/getHighResThumb';
import VideoDuration from '../VideoDuration';
import { Default as DefaultVideoCard } from '../VideoCard/VideoCard.stories';

const meta:Meta<typeof VideoCardOverlay> = {
  title: 'Video/CardOverlay',
  component: VideoCardOverlay,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof VideoCardOverlay>;

const videoData = DefaultVideoCard.args?.video!;

export const Default:Story = {
  render: args => <VideoCardOverlay {...args} />,
  decorators: [
    (Story) => (
      <div style={{ width: 420 }}>
        <StyledVideoCard>
          <header>
            <StyledThumb
              alt={videoData.snippet.title}
              src={videoData.snippet.thumbnails.medium.url}
              fill
              sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
              placeholder='blur'
              blurDataURL={getHighResThumb(videoData.snippet.thumbnails).url}
            />
            <Story />
            <VideoDuration duration={videoData.contentDetails.duration} />
          </header>
        </StyledVideoCard>
      </div>
    )
  ],
  args: {
    likeCount: 135743,
    id: videoData.id
  }
};
