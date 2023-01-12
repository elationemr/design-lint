/**
 * We strip the additional style key characters so we can check
 * to see if the fill is being used incorrectly.
 */
export default function normalizeStyleKey(key: string): string {
  return key.replace("S:", "").split(",")[0];
}
