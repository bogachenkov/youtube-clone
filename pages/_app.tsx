import 'regenerator-runtime/runtime';
import { NextPage } from 'next';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode, Suspense, useState } from 'react';
import Primary from '@modules/layouts/Primary';
import GlobalStyle from '../styles/globalStyles';
import { PlaylistDataProvider } from '@lib/providers/playlist-api';
import { REVALIDATE_TIME } from '@const/index';
import 'react-tooltip/dist/react-tooltip.css';
import SuspenseSpinner from '@modules/SuspenseSpinner';

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
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: REVALIDATE_TIME,
        cacheTime: REVALIDATE_TIME,
        suspense: true
      }
    }
  }));

  const getLayout = Component.getLayout || ((page) => <Primary>{page}</Primary>);

  return getLayout(
    <Suspense fallback={<SuspenseSpinner />}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyle />
          <PlaylistDataProvider>
            <Component {...pageProps} />
          </PlaylistDataProvider>
        </Hydrate>
      </QueryClientProvider>
    </Suspense>
  )
}
