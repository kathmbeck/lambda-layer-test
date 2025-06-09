import { trace, context, propagation } from "@opentelemetry/api";
import { wrapTracer } from "@opentelemetry/api/experimental";

export default function handler(request) {
  const tracer = wrapTracer(trace.getTracer("example-tracer"));
  
  // Extract context from request headers
  const extractedContext = propagation.extract(context.active(), request.headers);
  console.log("Initial context:", context.active());
  console.log("Extracted context:", extractedContext);
  
  return context.with(extractedContext, async () => {
    console.log("Context in async wrapper:", context.active());
    return tracer.withActiveSpan("hello worldddddd", async (span) => {
      console.log("Context in outer span:", context.active());
      // Add request metadata to the span
      span.setAttribute("http.method", request.method);
      span.setAttribute("http.url", request.url);
      
      await tracer.withActiveSpan("somethinggggg is slow here", async () => {
        console.log("Context in inner span:", context.active());
        await new Promise((resolve) => setTimeout(resolve, 1000));
      });

      return Response.json("Hello world");
    });
  });
}