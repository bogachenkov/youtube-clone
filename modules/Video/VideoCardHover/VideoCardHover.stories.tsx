import VideoCardHover from './VideoCardHover';
import { Meta, StoryObj } from '@storybook/react';
import { StyledThumb, StyledVideoCard } from '../VideoCard/styled';
import { getHighResThumb } from '@lib/utils/getHighResThumb';
import { MockedVideo } from 'mocks/apiResponses';
import VideoDuration from '../VideoDuration';

const meta:Meta<typeof VideoCardHover> = {
  title: 'Video/CardHover',
  component: VideoCardHover,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof VideoCardHover>;

const videoData = MockedVideo.items[0];

export const Default:Story = {
  render: args => <VideoCardHover {...args} />,
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
