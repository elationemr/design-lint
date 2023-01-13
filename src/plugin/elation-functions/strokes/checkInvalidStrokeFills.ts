import { createErrorObject } from "../../lintingFunctions";
import normalizeStyleKey from "../utils/normalizeStyleKey";
import { categorizedTokens, Token } from "../../data/allColorTokens";
import getStyleName from "../utils/getStyleName";
import { NormalizedFillStyleID } from "../../types/figma";

/**
 * Check that text layers only use valid (i.e., intended for text) color tokens.
 */
export default function checkInvalidStrokeFills(node, errors) {
  const invalidColorTokens: ReadonlyArray<Token> = [
    ...categorizedTokens.fill,
    ...categorizedTokens.icon,
    ...categorizedTokens.surface,
    ...categorizedTokens.text
  ];
  let nodeStrokeStyleID: NormalizedFillStyleID = normalizeStyleKey(
    node.strokeStyleId
  );

  if (nodeStrokeStyleID !== "") {
    // Error if fill uses an invalid color token
    if (invalidColorTokens.some(token => token.id === nodeStrokeStyleID)) {
      return errors.push(
        createErrorObject(
          node,
          "stroke",
          "Invalid stroke color",
          `${getStyleName(node.strokeStyleId)} is inappropriate for borders`
        )
      );
    }
  }
}
