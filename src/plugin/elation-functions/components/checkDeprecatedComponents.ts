import { createErrorObject } from "../../lintingFunctions";

export default function checkDeprecatedComponents(node, errors) {
  // Only review if component is from an outside library. We
  // ignore local components when checking.
  if (node.mainComponent.remote) {
    const name: string = node.name;
    const mainComponentName = node.mainComponent.name;
    const mainComponentDescription = node.mainComponent.description;

    if (
      mainComponentName.toLocaleLowerCase().includes("deprecated") ||
      mainComponentName.includes("⚠️") ||
      mainComponentDescription.includes("⚠️")
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
