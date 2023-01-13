import { deprecatedColorTokens } from "../../data/allColorTokens";
import { NormalizedFillStyleID } from "../../types/figma";

/**
 * Checks if fill style uses a deprecated Vital color.
 */
export default function isColorDeprecated(
  fillStyleID: NormalizedFillStyleID
): boolean {
  return deprecatedColorTokens.some(token => token.id === fillStyleID);
}
