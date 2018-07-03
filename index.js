/**
 * Summary
 *
 * – Example 1 – canonical pyramid of doom;
 * – Example 2 – nice chain of promises;
 * – Example 3 – promises inside 'for' loop;
 * – Example 4 – generators;
 * – Example 5 – async/await.
 */

/**
 * Tip – uncomment only one section at a time.
 */

console.clear();


/**
 * @desc Set timeout for a given delay.
 *
 * @param {number} delay
 * @returns {Promise}
 */
function sleep(delay) {
  return new Promise(resolve => setTimeout(
    () => {
      console.log(`slept for ${delay} ms`);
      resolve();
    },
    delay,
  ));
}


/**
 * Example 1 – canonical pyramid of doom.
 */

// setTimeout(() => {
//   console.log('slept for 1000 ms');
//   setTimeout(() => {
//     console.log('slept for 2000 ms');
//     setTimeout(() => {
//       console.log('slept for 3000 ms');
//       setTimeout(() => {
//         console.log('slept for 4000 ms');
//         console.log('woke up');
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);


/**
 * Example 2 – nice chain of promises.
 */

// sleep(1000)
//   .then(() => sleep(2000))
//   .then(() => sleep(3000))
//   .then(() => sleep(4000))
//   .then(() => console.log('woke up'));


/**
 * Example 3 – promises inside 'for' loop.
 */

// let sleepingBeauty = Promise.resolve();
//
// for (let interval = 1000; interval < 5000; interval += 1000) {
//   sleepingBeauty = sleepingBeauty.then(() => sleep(interval));
// }
//
// sleepingBeauty.then(() => console.log('woke up'));


/**
 * Example 4 – generators.
 *
 * @see {@link https://hackernoon.com/async-await-generators-promises-51f1a6ceede2}
 */

/**
 * @desc Simple generator.
 */
// function* sleepingGenerator() {
//   yield sleep(1000);
//   yield sleep(2000);
//   yield sleep(3000);
//   yield sleep(4000);
//
//   console.log('woke up');
// }

/**
 * @desc Simple generator runner.
 *
 * @param {Function} generator
 */
// function runner(generator) {
//   const iterator = generator();
//
//   function run(value) {
//     const result = iterator.next(value);
//
//     if (result.done) {
//       return result.value;
//     }
//
//     return Promise.resolve(result.value).then(run);
//   }
//
//   return run();
// }
//
// runner(sleepingGenerator);


/**
 * Example 5 – async/await.
 */

// (async () => {
//   for (let interval = 1000; interval < 5000; interval += 1000) {
//     // eslint-disable-next-line no-await-in-loop
//     await sleep(interval);
//   }
//
//   console.log('woke up');
// })();
