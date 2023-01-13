import { FillStyleID } from "../../types/figma";

export default function getStyleName(fillStyleID: FillStyleID) {
  return figma.getStyleById(fillStyleID).name;
}
