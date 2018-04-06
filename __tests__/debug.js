import React from "react";
import { mount, unmount, find, debug } from "react-dom-test-env";

afterEach(unmount);

it("pretty formats dom node", async () => {
  mount(
    <div>
      <button>test</button>
    </div>
  );

  expect(() => debug(find())).toThrowErrorMatchingSnapshot();
});
