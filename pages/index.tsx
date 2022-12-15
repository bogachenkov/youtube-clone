import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetServerSideProps, NextPage } from "next";
import VideosAPI from "../lib/api/videos";
import Container from "../modules/shared/Container";
import GridContainer from "../modules/shared/GridContainer";
import VideoCard from "../modules/shared/VideoCard";

interface HomePageProps {
}

const HomePage:NextPage<HomePageProps> = () => {
  const { data } = useQuery({ queryKey: ['videos'], queryFn: VideosAPI.fetchDefaultVideos })
  return (
    <Container>
      <GridContainer>
        {
          !!data && data.map(vid => (
            <VideoCard key={vid.id} video={vid} />
          ))
        }
      </GridContainer>
    </Container>
  )
}

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