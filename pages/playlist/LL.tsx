import { useLikedCollection } from "@lib/hooks/useLikedCollection";
import { useStore } from "@lib/providers/GlobalStoreProvider";
import Playlist from "@modules/Playlist";
import Container from "@ui/Container";
import EmptyScreen from "@ui/EmptyScreen";
import SignInButton from "@ui/SignInButton";
import { observer } from "mobx-react-lite";
import Head from "next/head";

export default observer(function LikedVideosPage() {
  const { authStore, likesStore } = useStore();
  const { user } = authStore;
  const collection = useLikedCollection();

  if (!user) return (
    <Container>
      <Head>
        <title>Liked Videos - YouTube Clone</title>
      </Head>
      <EmptyScreen
        emojiCode="1F44D"
        title="Want To Rewatch?"
        text="Sign in to access videos thay you've liked"
      >
        <SignInButton fontSize={16} />
      </EmptyScreen>
    </Container>
  )

  if (collection.length === 0) return (
    <Container>
      <Head>
        <title>Liked Videos - YouTube Clone</title>
      </Head>
      <EmptyScreen
        emojiCode="1F44D"
        title="Want To Rewatch?"
        text="There no videos you've liked"
      />
    </Container>
  )

  return (
    <>
      <Head>
        <title>Liked Videos - YouTube Clone</title>
      </Head>
      <Playlist
        collection={collection}
        name="Liked Videos"
        lastUpdate={likesStore.lastUpdate}
      />
    </>
  )
})
