import { createErrorObject } from "../../lintingFunctions";

export default function checkDeprecatedInstance(node, errors) {
  // Only review if instance is from an outside library. We
  // ignore local instances when checking.
  if (
    typeof node.mainComponent !== "undefined" &&
    node.type === "INSTANCE" &&
    node.mainComponent.remote
  ) {
    const name: string = node.name;
    const mainComponentDescriptionFirstCharacter = node.mainComponent.parent
      ? node.mainComponent.parent.description.split()[0]
      : "";

    if (
      name.toLocaleLowerCase().includes("deprecated") ||
      name.includes("⚠️") ||
      mainComponentDescriptionFirstCharacter === "⚠️"
    ) {
      return errors.push(
        createErrorObject(
          node,
          "component",
          "Deprecated component",
          `Replace: ${name}`
        )
      );
    }
  }
}
