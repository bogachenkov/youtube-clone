import GlobalStyle from '../styles/globalStyles';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  MockedVideoCollection,
  MockedVideo,
  MockedChannel,
  MockedComments
} from '../mocks/apiResponses';
import { rest } from 'msw'
import 'react-tooltip/dist/react-tooltip.css';

initialize({
  // quiet: true
});

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
    handlers: {
      redis: [
        rest.post('https://eu2-social-grouper-30233.upstash.io', (req, res, ctx) => {
          return res(
            ctx.json(MockedVideoCollection)
          )
        }),
      ],
      youtube: [
        rest.get('https://www.googleapis.com/youtube/v3/videos', (req, res, ctx) => {
          return res(
            ctx.json(MockedVideo)
          )
        }),
        rest.get('https://www.googleapis.com/youtube/v3/channels', (req, res, ctx) => {
          return res(
            ctx.json(MockedChannel)
          )
        }),
        rest.get('https://www.googleapis.com/youtube/v3/commentThreads', (req, res, ctx) => {
          return res(
            ctx.json(MockedComments)
          )
        }),
      ]
    }
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
      <>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Story />
        </QueryClientProvider>
      </>
    )
  },
  mswDecorator,
]

// if (typeof global.process === 'undefined') {
//   const { worker } = require("../src/mocks/workers");
//   worker.start();
// }