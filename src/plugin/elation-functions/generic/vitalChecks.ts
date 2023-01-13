import checkDeprecatedColors from "./checkDeprecatedColors";

export default function vitalChecks(node, errors) {
  if (node.fillStyleId !== "") {
    checkDeprecatedColors(node, errors);
  }
}
