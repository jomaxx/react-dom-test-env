/**
 * @module ReactDOMTestEnv
 */

/**
 * Mount a react tree
 *
 * @example
 * import React from 'react';
 * import { mount, find } from 'react-dom-test-env';
 *
 * test('mounts button', () => {
 *   mount(<button />);
 *   const button = find('button');
 *   expect(button).toBeTruthy();
 * });
 *
 * @function mount
 * @param {ReactElement} tree
 * @return {ReactInstance}
 */
export { mount } from "./env";

/**
 * Unmount the currently mounted react tree
 *
 * @example
 * import React from 'react';
 * import { mount, find, unmount } from 'react-dom-test-env';
 *
 * test('unmounts button', () => {
 *   mount(<button />);
 *   unmount();
 *   const button = find('button');
 *   expect(button).not.toBeTruthy();
 * });
 *
 * @function unmount
 * @return {Boolean} true if unmounted
 */
export { unmount } from "./env";

/**
 * Find dom node
 *
 * @example
 * import React from 'react';
 * import { mount, find } from 'react-dom-test-env';
 *
 * test('mounts button', async () => {
 *   mount(<button />);
 *   const button = find('button');
 *   expect(button).toBeTruthy();
 * });
 *
 * @function find
 * @param {String} [selector=*]
 * @return {HTMLElement}
 */
export { find } from "./env";

/**
 * Wait for element
 *
 * @example
 * import React from 'react';
 * import { mount, waitFor } from 'react-dom-test-env';
 *
 * test('mounts button', () => {
 *   const promise = waitFor("button");
 *   mount(<button id="test" />);
 *   const button = await promise;
 *   expect(button.id).toBe("test");
 * });
 *
 * @function waitFor
 * @param {String} [selector=*]
 * @param {Number} [timeout=3000]
 * @return {Promise} resolves to dom node
 */
export { waitFor } from "./env";

/**
 * Create sandboxed environment
 *
 * @example
 * import React from 'react';
 * import { createEnv } from 'react-dom-test-env';
 *
 * test('mounts button', () => {
 *   const { mount, find } = createEnv();
 *   mount(<button />);
 *   const button = find('button');
 *   expect(button).toBeTruthy();
 * });
 *
 * @function createEnv
 * @return {Object}
 */
export { createEnv } from "./env";

/**
 * Throws pretty formatted html string
 *
 * @example
 * import React from 'react';
 * import { mount, find, debug } from 'react-dom-test-env';
 *
 * test('mounts button', async () => {
 *   mount(<button />);
 *   const button = find('button');
 *   debug(button);
 * });
 *
 * @function debug
 * @param {HTMLElement} node
 */
export { default as debug } from "./debug";

/**
 * Simulate events on dom nodes
 *
 * @example
 * import React from 'react';
 * import { mount, find, simulate } from 'react-dom-test-env';
 *
 * test('clicks button', (done) => {
 *   const onClick = jest.fn();
 *   mount(<button onClick={onClick} />);
 *   const button = find('button');
 *
 *   simulate(button, new MouseEvent('click', {
 *     bubbles: true,
 *     cancelable: true,
 *   }));
 *
 *   expect(onClick).toHaveBeenCalledTimes(1);
 * });
 *
 * @example <caption>supported events</caption>
 * import React from 'react';
 * import { mount, find, simulate } from 'react-dom-test-env';
 *
 * // all supported react events have a convenience method with sane defaults
 * // https://reactjs.org/docs/events.html#supported-events
 * test('clicks button', (done) => {
 *   const onClick = jest.fn();
 *   mount(<button onClick={onClick} />);
 *   const button = find('button');
 *   simulate.click(button);
 *   expect(onClick).toHaveBeenCalledTimes(1);
 * });
 *
 * @see https://reactjs.org/docs/events.html#supported-events
 * @function simulate
 * @param {HTMLElement} node
 * @param {Object} event
 * @return {Boolean} true if event was cancelled
 */
export { default as simulate } from "./simulate";
