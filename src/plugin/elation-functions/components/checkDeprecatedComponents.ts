import { createErrorObject } from "../../lintingFunctions";

export default function checkDeprecatedComponents(node, errors) {
  // Only review if component is from an outside library. We
  // ignore local components when checking.
  if (typeof node.mainComponent !== "undefined" && node.mainComponent.remote) {
    const name: string = node.name;
    const mainComponentName = node.mainComponent.name;
    const mainComponentDescriptionFirstCharacter = node.mainComponent.parent
      ? node.mainComponent.parent.description.split()[0]
      : "";

    if (
      mainComponentName.toLocaleLowerCase().includes("deprecated") ||
      mainComponentName.includes("⚠️") ||
      mainComponentDescriptionFirstCharacter.includes("⚠️")
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
