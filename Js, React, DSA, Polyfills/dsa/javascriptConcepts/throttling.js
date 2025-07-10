// What is Throttling?
// Throttling is a technique used to ensure that a function is not called more often than a specified interval. It’s like setting a speed limit for a given event listener. By using throttling, you can control how often a function executes, which is especially useful in scenarios where events can fire rapidly or continuously, such as scrolling or resizing windows.

// How Throttling Works
// When a throttled function is executed, it will run immediately, but subsequent calls will be ignored until the specified wait time has passed. After this wait time, the function will execute again if invoked. This can help enhance performance by limiting the number of times a function gets executed.

let counter = 0;

const fetchData = () => {
  console.log("Fetching Data...", counter++);
};

const throttleFn = (fn, delay) => {
  let flag = true;

  return function () {
    let context = this;
    let args = arguments;

    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const fetchDataThrottle = throttleFn(fetchData, 500);
fetchDataThrottle();
