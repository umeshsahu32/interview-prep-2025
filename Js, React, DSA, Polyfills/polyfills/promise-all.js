const t1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("T1 Success");
    }, 1000);
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

// Promise.all([t1(), t2(), t3()])
//   .then((res) => {
//     console.log("Promise.all result", res);
//   })
//   .catch((err) => console.log("err", err));

// const result = async () => {
//   try {
//     const res = await Promise.all([t1(), t2(), t3()]);
//     console.log("promise.all (result)", res);
//   } catch (err) {
//     console.log(err);
//   }
// };
// result();

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("undefined is not a iterable"));
    }

    const n = promises.length;
    const results = new Array(n);
    let completed = 0;
    if (n === 0) {
      return resolve([]);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          result[index] = value;
          completed++;
          if (completed === n) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

Promise.all([t1(), t2(), t3()])
  .then((res) => {
    console.log("Promise.all result", res);
  })
  .catch((err) => console.log("err", err));

const result = async () => {
  try {
    const res = await Promise.myAll([t1(), t2(), t3()]);
    console.log("promise.all (result)", res);
  } catch (err) {
    console.log(err);
  }
};
result();
