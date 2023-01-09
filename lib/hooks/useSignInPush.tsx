import { useRouter } from "next/router";
import { useMemo } from "react";

export const useSignIn = () => {
  const router = useRouter();

  const signInPath = `/sign?referer=${router.asPath}`;

  return useMemo(() => ({
    path: signInPath,
    push: () => router.push(signInPath)
  }), [router]);
}