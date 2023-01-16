import { homeQuery } from "@const/queries";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic"

// import History from "@modules/History";
const History = dynamic(() => import('@modules/History'), { ssr: false })

export default function HistoryPage() {
  return (
    <History />
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