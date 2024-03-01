export default async () => {
    const encoder = new TextEncoder();
    const formatter = new Intl.DateTimeFormat("en", { timeStyle: "medium" });
    const body = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode("<html><body><ol>"));
        let i = 0;
        const timer = setInterval(() => {
          controller.enqueue(
            encoder.encode(
              `<li>Hello at ${formatter.format(new Date())}</li>\n\n`
            )
          );
          if (i++ >= 100) {
            console.log(`It's ${new Date()}, ${i}`)
            controller.enqueue(encoder.encode("</ol></body></html>"));
            controller.close();
            clearInterval(timer);
          }
          if (i === 5 ) {
            console.log(`It's ${new Date()}, ${i}`)
            throw new Error("Oops!");
          }
        }, 1000);
      }
    });
    return new Response(body);
  };