import { useAuthStore } from "@lib/store";
import Library from "@modules/Library";
import Container from "@ui/Container";
import EmptyScreen from "@ui/EmptyScreen";
import SignInButton from "@ui/SignInButton";
import Head from "next/head";

export default function LibraryPage() {
  const user = useAuthStore(store => store.user);

  if (!user) return (
    <Container>
      <Head>
        <title>Library - YouTube Clone</title>
      </Head>
      <EmptyScreen
        emojiCode="1F631"
        title="Enjoy Your Favorite Videos"
        text="Sign in to access videos thay you've liked or saved"
      >
        <SignInButton fontSize={16} />
      </EmptyScreen>
    </Container>
  )

  return (
    <>
      <Head>
        <title>Library - YouTube Clone</title>
      </Head>
      <Library />
    </>)
}
