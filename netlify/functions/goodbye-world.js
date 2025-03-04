export default async function(req) {
  const headers = new Headers({
    'netlify-cdn-cache-control': 'durable, max-age=3600',
  });

  const url = new URL(req.url);
  const currentTime = new Date().toISOString();

  console.log('This is my new function!!!');
  console.log('Goodbye!!! 43 more logging logging');
  console.log(`Current Time: ${currentTime}`);

  return new Response(`goodbye world!!!!!!\nCurrent Time: ${currentTime}`, { headers });
}
