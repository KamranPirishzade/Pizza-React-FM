export default async function getPastOrder(order) {
  const response = await fetch(`/api/past-order/${order}`);
  const data = await response.json();
  return data;
}

// for (let i = 0; i < 100; i++) {
//   console.log(i);
//   setTimeout(() => console.log("Timer"), 0);
// }

// const myPromise = Promise.resolve(true);

// myPromise.then((value) => {
//   console.log(value);
// });
