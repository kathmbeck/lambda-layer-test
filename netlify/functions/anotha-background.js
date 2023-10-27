export default (event, context) => {
  console.log("Hi")
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" })
  }
}
