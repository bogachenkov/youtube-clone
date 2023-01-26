import GlobalStyle from '../styles/globalStyles';
import { Suspense } from 'react';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import SuspenseSpinner from '@ui/SuspenseSpinner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { rest } from 'msw'

import 'react-tooltip/dist/react-tooltip.css';

initialize();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'dark', value: '#151719' },
      { name: 'white', value: '#fff' },
    ],
  },
  nextjs: {
    router: {
      path: '/some-default-path',
      asPath: '/some-default-path',
      query: {
        'video_id': 'EUer-Tto1ZA'
      },
    },
  },
  msw: {
    handlers: [
      // TODO Mock redis url
      rest.get('', (req, res, ctx) => {
        console.log(req);
      }),
      // TODO Mock videoById url
      rest.get('', (req, res, ctx) => {
        console.log(req);
      })
    ]
  },
  docs: {
    source: {
      type: 'dynamic',
      excludeDecorators: true,
    }
  }
}

export const decorators = [
  (Story) => {
    const queryClient = new QueryClient();

    return (
      <Suspense fallback={<SuspenseSpinner />}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Story />
        </QueryClientProvider>
      </Suspense>
    )
  },
  mswDecorator,
]

// if (typeof global.process === 'undefined') {
//   const { worker } = require("../src/mocks/workers");
//   worker.start();
// }