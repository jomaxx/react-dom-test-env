import React from "react";
import { mount, unmount, waitFor, find, createEnv } from "react-dom-test-env";

afterEach(unmount);

it("create environment", () => {
  createEnv();
});

it("mounts a component", () => {
  mount(<button />);
  expect(find("button")).toBeTruthy();
});

it("unmounts a component", () => {
  mount(<button />);
  unmount();
  expect(find("button")).not.toBeTruthy();
});

it("waits for element", async () => {
  const promise = waitFor("button");
  mount(<button id="test" />);
  const button = await promise;
  expect(button.id).toBe("test");
});

it("throws error after timeout", async () => {
  await expect(waitFor("button", 0)).rejects.toThrowErrorMatchingSnapshot();
});
