export function timeoutPromise(delayMs: number) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });
}

// setTimeout(() => {
//   console.log('1s');
// }, 1000);

// timeoutPromise(1000).then(() => {
//   console.log('1s');
// });