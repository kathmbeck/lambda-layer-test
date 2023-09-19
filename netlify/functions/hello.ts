import { Context } from "@netlify/functions"
import { Cookie } from '@netlify/node-cookies';

export default async (req: Request, context: Context) => {
  var cookie:Cookie = { name: "cookie!", value: "yum!"}
  console.log(context.account, context.cookies.set(cookie), context.geo, context.deploy, context.ip, context.json("lalalala: true"), context.log("huzza!"), context.next, context.params)
  return new Response("Hello, world!")
}