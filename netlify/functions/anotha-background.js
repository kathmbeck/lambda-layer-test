export default (event, context) => {

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "goodbye World" })
  }
}
