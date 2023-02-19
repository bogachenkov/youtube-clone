import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticProps, NextPage } from "next";
import { homeQuery } from "@const/queries";
import Head from "next/head";
import Home from "@modules/Home";

interface HomePageProps {
}

const HomePage:NextPage<HomePageProps> = () => {
  return (
    <div>
      <Head>
        <title>YouTube Clone</title>
      </Head>
      <Home />
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