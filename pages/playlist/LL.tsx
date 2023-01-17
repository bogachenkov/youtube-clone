import { useLikedCollection } from "@lib/hooks/useLikedCollection";
import { useAuthStore, useLikesStore } from "@lib/store";
import Playlist from "@modules/Playlist";
import Container from "@modules/shared/Container";
import EmptyScreen from "@modules/shared/EmptyScreen";
import SignInButton from "@modules/shared/SignInButton";

export default function LikedVideosPage() {
  const user = useAuthStore(store => store.user);
  const lastUpdate = useLikesStore(store => store.lastUpdate);
  const collection = useLikedCollection();

  if (!user) return (
    <Container>
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
      <EmptyScreen
        emojiCode="1F44D"
        title="Want To Rewatch?"
        text="There no videos you've liked"
      />
    </Container>
  )

  return (
    <Playlist
      collection={collection}
      name="Liked Videos"
      lastUpdate={lastUpdate}
    />
  )
}
