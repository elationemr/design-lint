import checkDeprecatedColors from "./checkDeprecatedColors";
import checkInvalidStrokeFills from "../strokes/checkInvalidStrokeFills";

export default function vitalChecks(node, errors) {
  checkDeprecatedColors(node, errors);
  checkInvalidStrokeFills(node, errors);
}
