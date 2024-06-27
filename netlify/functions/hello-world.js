export default async (req, context) => {
    console.log("hi hi hi")
    console.log("another log")
    sleep(1000)
    console.log({
      "someJson":"loggy-log",
      "another":"log",
      "frogOnA":"log",
      "boblaw":"lawblog",
      "blahblah":"log",
      "something":"lalalalala"
   })
   console.log(context)
   console.log(req)
   console.log({
    "2222":"2222",
   "someJson":"loggy-log",
   "another":"log",
   "frogOnA":"log",
   "boblaw":"lawblog",
   "blahblah":"log",
   "something":"lalalalala"
  })
  console.log("In the current implementation Ingesteer looks if a given batch contains the platform.start or the platform.runtimeDone events, which works fine as long as there’s a maximum of 2 batches (first batch will contain the platform.start and the last batch will contain platform.runtimeDone.This can cause that due to limitation #2 when having more than 2 batches the intermediary batches will have no AWS Request ID as we will not be able to find platform.start nor platform.runtimeDone on those batches.In the current implementation Ingesteer looks if a given batch contains the platform.start or the platform.runtimeDone events, which works fine as long as there’s a maximum of 2 batches (first batch will contain the platform.start and the last batch will contain platform.runtimeDone.This can cause that due to limitation #2 when having more than 2 batches the intermediary batches will have no AWS Request ID as we will not be able to find platform.start nor platform.runtimeDone on those batches.")
  console.log(23918723918273912873912873918273981273982173981789127389273891732981371471625)
  console.time()
  console.log("ayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
    return new Response("Helloooooooooo, world!");
  };