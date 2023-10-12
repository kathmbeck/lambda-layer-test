export default (event, context) => {
  console.log(123)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" })
  }
}
