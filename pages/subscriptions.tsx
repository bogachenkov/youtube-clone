import { useAuthStore } from "@lib/store";
import Container from "@ui/Container";
import EmptyScreen from "@ui/EmptyScreen";
import SignInButton from "@ui/SignInButton";
import Subscriptions from "@modules/Subscriptions";
import Head from "next/head";

export default function SubscriptionsPage() {
  const user = useAuthStore(store => store.user);

  if (!user) return (
    <Container>
      <Head>
        <title>Subscriptions - YouTube Clone</title>
      </Head>
      <EmptyScreen
        emojiCode="1F62D"
        title="Don't Miss New Videos"
        text="Sign in to see updates from your favorite YouTube channels"
      >
        <SignInButton fontSize={16} />
      </EmptyScreen>
    </Container>
  );

  return (
    <>
      <Head>
        <title>Subscriptions - YouTube Clone</title>
      </Head>
      <Subscriptions />
    </>
  )
}