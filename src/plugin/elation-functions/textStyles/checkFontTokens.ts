import { createErrorObject } from "../../lintingFunctions";
import normalizeStyleKey from "../utils/normalizeStyleKey";
import getStyleName from "../utils/getStyleName";
import { Token } from "../../types/figma";
import { NormalizedFillStyleID } from "../../types/figma";
import { allFontTokens } from "../../data/allFontTokens";

/**
 * Check if font styles use Vital OR local tokens.
 */
export default function checkFontTokens(node, errors) {
  const validFontTokens: ReadonlyArray<Token> = [
    ...figma.getLocalTextStyles(),
    ...allFontTokens
  ];

  const normalizedTextStyleID: NormalizedFillStyleID = normalizeStyleKey(
    node.textStyleId
  );

  // Error if fill uses an invalid color token
  if (
    !validFontTokens.some(
      token => normalizeStyleKey(token.id) === normalizedTextStyleID
    )
  ) {
    return errors.push(
      createErrorObject(
        node,
        "text",
        "Invalid text style",
        `${getStyleName(node.textStyleId)} should be replaced.`
      )
    );
  }
}
