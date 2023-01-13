import { createErrorObject } from "../../lintingFunctions";

/**
 * If there are multiple text styles on a single text layer, we can't lint it
 * we can return an error instead.
 */
export default function checkMultipleStyles(node, errors) {
  if (typeof node.textStyleId === "symbol") {
    return errors.push(
      createErrorObject(
        node,
        "text",
        "Mixing styles",
        "Text with multiple styles applied cannot be linted. Break into multiple components or review manually."
      )
    );
  }
}
