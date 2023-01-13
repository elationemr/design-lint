import { createErrorObject } from "../../lintingFunctions";
import { deprecatedColorTokens } from "../../data/allColorTokens";
import normalizeStyleKey from "../utils/normalizeStyleKey";
import getStyleName from "../utils/getStyleName";
import { NormalizedFillStyleID } from "../../types/figma";

/**
 * Checks if fill style uses a deprecated Vital color.
 */
export default function checkDeprecatedColors(node, errors) {
  const nodeFillStyle: NormalizedFillStyleID = normalizeStyleKey(
    node.fillStyleId
  );

  if (node.fillStyleId !== "") {
    if (deprecatedColorTokens.some(token => token.id === nodeFillStyle)) {
      return errors.push(
        createErrorObject(
          node,
          "fill",
          "Deprecated color fill",
          `${getStyleName(node.fillStyleId)} is invalid in production`
        )
      );
    }
  }

  if (node.strokeStyleId !== "") {
    const nodeStrokeStyle: NormalizedFillStyleID = normalizeStyleKey(
      node.strokeStyleId
    );

    if (deprecatedColorTokens.some(token => token.id === nodeStrokeStyle)) {
      return errors.push(
        createErrorObject(
          node,
          "stroke",
          "Deprecated color stroke",
          `${getStyleName(node.strokeStyleId)} is invalid in production`
        )
      );
    }
  }
}
