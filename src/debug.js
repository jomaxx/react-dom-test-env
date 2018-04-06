import prettyFormat from "pretty-format";
import { removeLineFromStack } from "./utils";

function debug(node) {
  const error = new Error(
    prettyFormat(node, {
      plugins: [prettyFormat.plugins.DOMElement]
    })
  );

  removeLineFromStack(error);

  throw error;
}

export default debug;
