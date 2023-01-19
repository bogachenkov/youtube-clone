import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticProps, NextPage } from "next";
import HomePageVideos from "@modules/HomePageVideos";
import Container from "@shared/Container";
import { useTabs } from "@lib/hooks/useTabs";
import Tabs from "@modules/shared/Tabs";
import { CategoryTabs } from '@const/categories';
import Spacer from "@modules/shared/Spacer";
import { homeQuery } from "@const/queries";
import Head from "next/head";

interface HomePageProps {
}

const HomePage:NextPage<HomePageProps> = () => {

  const categoriesTabs = useTabs({ tabs: CategoryTabs, initialTabId: "All" });

  return (
    <div>
      <Head>
        <title>YouTube Clone</title>
      </Head>
      <Tabs {...categoriesTabs.tabProps} />
      <Spacer vertical={25} />
      <Container>
        <HomePageVideos />
      </Container>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(homeQuery);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default HomePage;