export const getServerUrl = () => {
  const dev = process.env.NODE_ENV !== 'production';
  return dev ? 'http://localhost:3000' : 'https://youtube-redesign-sigma.vercel.app';
}