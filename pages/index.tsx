import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps, NextPage } from "next";
import VideosAPI from "@api/videos";
import HomePageVideos from "@modules/HomePageVideos";
import Container from "@shared/Container";
import { useTabs } from "@lib/hooks/useTabs";
import Tabs from "@modules/shared/Tabs";
import { CategoryTabs } from '@const/categories';
import Spacer from "@modules/shared/Spacer";

interface HomePageProps {
}

const HomePage:NextPage<HomePageProps> = () => {

  const categoriesTabs = useTabs({ tabs: CategoryTabs, initialTabId: "All" });

  return (
    <div>
      <Tabs {...categoriesTabs.tabProps} />
      <Spacer vertical={25} />
      <Container>
        <HomePageVideos />
      </Container>
    </div>
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