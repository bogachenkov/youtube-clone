import { useAuthStore } from "@lib/store";
import Library from "@modules/Library";
import Container from "@modules/shared/Container";
import EmptyScreen from "@modules/shared/EmptyScreen";
import SignInButton from "@modules/shared/SignInButton";

export default function LibraryPage() {
  const user = useAuthStore(store => store.user);

  if (!user) return (
    <Container>
      <EmptyScreen
        emojiCode="1F631"
        title="Enjoy Your Favorite Videos"
        text="Sign in to access videos thay you've liked or saved"
      >
        <SignInButton fontSize={16} />
      </EmptyScreen>
    </Container>
  )

  return <Library />
}
