import { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
  console.log(context.account)
  return new Response("Hello, world!")
}