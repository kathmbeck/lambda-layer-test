const handler = async (event, context) => {
  console.log("Hello from the function lalalala")
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World 👋" }),
  };
};

export { handler };