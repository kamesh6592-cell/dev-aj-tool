/**
 * Badge injection removed - TOMO does not inject external badges
 * 
 * @param html - The HTML content to pass through
 * @returns The HTML content unchanged
 */
export function injectDeepSiteBadge(html: string): string {
  // No badge injection for TOMO - just return the HTML as-is
  return html;
}

/**
 * Checks if a page path represents the main index page
 * 
 * @param path - The page path to check
 * @returns True if the path represents the main index page
 */
export function isIndexPage(path: string): boolean {
  const normalizedPath = path.toLowerCase();
  return (
    normalizedPath === '/' ||
    normalizedPath === 'index' ||
    normalizedPath === '/index' ||
    normalizedPath === 'index.html' ||
    normalizedPath === '/index.html'
  );
}

