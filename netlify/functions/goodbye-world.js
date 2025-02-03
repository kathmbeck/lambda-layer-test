export default async function(req) {
  const headers = new Headers({
    'netlify-cdn-cache-control': 'durable, max-age=3600',
  });

  const url = new URL(req.url);
  console.log('This is my new function!') 
  const largeLog = "A".repeat(16)
  console.log(largeLog)
  return new Response('goodbye world!!!!!!', { headers });
}
