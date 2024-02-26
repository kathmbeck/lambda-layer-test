import type {Context} from '@netlify/edge-functions'
export default async (request : Request, context : Context) => {
  const variantFromCookie = context.cookies.get('variant')
  function sendRewrite(variant : number) {
    const url = new URL(request.url)
    if (variant >= 0.5) {
      return new URL(url.pathname,'https://main-branch--subdomain.netlify.app/')
    } else {
      return new URL(url.pathname,'https://other-branch--subdomain.netlify.app/')
    }
  }
  if (variantFromCookie) {
    return sendRewrite(variantFromCookie)
  } else {
    const variantRandom = Math.random()
    context.cookies.set({
      name: 'variant',
      value: variantRandom.toString()
    })
    return sendRewrite(variantRandom)
  }
}
export const config : Config = {
  path: '/*'
}