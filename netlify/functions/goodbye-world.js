export default async function(req) {
  const headers = new Headers({
    'netlify-cdn-cache-control': 'durable, max-age=3600',
  });

  const url = new URL(req.url);
  const currentTime = new Date().toISOString();

  console.log('This is my new function!!!');
  console.log('Goodbye!!! Trying 38 again');
  console.log(`Current Time: ${currentTime}`);

  return new Response(`goodbye world!!!!!!\nCurrent Time: ${currentTime}`, { headers });
}
