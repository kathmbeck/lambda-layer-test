export default async (req, context) => {
    const name = process.env.AWS_LAMBDA_FUNCTION_NAME
    console.log(`Hello from ${name}`);
    console.log("This is the new background function")
    return new Response("Hello, world!");
};
