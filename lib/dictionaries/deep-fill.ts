/**
 * Fill missing dictionary keys from the English source of truth.
 * Preserves existing locale values when present; takes English for new keys/shape changes.
 */
export function deepFill<T>(base: T, overlay: unknown): T {
  if (Array.isArray(base)) {
    if (Array.isArray(overlay) && overlay.length === base.length) {
      return overlay.map((item, i) => deepFill(base[i], item)) as T;
    }
    return base;
  }

  if (base !== null && typeof base === "object") {
    const out: Record<string, unknown> = {};
    const src = overlay && typeof overlay === "object" ? (overlay as Record<string, unknown>) : {};
    for (const key of Object.keys(base as object)) {
      out[key] = key in src ? deepFill((base as Record<string, unknown>)[key], src[key]) : (base as Record<string, unknown>)[key];
    }
    return out as T;
  }

  return (overlay === undefined ? base : overlay) as T;
}
