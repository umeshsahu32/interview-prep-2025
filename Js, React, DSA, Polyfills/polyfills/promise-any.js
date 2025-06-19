const t1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("T1 Success");
    }, 3000);
  });
};

const t2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("T2 Success");
      reject("T2 fail");
    }, 1000);
  });
};

const t3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("T3 Success");
    }, 1000);
  });
};

// Promise.any([t1(), t2(), t3()])
//   .then((res) => {
//     console.log("Promise.all result", res);
//   })
//   .catch((err) => console.log("err", err));

// const result = async () => {
//   try {
//     const res = await Promise.any([t1(), t2(), t3()]);
//     console.log("promise.all (result)", res);
//   } catch (err) {
//     console.log(err);
//   }
// };
// result();

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument is not iterable"));
    }

    const n = promises.length;
    const errors = [];
    let rejections = 0;

    if (n === 0) {
      return reject(new AggregateError([], "All promises were rejected"));
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value); // resolve on first success
        })
        .catch((err) => {
          errors[index] = err;
          rejections++;

          if (rejections === n) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
};

Promise.myAny([t1(), t2(), t3()])
  .then((res) => {
    console.log("Promise.all result", res);
  })
  .catch((err) => console.log("err", err));

const result = async () => {
  try {
    const res = await Promise.myAny([t1(), t2(), t3()]);
    console.log("promise.all (result)", res);
  } catch (err) {
    console.log(err);
  }
};
result();
