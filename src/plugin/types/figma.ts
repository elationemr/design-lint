/**
 * Normalized fill style ID from the Figma API.
 * - Normalized IDs have already removed Figma's
 *   prefixes and suffixes. For an unnormalized ID,
 *   use `FillStyleID`.
 */
export type NormalizedFillStyleID = string;

/**
 * Fill style ID directly from the Figma API.
 * - These are NOT normalized and include Figma's
 *   prefixes and suffixes. For a normalized ID,
 *   use `NormalizedFillStyleID`.
 */
export type FillStyleID = string;

export type Token = {
  /**
   * Figma's unique style IDs.
   * - All IDs are assumed to be normalized (e.g., removed 'S:').
   */
  id: string;
  /**
   * kebab-case VDS token name.
   * - vds-gray-100
   */
  name: string;
};

export type TokenGroup = {
  [key: string]: ReadonlyArray<Token>;
};
