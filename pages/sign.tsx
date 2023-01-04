import SignIn from "@modules/SignIn";
import { ReactElement } from "react";

export default function SignPage() {
  return <SignIn />
}

SignPage.getLayout = (page: ReactElement) => page;