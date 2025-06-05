export default async function(req) {
  const headers = new Headers({
    'netlify-cdn-cache-control': 'durable, max-age=3600',
  });

  const url = new URL(req.url);
  console.log('This is not goodbye! Time to say hello!!!!!!!!!!!!!');
  const currentTime = new Date().toISOString();

  return new Response(`goodbye world!!!!!!!!!\nCurrent Time: ${currentTime}`, { headers });
}

// Logs outside of the handler
setTimeout(() => {
  console.log("Outside handler: post-execution logs");
}, 100);
