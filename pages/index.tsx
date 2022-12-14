import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetServerSideProps, NextPage } from "next";
import { getVideos } from "../lib/queries/getVideos";
import Container from "../modules/shared/Container";
import GridContainer from "../modules/shared/GridContainer";
import VideoCard from "../modules/shared/VideoCard";

interface HomePageProps {
}

const HomePage:NextPage<HomePageProps> = () => {
  const { data } = useQuery({ queryKey: ['videos'], queryFn: getVideos })
  return (
    <Container>
      <GridContainer>
        {
          !!data && data.map(vid => (
            // <video key={vid.title} src={vid.source} poster={vid.thumb} controls>
            //   Sorry
            // </video>
            <VideoCard key={vid.id} video={vid} />
          ))
        }
      </GridContainer>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['videos'], getVideos);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default HomePage;