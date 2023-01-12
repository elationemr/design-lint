import { createErrorObject } from "../../lintingFunctions";
import normalizeStyleKey from "../utils/normalizeStyleKey";
import { categorizedTokens, Token } from "../../data/allColorTokens";

/**
 * Check that text layers only use valid (i.e., intended for text) color tokens.
 */
export default function invalidTextFills(node, errors) {
  const fillsToCheck: ReadonlyArray<Token> = [
    ...categorizedTokens.surface,
    ...categorizedTokens.border
  ];

  let nodeFillStyle: PaintStyle["id"] = normalizeStyleKey(node.fillStyleId);

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

  // If the node (layer) has a fill style, then check to see if there's an error.
  if (nodeFillStyle !== "") {
    console.log("node =>", node);
    if (fillsToCheck.some(token => token.id === nodeFillStyle)) {
      const styleName = figma.getStyleById(node.fillStyleId).name;

      return errors.push(
        createErrorObject(
          node,
          "fill",
          "Invalid text color",
          `${styleName} is an invalid text color`
        )
      );
    }
  }
}
