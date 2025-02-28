export default async function(req) {
  const headers = new Headers({
    'netlify-cdn-cache-control': 'durable, max-age=3600',
  });

  const url = new URL(req.url);
  console.log('This is my new function!!!') 
  console.log('Goodbye!!! 38! second time ') 
  return new Response('goodbye world!!!!!!', { headers });
}
