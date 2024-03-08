export default async (req, context) => {
    const name = process.env.AWS_LAMBDA_FUNCTION_NAME
    console.log(`Hello from ${name}`);
    return new Response("Hello, world!");
};