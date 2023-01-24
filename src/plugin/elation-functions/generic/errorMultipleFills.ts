import { createErrorObject } from "../../lintingFunctions";

/**
 * Return a multiple fills error.
 */
export default function errorMultipleFills(node, errors) {
  return errors.push(
    createErrorObject(
      node,
      "component_set",
      "Multiple styles",
      "Items with multiple styles applied cannot be linted. Break into multiple components or review manually."
    )
  );
}
