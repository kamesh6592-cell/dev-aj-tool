/**
 * Injects the DeepSite badge script into HTML content before the closing </body> tag.
 * If the script already exists, it ensures only one instance is present.
 * 
 * @param html - The HTML content to inject the script into
 * @returns The HTML content with the badge script injected
 */
export function injectDeepSiteBadge(html: string): string {
  const badgeScript = '<script src="https://huggingface.co/deepsite/deepsite-badge.js"></script>';
  
  // Remove any existing badge script to avoid duplicates
  const cleanedHtml = html.replace(
    /<script\s+src=["']https:\/\/deepsite\.hf\.co\/deepsite-badge\.js["']\s*><\/script>\s*/gi,
    ''
  );
  
  // Check if there's a closing body tag
  const bodyCloseIndex = cleanedHtml.lastIndexOf('</body>');
  
  if (bodyCloseIndex !== -1) {
    // Inject the script before the closing </body> tag
    return (
      cleanedHtml.slice(0, bodyCloseIndex) +
      badgeScript +
      '\n' +
      cleanedHtml.slice(bodyCloseIndex)
    );
  }
  
  // If no closing body tag, append the script at the end
  return cleanedHtml + '\n' + badgeScript;
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

