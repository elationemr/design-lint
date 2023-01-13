import { createErrorObject } from "../../lintingFunctions";
import normalizeStyleKey from "../utils/normalizeStyleKey";
import { categorizedTokens, Token } from "../../data/allColorTokens";
import getStyleName from "../utils/getStyleName";
import { NormalizedFillStyleID } from "../../types/figma";

/**
 * Check that text layers only use valid (i.e., intended for text) color tokens.
 */
export default function invalidTextFills(node, errors) {
  const invalidColorTokens: ReadonlyArray<Token> = [
    ...categorizedTokens.surface,
    ...categorizedTokens.border
  ];
  let nodeFillStyle: NormalizedFillStyleID = normalizeStyleKey(
    node.fillStyleId
  );

  // Error if fill uses an invalid color token
  if (invalidColorTokens.some(token => token.id === nodeFillStyle)) {
    return errors.push(
      createErrorObject(
        node,
        "fill",
        "Invalid text color",
        `${getStyleName(node.fillStyleId)} is inappropriate for text`
      )
    );
  }
}
