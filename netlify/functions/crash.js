export default async (req, context) => {
    for (let i = 0; i < 31; i++) {
        if (i < 30) {
            console.log("count", i);
            await sleep(1000);
        } else {
            console.log("complete!")

        }
    }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }