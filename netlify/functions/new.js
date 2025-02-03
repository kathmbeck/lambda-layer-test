export default async function (req) {
  const headers = new Headers({
    "netlify-cdn-cache-control": "durable, max-age=3600",
    "netlify-vary": query = "",
  });

  // Generate a response that exceeds 150,000 bytes
  const largeResponse = "A".repeat(160000); // 160 KB of "A"s

  return new Response(largeResponse, { headers });
}

