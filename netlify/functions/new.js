export default async function(req) {
  const headers = new Headers({
    'netlify-cdn-cache-control': 'durable, max-age=3600',
    'netlify-vary': query="",
  });

  const url = new URL(req.url);
  return new Response('hello, new here', { headers });
}
