// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import VideosAPI from '../../lib/api/videos';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  VideosAPI.fetchDefaultVideos(res);
}
