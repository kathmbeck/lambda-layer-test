import { Context } from "@netlify/functions"
import { Cookie } from '@netlify/node-cookies';

export default async (req: Request, context: Context) => {
  const s = Netlify.env.get(Secret)
  console.log(s)
  return new Response("Hello, world!")
}