import { createErrorObject } from "../../lintingFunctions";
import normalizeStyleKey from "../utils/normalizeStyleKey";
import { categorizedTokens } from "../../data/allColorTokens";
import getStyleName from "../utils/getStyleName";
import { NormalizedFillStyleID, Token } from "../../types/figma";

/**
 * Check that text layers only use valid (i.e., intended for text) color tokens.
 */
export default function checkInvalidShapeFills(node, errors) {
  const invalidColorTokens: ReadonlyArray<Token> = [
    ...categorizedTokens.border,
    ...categorizedTokens.icon,
    ...categorizedTokens.text
  ];
  let nodeFillStyle: NormalizedFillStyleID = normalizeStyleKey(
    node.fillStyleId
  );

  if (node.fillStyleId !== "") {
    // Error if fill uses an invalid color token
    if (invalidColorTokens.some(token => token.id === nodeFillStyle)) {
      return errors.push(
        createErrorObject(
          node,
          "fill",
          "Invalid background color",
          `${getStyleName(node.fillStyleId)} is inappropriate for surfaces`
        )
      );
    }
  }
}
