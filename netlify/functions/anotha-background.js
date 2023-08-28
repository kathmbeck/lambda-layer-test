const handler = async (event, context) => {
  console.log("Hello from the function Starting a timeout!!!!")
  setTimeout(() => {
    console.log("Goodbye from the function!!!")
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello World 👋 ❤️" }),
    }
  }, 500_001)
};

export { handler };