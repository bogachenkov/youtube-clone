import Container from "@modules/shared/Container";
import EmptyScreen from "@modules/shared/EmptyScreen";
import SignInButton from "@modules/shared/SignInButton";

export default function SubscriptionsPage() {
  return (
    <Container>
      <EmptyScreen
        emojiCode="1F62D"
        title="Don't Miss New Videos"
        text="Sign in to see updates from your favorite YouTube channels"
      >
        <SignInButton fontSize={16} />
      </EmptyScreen>
    </Container>
  )
}
