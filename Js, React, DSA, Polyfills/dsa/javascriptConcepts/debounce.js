// What is Debouncing?
// Debouncing, on the other hand, is a technique that delays the execution of a function until a certain amount of time has passed since it was last invoked. This is particularly useful for scenarios where a function should only run once after a series of events has completed, such as when a user stops typing in an input field or resizes a window.

// How Debouncing Works
// When a debounced function is called, it resets a timer. If the function is invoked again within the specified delay, the timer restarts. Only when the user stops triggering the function for the designated time does the function finally execute.

// Throttle vs Debounce: Key Differences
// Execution Timing
// The primary difference between throttling and debouncing is in their execution timing:

// Throttling: Guarantees that a function will be called at regular intervals. That is, it allows execution at fixed time intervals.
// Debouncing: Executes the function only after a certain period of inactivity. If the user keeps triggering the event, the function won’t execute until the activity stops.

// Throttle: Ideal for controlling the frequency of events like scrolling, resizing, or mouse movements where continuous input occurs. For instance, tracking the position of a user while they scroll through a page.

// Debounce: Best for use cases where you want to wait until a user has finished performing an action, such as submitting a form, performing searches, or handling input fields.

let counter = 0;

const fetchData = () => {
  console.log("Fetching Data...", counter++);
};

const debounceFn = (fn, delay) => {
  let timerId;

  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const fetchDataDebounce = debounceFn(fetchData, 500);
fetchDataDebounce();
