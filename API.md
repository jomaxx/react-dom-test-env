<a name="module_ReactDOMTestEnv"></a>

## ReactDOMTestEnv

* [ReactDOMTestEnv](#module_ReactDOMTestEnv)
    * [~mount(tree)](#module_ReactDOMTestEnv..mount) ⇒ <code>ReactInstance</code>
    * [~unmount()](#module_ReactDOMTestEnv..unmount) ⇒ <code>Boolean</code>
    * [~find([selector])](#module_ReactDOMTestEnv..find) ⇒ <code>HTMLElement</code>
    * [~waitFor([selector], [timeout])](#module_ReactDOMTestEnv..waitFor) ⇒ <code>Promise</code>
    * [~createEnv()](#module_ReactDOMTestEnv..createEnv) ⇒ <code>Object</code>
    * [~debug(node)](#module_ReactDOMTestEnv..debug)
    * [~simulate(node, event)](#module_ReactDOMTestEnv..simulate) ⇒ <code>Boolean</code>

<a name="module_ReactDOMTestEnv..mount"></a>

### ReactDOMTestEnv~mount(tree) ⇒ <code>ReactInstance</code>
Mount a react tree

**Kind**: inner method of [<code>ReactDOMTestEnv</code>](#module_ReactDOMTestEnv)  

| Param | Type |
| --- | --- |
| tree | <code>ReactElement</code> | 

**Example**  
```js
import React from 'react';
import { mount, find } from 'react-dom-test-env';

test('mounts button', () => {
  mount(<button />);
  const button = find('button');
  expect(button).toBeTruthy();
});
```
<a name="module_ReactDOMTestEnv..unmount"></a>

### ReactDOMTestEnv~unmount() ⇒ <code>Boolean</code>
Unmount the currently mounted react tree

**Kind**: inner method of [<code>ReactDOMTestEnv</code>](#module_ReactDOMTestEnv)  
**Returns**: <code>Boolean</code> - true if unmounted  
**Example**  
```js
import React from 'react';
import { mount, find, unmount } from 'react-dom-test-env';

test('unmounts button', () => {
  mount(<button />);
  unmount();
  const button = find('button');
  expect(button).not.toBeTruthy();
});
```
<a name="module_ReactDOMTestEnv..find"></a>

### ReactDOMTestEnv~find([selector]) ⇒ <code>HTMLElement</code>
Find dom node

**Kind**: inner method of [<code>ReactDOMTestEnv</code>](#module_ReactDOMTestEnv)  

| Param | Type | Default |
| --- | --- | --- |
| [selector] | <code>String</code> | <code>*</code> | 

**Example**  
```js
import React from 'react';
import { mount, find } from 'react-dom-test-env';

test('mounts button', async () => {
  mount(<button />);
  const button = find('button');
  expect(button).toBeTruthy();
});
```
<a name="module_ReactDOMTestEnv..waitFor"></a>

### ReactDOMTestEnv~waitFor([selector], [timeout]) ⇒ <code>Promise</code>
Wait for element

**Kind**: inner method of [<code>ReactDOMTestEnv</code>](#module_ReactDOMTestEnv)  
**Returns**: <code>Promise</code> - resolves to dom node  

| Param | Type | Default |
| --- | --- | --- |
| [selector] | <code>String</code> | <code>*</code> | 
| [timeout] | <code>Number</code> | <code>3000</code> | 

**Example**  
```js
import React from 'react';
import { mount, waitFor } from 'react-dom-test-env';

test('mounts button', () => {
  const promise = waitFor("button");
  mount(<button id="test" />);
  const button = await promise;
  expect(button.id).toBe("test");
});
```
<a name="module_ReactDOMTestEnv..createEnv"></a>

### ReactDOMTestEnv~createEnv() ⇒ <code>Object</code>
Create sandboxed environment

**Kind**: inner method of [<code>ReactDOMTestEnv</code>](#module_ReactDOMTestEnv)  
**Example**  
```js
import React from 'react';
import { createEnv } from 'react-dom-test-env';

test('mounts button', () => {
  const { mount, find } = createEnv();
  mount(<button />);
  const button = find('button');
  expect(button).toBeTruthy();
});
```
<a name="module_ReactDOMTestEnv..debug"></a>

### ReactDOMTestEnv~debug(node)
Throws pretty formatted html string

**Kind**: inner method of [<code>ReactDOMTestEnv</code>](#module_ReactDOMTestEnv)  

| Param | Type |
| --- | --- |
| node | <code>HTMLElement</code> | 

**Example**  
```js
import React from 'react';
import { mount, find, debug } from 'react-dom-test-env';

test('mounts button', async () => {
  mount(<button />);
  const button = find('button');
  debug(button);
});
```
<a name="module_ReactDOMTestEnv..simulate"></a>

### ReactDOMTestEnv~simulate(node, event) ⇒ <code>Boolean</code>
Simulate events on dom nodes

**Kind**: inner method of [<code>ReactDOMTestEnv</code>](#module_ReactDOMTestEnv)  
**Returns**: <code>Boolean</code> - true if event was cancelled  
**See**: https://reactjs.org/docs/events.html#supported-events  

| Param | Type |
| --- | --- |
| node | <code>HTMLElement</code> | 
| event | <code>Object</code> | 

**Example**  
```js
import React from 'react';
import { mount, find, simulate } from 'react-dom-test-env';

test('clicks button', (done) => {
  const onClick = jest.fn();
  mount(<button onClick={onClick} />);
  const button = find('button');

  simulate(button, new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  }));

  expect(onClick).toHaveBeenCalledTimes(1);
});
```
**Example** *(supported events)*  
```js
import React from 'react';
import { mount, find, simulate } from 'react-dom-test-env';

// all supported react events have a convenience method with sane defaults
// https://reactjs.org/docs/events.html#supported-events
test('clicks button', (done) => {
  const onClick = jest.fn();
  mount(<button onClick={onClick} />);
  const button = find('button');
  simulate.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});
```
