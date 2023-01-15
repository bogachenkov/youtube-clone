import Container from "@modules/shared/Container";
import EmptyScreen from "@modules/shared/EmptyScreen";
import SignInButton from "@modules/shared/SignInButton";

export default function LibraryPage() {
  return (
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
}
