/**
 * Helper to ensure asset URLs properly include the base path
 * for both local development ('/') and GitHub Pages ('/POS-V4/').
 */
export const asset = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

export default asset;

