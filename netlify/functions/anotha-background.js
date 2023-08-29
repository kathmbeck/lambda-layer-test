const handler = async (event, context) => {
  console.log("Hello from the function. Starting a timeout!!!!")

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  await delay(600_000)

  console.log("Goodbye from the function!!!")

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World 👋 ❤️" })
  }
}

export { handler };