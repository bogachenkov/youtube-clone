import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps, NextPage } from "next";
import VideosAPI from "@api/videos";
import HomePageVideos from "@modules/HomePageVideos";
import Container from "@shared/Container";

interface HomePageProps {
}

const HomePage:NextPage<HomePageProps> = () => {
  return (
    <Container>
      <HomePageVideos />
    </Container>
  )
}

// TODO: This one breaks the Vercel's serverless function down (timeout)

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['videos'], VideosAPI.fetchDefaultVideos);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default HomePage;