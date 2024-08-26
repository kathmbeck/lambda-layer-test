export default async (req, context) => {
    let seconds = 0;
    const intervalId = setInterval(() => {
        console.log(seconds);
        seconds++;
        if (seconds === 30) {
            clearInterval(intervalId);
        }
    }, 1000);
  };