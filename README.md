# react-dom-test-env

Test React via the DOM!

## Principles

This library is designed to encourage testing the DOM instead of directly testing React components. Users interface with the application via the DOM so React components should actually be considered implementation detail when testing UIs.

## Install

```bash
yarn add --dev react react-dom react-dom-test-env
```

## Examples

Examples assume jest is your test runner.

### Simulating dom events

```js
import React from "react";
import { mount, unmount, find, simulate } from "react-dom-test-env";

afterEach(unmount);

test("clicks button", () => {
  const onClick = jest.fn();
  mount(<button onClick={onClick} />);
  const button = find("button");
  simulate.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});
```

### Waiting for dom

```js
import React from "react";
import { mount, unmount, waitFor } from "react-dom-test-env";

afterEach(unmount);

test("waits for loaded", () => {
  class Test extends React.Component {
    state = {
      loaded: false
    };

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          loaded: true
        });
      }, 100);
    }

    render() {
      if (this.state.loaded) {
        return <div id="loaded">Hello World!</div>;
      }

      return null;
    }
  }

  mount(<Test />);
  const loaded = waitFor("#loaded");
  expect(loaded.innerText).toBe("Hello World!");
});
```
