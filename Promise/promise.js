const myPromise = new Promise((resolve, reject) => {
  let condition = true;

  if (condition) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected!");
  }
});

myPromise
  .then((message) => {
    console.log('them block',message);
  })
  .catch((error) => {
    console.error('catch block',error);
  })
  .finally(() => {
    console.log("Promise has been settled (either resolved or rejected).");
  });
