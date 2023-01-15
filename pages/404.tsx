import Button from "@modules/shared/Button";
import EmptyScreen from "@modules/shared/EmptyScreen";
import Row from "@modules/shared/Row";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <EmptyScreen
      emojiCode="1F631"
      title="This page isn't available"
      text="Sorry about that. Try searching for something else."
    >
      <Link href={'/'}>
        <Button fontSize={16}>
          <Row gap={6}>
            GO HOME
          </Row>
        </Button>
      </Link>
    </EmptyScreen>
  )
}
