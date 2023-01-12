import { createErrorObject } from "../../lintingFunctions";
import { defaultSurfaceTokens } from "../../data/surfaceTokens";
import normalizeStyleKey from "../utils/normalizeStyleKey";

/**
 * Check that text layers only use valid (i.e., intended for text) color tokens.
 */
export default function invalidTextFills(node, errors) {
  const fillsToCheck: ReadonlyArray<PaintStyle["id"]> = [
    ...defaultSurfaceTokens
  ];

  let nodeFillStyle: PaintStyle["id"] = node.fillStyleId;

  // If there are multiple text styles on a single text layer, we can't lint it
  // we can return an error instead.
  if (typeof nodeFillStyle === "symbol") {
    return errors.push(
      createErrorObject(
        node,
        "fill",
        "Mixing two styles together",
        "Multiple Styles"
      )
    );
  }

  // We strip the additional style key characters so we can check
  // to see if the fill is being used incorrectly.
  nodeFillStyle = normalizeStyleKey(nodeFillStyle);

  // If the node (layer) has a fill style, then check to see if there's an error.
  if (nodeFillStyle !== "") {
    if (fillsToCheck.includes(nodeFillStyle)) {
      return errors.push(
        createErrorObject(
          node,
          "fill",
          "Invalid text color",
          "Using a surface color on a text layer"
        )
      );
    }
  }
}
