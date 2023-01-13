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
