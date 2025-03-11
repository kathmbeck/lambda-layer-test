export default async function(req) {
  const headers = new Headers({
    'netlify-cdn-cache-control': 'durable, max-age=3600',
  });

  const url = new URL(req.url);
  console.log('This is not goodbye! Time to say hello!');
  console.log('Adding more logs to this function! Should be version 56');
  const currentTime = new Date().toISOString();

  return new Response(`goodbye world!!!!!!\nCurrent Time: ${currentTime}`, { headers });
}
