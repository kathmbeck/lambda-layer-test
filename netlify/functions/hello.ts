import { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
  console.log(context.account, context.cookies, context.geo, context.deploy, context.ip, context.json, context.log, context.next, context.params)
  return new Response("Hello, world!")
}