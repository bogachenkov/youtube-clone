import Button from "@modules/shared/Button";
import EmptyScreen from "@modules/shared/EmptyScreen";
import IconWrapper from "@modules/shared/IconWrapper";
import Row from "@modules/shared/Row";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <EmptyScreen
      emoji="&#x1F631"
      title="This page isn't available"
      text="Sorry about that. Try searching for something else."
    >
      <Link href={'/'}>
        <Button fontSize={14}>
          <Row gap={6}>
            <IconWrapper icon='HomeOutlined' size={20} />
            GO HOME
          </Row>
        </Button>
      </Link>
    </EmptyScreen>
  )
}
