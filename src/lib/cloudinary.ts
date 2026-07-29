/**
 * Re-requests a Cloudinary image at a given width.
 *
 * Project images are stored with `w_648` baked into the URL, which is plenty
 * for a card but upscales visibly in the details dialog – that renders around
 * 688px wide, so roughly 1400 device pixels on a 2x display.
 *
 * `c_limit` means the width is a ceiling rather than a target: an original
 * smaller than the request is left alone instead of being stretched, so asking
 * for more than exists is never worse than the stored URL.
 */
export const cloudinaryWidth = (url: string, width: number): string => {
  if (!url.includes('res.cloudinary.com')) return url;

  // Transformations sit between `/upload/` and the `/v<version>/` segment, and
  // may themselves be chained with `/` (one image uses a named transform).
  return url.replace(
    /\/upload\/(.+?)\/v(\d+)\//,
    (match, transforms: string, version: string) => {
      const withoutWidth = transforms
        .split(',')
        .filter((part) => !/^(w_\d+|c_\w+)$/.test(part))
        .join(',');

      return `/upload/${withoutWidth},w_${width},c_limit/v${version}/`;
    },
  );
};
