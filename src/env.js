import ReactDOM from "react-dom";
import { removeLineFromStack } from "./utils";

function createEnv() {
  const timeouts = [];

  // must be in document for dom events to work
  const node = document.body.appendChild(document.createElement("div"));

  const find = (selector = "*") => node.querySelector(selector);

  const mount = element => {
    return ReactDOM.render(element, node);
  };

  const unmount = () => {
    while (timeouts.length) clearTimeout(timeouts.pop());
    return ReactDOM.unmountComponentAtNode(node);
  };

  const waitFor = (selector = "*", timeout = 3000) => {
    const interval = 50;
    const startTime = Date.now();
    const error = new Error(`${selector} not found!`);
    removeLineFromStack(error);

    return new Promise((resolve, reject) => {
      (function run() {
        const element = find(selector);
        if (element) resolve(element);
        else if (Date.now() - startTime >= timeout) reject(error);
        else timeouts.push(setTimeout(run, interval));
      })();
    });
  };

  return {
    find,
    mount,
    unmount,
    waitFor
  };
}

const { find, mount, unmount, waitFor } = createEnv();

export { find, mount, unmount, waitFor, createEnv };
