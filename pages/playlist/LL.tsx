import Container from "@modules/shared/Container";
import EmptyScreen from "@modules/shared/EmptyScreen";
import SignInButton from "@modules/shared/SignInButton";

export default function WatchLaterPage() {
  return (
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
}
