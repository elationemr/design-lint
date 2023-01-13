import { createErrorObject } from "../../lintingFunctions";

/**
 * If there are multiple text styles on a single text layer, we can't lint it
 * we can return an error instead.
 */
export default function checkMultipleFills(node, errors) {
  if (typeof node.fillStyleID === "symbol") {
    return errors.push(
      createErrorObject(
        node,
        "fill",
        "Mixing two styles together",
        "Multiple Styles"
      )
    );
  }
}
