import { Context } from "@netlify/functions"
import { components } from '@netlify/bitballoon-openapi';

export default async (req: Request, context: Context) => {
  if (context.cookies.get("chocolate")) {
    return new Response("Sorry, no more cookies for you")
  }

  console.log(components)

  context.cookies.set("chocolate", "yummy")

  return new Response("Here's a chocolate cookie! 🍪")
}
