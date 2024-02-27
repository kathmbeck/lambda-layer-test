import type {Context} from '@netlify/edge-functions'
export default async (request : Request, context : Context) => {
  const variantFromCookie = context.cookies.get('variant')
  async function sendRewrite(variant : number) {
    const url = new URL(request.url)
    if (variant >= 0.5) {
      return await fetch('https://main--funny-chaja-c344cc.netlify.app/')
    } else {
      return await fetch('https://ab--funny-chaja-c344cc.netlify.app/')
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