import { exploreQuery } from "@const/queries";
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
  // await queryClient.prefetchQuery(exploreQuery);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
