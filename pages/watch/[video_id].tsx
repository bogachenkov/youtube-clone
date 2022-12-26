import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import VideosAPI from "@api/videos";
import YoutubeAPI from "@api/youtube";
import Container from "@shared/Container";
import Spacer from "@shared/Spacer";
import VideoInfo from "@shared/VideoInfo";
import VideoPageGrid from "@shared/VideoPageGrid";
import VideoPlayer from "@shared/VideoPlayer";
import CommentsSection from "@modules/shared/CommentsSection";

export interface UrlParams extends ParsedUrlQuery {
  video_id?: string;
};

interface VideoPageProps {
}

const api = new YoutubeAPI();

const VideoPage:NextPage<VideoPageProps> = () => {
  return (
    <VideoPageGrid>
      <Container>
        <VideoPlayer
          controls
          src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
        <Spacer vertical={32} />
        <VideoInfo />
        <Spacer vertical={20} />
        <hr style={{
          height: 3,
          border: 'none',
          background: 'var(--color-grayDark)'
        }} />
        <Spacer vertical={24} />
        <CommentsSection />
      </Container>
      <Container>
      
      </Container>
    </VideoPageGrid>
  )
}

export const getStaticPaths:GetStaticPaths = async () => {
  const videos = await VideosAPI.fetchDefaultVideos();

  return {
    paths: videos.map(video => ({
      params: { video_id: video.id }
    })),
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({
  params
}: {
  params?: UrlParams
}) => {
  if (!params?.video_id) return {
    redirect: {
      statusCode: 404,
      destination: '/',
      permanent: false
    }
  };

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['watch', params?.video_id], () => api.videoById({
    part: ['snippet', 'contentDetails', 'statistics'],
    id: [params.video_id!]
  }));

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default VideoPage;