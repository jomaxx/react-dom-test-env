import React from "react";
import { mount, unmount, find, simulate } from "react-dom-test-env";

afterEach(unmount);

describe("Clipboard Events", () => {
  [["copy", "onCopy"], ["cut", "onCut"], ["paste", "onPaste"]].forEach(
    ([eventName, propName]) => {
      it(`simulates ${eventName}`, () => {
        const spy = jest.fn();
        const props = { [propName]: spy };
        mount(<input {...props} />);
        simulate[eventName](find("input"));
        expect(spy).toHaveBeenCalledTimes(1);
      });
    }
  );
});

describe("Composition Events", () => {
  [
    ["compositionEnd", "onCompositionEnd"],
    ["compositionStart", "onCompositionStart"],
    ["compositionUpdate", "onCompositionUpdate"]
  ].forEach(([eventName, propName]) => {
    it(`simulates ${eventName}`, () => {
      const spy = jest.fn();
      const props = { [propName]: spy };
      mount(<input {...props} />);
      simulate[eventName](find("input"));
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});

describe("Keyboard Events", () => {
  [
    ["keyDown", "onKeyDown"],
    ["keyPress", "onKeyPress"],
    ["keyUp", "onKeyUp"]
  ].forEach(([eventName, propName]) => {
    it(`simulates ${eventName}`, () => {
      const spy = jest.fn();
      const props = { [propName]: spy };
      mount(<input {...props} />);
      simulate[eventName](find("input"));
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});

describe("Focus Events", () => {
  [["focus", "onFocus"], ["blur", "onBlur"]].forEach(
    ([eventName, propName]) => {
      it(`simulates ${eventName}`, () => {
        const spy = jest.fn();
        const props = { [propName]: spy };
        mount(<input {...props} />);
        simulate[eventName](find("input"));
        expect(spy).toHaveBeenCalledTimes(1);
      });
    }
  );
});

describe("Form Events", () => {
  [["change", "onChange"]].forEach(([eventName, propName]) => {
    it.skip(`simulates ${eventName}`, () => {
      const spy = jest.fn();
      const props = { [propName]: spy };
      mount(<input {...props} />);
      simulate[eventName](find("input"));
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  [["input", "onInput"]].forEach(([eventName, propName]) => {
    it(`simulates ${eventName}`, () => {
      const spy = jest.fn();
      const props = { [propName]: spy };
      mount(<input {...props} />);
      simulate[eventName](find("input"));
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  [["invalid", "onInvalid"]].forEach(([eventName, propName]) => {
    it.skip(`simulates ${eventName}`, () => {
      const spy = jest.fn();
      const props = { [propName]: spy };
      mount(<form {...props} />);
      simulate[eventName](find("form"));
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  [["submit", "onSubmit"]].forEach(([eventName, propName]) => {
    it(`simulates ${eventName}`, () => {
      const spy = jest.fn();
      const props = { [propName]: spy };
      mount(<form {...props} />);
      simulate[eventName](find("form"));
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});

describe("Mouse Events", () => {
  [
    ["click", "onClick"],
    ["contextMenu", "onContextMenu"],
    ["doubleClick", "onDoubleClick"],
    ["drag", "onDrag"],
    ["dragEnd", "onDragEnd"],
    ["dragEnter", "onDragEnter"],
    ["dragExit", "onDragExit"],
    ["dragLeave", "onDragLeave"],
    ["dragOver", "onDragOver"],
    ["dragStart", "onDragStart"],
    ["drop", "onDrop"],
    ["mouseDown", "onMouseDown"],
    ["mouseEnter", "onMouseEnter"],
    ["mouseLeave", "onMouseLeave"],
    ["mouseMove", "onMouseMove"],
    ["mouseOut", "onMouseOut"],
    ["mouseOver", "onMouseOver"],
    ["mouseUp", "onMouseUp"]
  ].forEach(([eventName, propName]) => {
    it(`simulates ${eventName}`, () => {
      const spy = jest.fn();
      const props = { [propName]: spy };
      mount(<button {...props} />);
      simulate[eventName](find("button"));
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});

describe.skip("Selection Events", () => {
  [["select", "onSelect"]].forEach(([eventName, propName]) => {
    it(`simulates ${eventName}`, () => {
      const spy = jest.fn();
      const props = { [propName]: spy };
      mount(<input {...props} />);
      simulate[eventName](find("input"));
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});

describe("Touch Events", () => {
  [
    ["touchCancel", "onTouchCancel"],
    ["touchEnd", "onTouchEnd"],
    ["touchMove", "onTouchMove"],
    ["touchStart", "onTouchStart"]
  ].forEach(([eventName, propName]) => {
    it(`simulates ${eventName}`, () => {
      const spy = jest.fn();
      const props = { [propName]: spy };
      mount(<button {...props} />);
      simulate[eventName](find("button"));
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});

describe("UI Events", () => {
  [["scroll", "onScroll"]].forEach(([eventName, propName]) => {
    it(`simulates ${eventName}`, () => {
      const spy = jest.fn();
      const props = { [propName]: spy };
      mount(<div {...props} />);
      simulate[eventName](find("div"));
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});

describe("Wheel Events", () => {
  [["wheel", "onWheel"]].forEach(([eventName, propName]) => {
    it(`simulates ${eventName}`, () => {
      const spy = jest.fn();
      const props = { [propName]: spy };
      mount(<div {...props} />);
      simulate[eventName](find("div"));
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});

describe("Media Events", () => {
  [
    ["abort", "onAbort"],
    ["canPlay", "onCanPlay"],
    ["canPlayThrough", "onCanPlayThrough"],
    ["durationChange", "onDurationChange"],
    ["emptied", "onEmptied"],
    ["encrypted", "onEncrypted"],
    ["ended", "onEnded"],
    ["error", "onError"],
    ["loadedData", "onLoadedData"],
    ["loadedMetadata", "onLoadedMetadata"],
    ["loadStart", "onLoadStart"],
    ["pause", "onPause"],
    ["play", "onPlay"],
    ["playing", "onPlaying"],
    ["progress", "onProgress"],
    ["rateChange", "onRateChange"],
    ["seeked", "onSeeked"],
    ["seeking", "onSeeking"],
    ["stalled", "onStalled"],
    ["suspend", "onSuspend"],
    ["timeUpdate", "onTimeUpdate"],
    ["volumeChange", "onVolumeChange"],
    ["waiting", "onWaiting"]
  ].forEach(([eventName, propName]) => {
    it(`simulates ${eventName}`, () => {
      const spy = jest.fn();
      const props = { [propName]: spy };
      mount(<video {...props} />);
      simulate[eventName](find("video"));
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});

describe("Image Events", () => {
  [["load", "onLoad"], ["error", "onError"]].forEach(
    ([eventName, propName]) => {
      it(`simulates ${eventName}`, () => {
        const spy = jest.fn();
        const props = { [propName]: spy };
        mount(<img {...props} />);
        simulate[eventName](find("img"));
        expect(spy).toHaveBeenCalledTimes(1);
      });
    }
  );
});

describe("Animation Events", () => {
  [
    ["animationStart", "onAnimationStart"],
    ["animationEnd", "onAnimationEnd"],
    ["animationIteration", "onAnimationIteration"]
  ].forEach(([eventName, propName]) => {
    it(`simulates ${eventName}`, () => {
      const spy = jest.fn();
      const props = { [propName]: spy };
      mount(<div {...props} />);
      simulate[eventName](find("div"));
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});

describe("Transition Events", () => {
  [["transitionEnd", "onTransitionEnd"]].forEach(([eventName, propName]) => {
    it(`simulates ${eventName}`, () => {
      const spy = jest.fn();
      const props = { [propName]: spy };
      mount(<div {...props} />);
      simulate[eventName](find("div"));
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
