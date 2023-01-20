import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";
import { useHistoryStore } from "@lib/store";
import { useVideoId } from "@lib/hooks/useVideoId";
import { homeQuery, watchQuery } from "@const/queries";
import Watch from "@modules/Watch";

export interface UrlParams extends ParsedUrlQuery {
  video_id?: string;
};

interface VideoPageProps {
}

const VideoPage:NextPage<VideoPageProps> = () => {
  const addToHistory = useHistoryStore(store => store.addToHistory);
  const isWatching = useHistoryStore(store => store.isWatching);
  const id = useVideoId();

  useEffect(() => {
    if (isWatching) addToHistory!(id);
  }, [isWatching, addToHistory, id]);

  return <Watch />
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