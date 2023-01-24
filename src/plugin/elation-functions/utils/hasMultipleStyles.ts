export default function hasMultipleStyles(node): boolean {
  if (typeof node.fillStyleID === "symbol") return true;
  if (typeof node.textStyleId === "symbol") return true;

  return false;
}
