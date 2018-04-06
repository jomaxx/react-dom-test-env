export function removeLineFromStack(error) {
  error.stack = error.stack.replace(/\s+at.*/, "");
}
