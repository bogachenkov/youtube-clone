import { usePlaylistCollection } from "@lib/hooks/usePlaylistCollection";
import { useAuthStore } from "@lib/store";
import { usePlaylistStore } from "@lib/store/playlist";
import Playlist from "@modules/Playlist";
import Container from "@modules/shared/Container";
import EmptyScreen from "@modules/shared/EmptyScreen";
import SignInButton from "@modules/shared/SignInButton";

export default function DemoPlaylistPage() {
  const user = useAuthStore(store => store.user);
  const collection = usePlaylistCollection();
  const lastUpdate = usePlaylistStore(store => store.lastUpdate);
  const name = usePlaylistStore(store => store.name);

  if (!user) return (
    <Container>
      <EmptyScreen
        emojiCode="270C"
        title="Watch What You Want"
        text="Sign in to create your own playlists"
      >
        <SignInButton fontSize={16} />
      </EmptyScreen>
    </Container>
  )

  if (collection.length === 0) return (
    <Container>
      <EmptyScreen
        emojiCode="270C"
        title="Watch What You Want"
        text="There no videos in your playlist"
      />
    </Container>
  )

  return (
    <Playlist
      collection={collection}
      name={name}
      lastUpdate={lastUpdate}
    />
  )
}
