import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import VideosAPI from "@api/videos";
import YoutubeAPI from "@api/youtube";
import Container from "@shared/Container";
import Spacer from "@shared/Spacer";
import VideoInfo from "@shared/VideoInfo";
import TwoColumnGrid from "@modules/shared/TwoColumnGrid";
import VideoPlayer from "@shared/VideoPlayer";
import CommentsSection from "@modules/shared/CommentsSection";
import { useEffect } from "react";
import { useHistoryStore } from "@lib/store";
import { useVideoId } from "@lib/hooks/useVideoId";
import VideoPlaylist from "@modules/Video/VideoPlaylist";
import { homeQuery, watchQuery } from "@const/queries";

export interface UrlParams extends ParsedUrlQuery {
  video_id?: string;
};

interface VideoPageProps {
}

const api = new YoutubeAPI();

const VideoPage:NextPage<VideoPageProps> = () => {
  const addToHistory = useHistoryStore(store => store.addToHistory);
  const isWatching = useHistoryStore(store => store.isWatching);
  const id = useVideoId();

  useEffect(() => {
    if (isWatching) addToHistory!(id);
  }, [isWatching, addToHistory, id]);

  return (
    <TwoColumnGrid secondCol="445px">
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
      <VideoPlaylist />
    </TwoColumnGrid>
  )
}

export const getStaticPaths:GetStaticPaths = async () => {
  // @ts-ignore
  const videos = await homeQuery.queryFn();

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
  await queryClient.prefetchQuery(watchQuery(params.video_id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default VideoPage;