import 'regenerator-runtime/runtime';
import { NextPage } from 'next';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode, useState } from 'react';
import Primary from '@modules/layouts/Primary';
import GlobalStyle from '../styles/globalStyles';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// export function reportWebVitals(metric: any) {
//   if (metric.label === 'custom') {
//     console.log(metric);
//   }
// }

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions: { queries: { staleTime: 24 * 60 * 60 * 1000 } } }));

  const getLayout = Component.getLayout || ((page) => <Primary>{page}</Primary>);

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}
