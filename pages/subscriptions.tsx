import { homeQuery } from "@const/queries";
import { useAuthStore } from "@lib/store";
import Container from "@modules/shared/Container";
import EmptyScreen from "@modules/shared/EmptyScreen";
import SignInButton from "@modules/shared/SignInButton";
import Subscriptions from "@modules/Subscriptions";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticProps } from "next";

export default function SubscriptionsPage() {
  const user = useAuthStore(store => store.user);

  if (!user) return (
    <Container>
      <EmptyScreen
        emojiCode="1F62D"
        title="Don't Miss New Videos"
        text="Sign in to see updates from your favorite YouTube channels"
      >
        <SignInButton fontSize={16} />
      </EmptyScreen>
    </Container>
  );

  return <Subscriptions />
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