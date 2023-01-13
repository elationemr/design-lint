import { createErrorObject } from "../../lintingFunctions";
import isColorDeprecated from "../utils/isColorDeprecated";
import normalizeStyleKey from "../utils/normalizeStyleKey";
import { categorizedTokens, Token } from "../../data/allColorTokens";

/**
 * Check that text layers only use valid (i.e., intended for text) color tokens.
 */
export default function invalidTextFills(node, errors) {
  const invalidColorTokens: ReadonlyArray<Token> = [
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
    // Error if fill uses an invalid color token
    if (invalidColorTokens.some(token => token.id === nodeFillStyle)) {
      const styleName = figma.getStyleById(node.fillStyleId).name;

      return errors.push(
        createErrorObject(
          node,
          "fill",
          "Invalid text color",
          `${styleName} is inappropriate for text`
        )
      );
    }

    // Error if fill uses an deprecated color token
    if (isColorDeprecated(nodeFillStyle)) {
      const styleName = figma.getStyleById(node.fillStyleId).name;

      return errors.push(
        createErrorObject(
          node,
          "fill",
          "Deprecated color",
          `${styleName} is invalid in production`
        )
      );
    }
  }
}
