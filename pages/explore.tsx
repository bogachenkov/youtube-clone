import { exploreQuery } from "@const/queries";
import VideosAPI from "@lib/api/videos";
import Explore from "@modules/Explore";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

export default function ExplorePage() {
  return (
    <Explore />
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    [exploreQuery.key],
    () => VideosAPI.fetch(exploreQuery.config)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
