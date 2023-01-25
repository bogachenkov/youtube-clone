import Button from "@ui/Button";
import EmptyScreen from "@ui/EmptyScreen";
import Row from "@ui/Row";
import Head from "next/head";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Page Not Found - YouTube Clone</title>
      </Head>
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
    </>
  )
}
