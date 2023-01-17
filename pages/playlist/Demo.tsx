import { useAuthStore } from "@lib/store";
import Container from "@modules/shared/Container";
import EmptyScreen from "@modules/shared/EmptyScreen";
import SignInButton from "@modules/shared/SignInButton";

export default function DemoPlaylistPage() {
  const user = useAuthStore(store => store.user);

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

  return null;
}
