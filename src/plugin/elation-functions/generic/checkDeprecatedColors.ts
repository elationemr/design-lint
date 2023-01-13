import { createErrorObject } from "../../lintingFunctions";
import { deprecatedColorTokens } from "../../data/allColorTokens";
import normalizeStyleKey from "../utils/normalizeStyleKey";
import getStyleName from "../utils/getStyleName";
import { NormalizedFillStyleID } from "../../types/figma";

/**
 * Checks if fill style uses a deprecated Vital color.
 */
export default function checkDeprecatedColors(node, errors) {
  let nodeFillStyle: NormalizedFillStyleID = normalizeStyleKey(
    node.fillStyleId
  );

  if (deprecatedColorTokens.some(token => token.id === nodeFillStyle)) {
    return errors.push(
      createErrorObject(
        node,
        "fill",
        "Deprecated color",
        `${getStyleName(node.fillStyleId)} is invalid in production`
      )
    );
  }
}
