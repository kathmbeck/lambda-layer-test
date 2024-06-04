export default async (req, context) => {
    console.log("hi hi hi")
    console.log("another log")
    console.log("um(last_1m):( ( sum:ats.global.proxy.process.http.3xx_responses{group:global}.as_count() + sum:ats.global.proxy.process.http.2xx_responses{group:global}.as_count() ) / ( sum:ats.global.proxy.process.http.3xx_responses{group:global}.as_count() + sum:ats.global.proxy.process.http.2xx_responses{group:global}.as_count() + sum:ats.global")
    console.log({
        "Hello":"world",
        "this":"is",
        "long":"json",
        "from":"the",
        "console":"log",
        "blah":"blah",
        "another":"thing",
        "not":"the",
        "return":"statement",
        "okay":"bye"
     })
    throw new Error({
        "Hello":"world",
        "test":"something",
        "long":"json",
        "something":"else",
        "more":"stuff",
        "blah":"blah",
        "another":"thing",
        "and":"another",
        "return":"statement",
        "okay":"bye"
     });
  };