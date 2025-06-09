import { trace } from "@opentelemetry/api";
import { wrapTracer } from "@opentelemetry/api/experimental";

export default function handler(request) {
  const tracer = wrapTracer(trace.getTracer("example-tracer"));
  // Use the active context that was propagated from the proxy
  return tracer.withActiveSpan("hello worldddddd", async (span) => {
    await tracer.withActiveSpan("somethinggggg is slow here", async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    return Response.json("Hello world");
  });
}
