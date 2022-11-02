const btn = document.querySelector("button");
const logsContainer = document.querySelector("#logs");

const displayLog = (type) => {
  logsContainer.innerHTML += `<p>${type}: ${new Date().toLocaleTimeString()}</p>`;
};

const logDebounce = () => {
  console.log("Debounced");
  displayLog("Debounced");
};

const logThrottle = () => {
  console.log("Throttled");
  displayLog("Throttled");
};

const debounce = (fn, delay) => {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const throttle = (fn, limit) => {
  let flag = true;

  return function (...args) {
    if (flag) {
      fn.apply(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const onClickDebounce = debounce(logDebounce, 500);
const onClickThrottle = throttle(logThrottle, 500);

btn.addEventListener("click", onClickDebounce);
btn.addEventListener("click", onClickThrottle);
