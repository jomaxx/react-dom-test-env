// fallback to Event
const AnimationEvent = global.AnimationEvent || Event;
const ClipboardEvent = global.ClipboardEvent || Event;
const CompositionEvent = global.CompositionEvent || Event;
const DragEvent = global.DragEvent || Event;
const FocusEvent = global.FocusEvent || Event;
const KeyboardEvent = global.KeyboardEvent || Event;
const MouseEvent = global.MouseEvent || Event;
const ProgressEvent = global.ProgressEvent || Event;
const TouchEvent = global.TouchEvent || Event;
const TransitionEvent = global.TransitionEvent || Event;
const UIEvent = global.UIEvent || Event;
const WheelEvent = global.WheelEvent || Event;
const InputEvent = global.InputEvent || Event;

const eventMap = {
  // https://reactjs.org/docs/events.html#clipboard-events
  copy: [CompositionEvent, { bubbles: true, cancelable: true }],
  cut: [ClipboardEvent, { bubbles: true, cancelable: true }],
  paste: [ClipboardEvent, { bubbles: true, cancelable: true }],
  // https://reactjs.org/docs/events.html#composition-events
  compositionEnd: [CompositionEvent, { bubbles: true, cancelable: true }],
  compositionStart: [CompositionEvent, { bubbles: true, cancelable: true }],
  compositionUpdate: [CompositionEvent, { bubbles: true, cancelable: false }],
  // https://reactjs.org/docs/events.html#keyboard-events
  keyDown: [KeyboardEvent, { bubbles: true, cancelable: true }],
  keyPress: [KeyboardEvent, { bubbles: true, cancelable: true, keyCode: 13 }],
  keyUp: [KeyboardEvent, { bubbles: true, cancelable: true }],
  // https://reactjs.org/docs/events.html#focus-events
  focus: [FocusEvent, { bubbles: false, cancelable: false }],
  blur: [FocusEvent, { bubbles: false, cancelable: false }],
  // https://reactjs.org/docs/events.html#form-events
  change: [InputEvent, { bubbles: true, cancelable: true }, "input"],
  input: [InputEvent, { bubbles: true, cancelable: true }],
  invalid: [Event, { bubbles: false, cancelable: true }],
  submit: [Event, { bubbles: true, cancelable: true }],
  // https://reactjs.org/docs/events.html#mouse-events
  click: [MouseEvent, { bubbles: true, cancelable: true, button: 0 }],
  contextMenu: [MouseEvent, { bubbles: true, cancelable: true }],
  doubleClick: [MouseEvent, { bubbles: true, cancelable: true }, "dblclick"],
  drag: [DragEvent, { bubbles: true, cancelable: true }],
  dragEnd: [DragEvent, { bubbles: true, cancelable: false }],
  dragEnter: [DragEvent, { bubbles: true, cancelable: true }],
  dragExit: [DragEvent, { bubbles: true, cancelable: false }],
  dragLeave: [DragEvent, { bubbles: true, cancelable: false }],
  dragOver: [DragEvent, { bubbles: true, cancelable: true }],
  dragStart: [DragEvent, { bubbles: true, cancelable: true }],
  drop: [DragEvent, { bubbles: true, cancelable: true }],
  mouseDown: [MouseEvent, { bubbles: true, cancelable: true }],
  mouseEnter: [MouseEvent, { bubbles: true, cancelable: true }, "mouseover"],
  mouseLeave: [MouseEvent, { bubbles: true, cancelable: true }, "mouseout"],
  mouseMove: [MouseEvent, { bubbles: true, cancelable: true }],
  mouseOut: [MouseEvent, { bubbles: true, cancelable: true }],
  mouseOver: [MouseEvent, { bubbles: true, cancelable: true }],
  mouseUp: [MouseEvent, { bubbles: true, cancelable: true }],
  // https://reactjs.org/docs/events.html#selection-events
  select: [Event, { bubbles: false, cancelable: false }, "react-select"],
  // https://reactjs.org/docs/events.html#touch-events
  touchCancel: [TouchEvent, { bubbles: true, cancelable: false }],
  touchEnd: [TouchEvent, { bubbles: true, cancelable: true }],
  touchMove: [TouchEvent, { bubbles: true, cancelable: true }],
  touchStart: [TouchEvent, { bubbles: true, cancelable: true }],
  // https://reactjs.org/docs/events.html#ui-events
  scroll: [UIEvent, { bubbles: false, cancelable: false }],
  // https://reactjs.org/docs/events.html#wheel-events
  wheel: [WheelEvent, { bubbles: true, cancelable: true }],
  // https://reactjs.org/docs/events.html#media-events
  abort: [Event, { bubbles: false, cancelable: false }],
  canPlay: [Event, { bubbles: false, cancelable: false }],
  canPlayThrough: [Event, { bubbles: false, cancelable: false }],
  durationChange: [Event, { bubbles: false, cancelable: false }],
  emptied: [Event, { bubbles: false, cancelable: false }],
  encrypted: [Event, { bubbles: false, cancelable: false }],
  ended: [Event, { bubbles: false, cancelable: false }],
  // error: [Event, { bubbles: false, cancelable: false }],
  loadedData: [Event, { bubbles: false, cancelable: false }],
  loadedMetadata: [Event, { bubbles: false, cancelable: false }],
  loadStart: [ProgressEvent, { bubbles: false, cancelable: false }],
  pause: [Event, { bubbles: false, cancelable: false }],
  play: [Event, { bubbles: false, cancelable: false }],
  playing: [Event, { bubbles: false, cancelable: false }],
  progress: [ProgressEvent, { bubbles: false, cancelable: false }],
  rateChange: [Event, { bubbles: false, cancelable: false }],
  seeked: [Event, { bubbles: false, cancelable: false }],
  seeking: [Event, { bubbles: false, cancelable: false }],
  stalled: [Event, { bubbles: false, cancelable: false }],
  suspend: [Event, { bubbles: false, cancelable: false }],
  timeUpdate: [Event, { bubbles: false, cancelable: false }],
  volumeChange: [Event, { bubbles: false, cancelable: false }],
  waiting: [Event, { bubbles: false, cancelable: false }],
  // https://reactjs.org/docs/events.html#image-events
  load: [UIEvent, { bubbles: false, cancelable: false }],
  error: [Event, { bubbles: false, cancelable: false }],
  // https://reactjs.org/docs/events.html#animation-events
  animationStart: [AnimationEvent, { bubbles: true, cancelable: false }],
  animationEnd: [AnimationEvent, { bubbles: true, cancelable: false }],
  animationIteration: [AnimationEvent, { bubbles: true, cancelable: false }],
  // https://reactjs.org/docs/events.html#transition-events
  transitionEnd: [TransitionEvent, { bubbles: true, cancelable: true }]
};

function simulate(element, event) {
  return element.dispatchEvent(event);
}

Object.entries(eventMap).forEach(
  ([key, [Event, defaultInit, eventName = key.toLowerCase()]]) => {
    simulate[key] = (node, init) => {
      const eventInit = Object.assign({}, defaultInit, init);
      const event = new Event(eventName, eventInit);
      return simulate(node, event);
    };
  }
);

export default simulate;
