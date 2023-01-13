import checkDeprecatedColors from "./checkDeprecatedColors";

export default function vitalChecks(node, errors) {
  checkDeprecatedColors(node, errors);
}
