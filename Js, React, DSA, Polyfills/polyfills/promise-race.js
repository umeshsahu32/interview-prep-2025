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
    }, 2000);
  });
};

const t3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("T3 Success");
    }, 1000);
  });
};

// Promise.race([t1(), t2(), t3()])
//   .then((res) => {
//     console.log("Promise.all result", res);
//   })
//   .catch((err) => console.log("err", err));

// const result = async () => {
//   try {
//     const res = await Promise.race([t1(), t2(), t3()]);
//     console.log("promise.all (result)", res);
//   } catch (err) {
//     console.log(err);
//   }
// };
// result();

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument is not iterable"));
    }

    for (const promise of promises) {
      Promise.resolve(promise).then(resolve).catch(reject);
    }
  });
};

Promise.myRace([t1(), t2(), t3()])
  .then((res) => {
    console.log("Promise.all result", res);
  })
  .catch((err) => console.log("err", err));

const result = async () => {
  try {
    const res = await Promise.myRace([t1(), t2(), t3()]);
    console.log("promise.all (result)", res);
  } catch (err) {
    console.log(err);
  }
};
result();
