/**
 *
 * @type {string}
 * - Fix unreadable text with forcing the web to light theme
 * - Removing Logo and navigation menu on web
 * - Fix horizontal scrolling
 * - Remove header content
 */

export const INJECTED_JAVASCRIPT = `
  (function() {
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.style.overflowX = 'hidden';
    var topBar = document.querySelector('.top-bar');
    if (topBar) {
      topBar.style.display = 'none';
    }
    const midHeaderWrap = document.querySelector('.mid-header-wrap');
    if (midHeaderWrap) {
      midHeaderWrap.style.display = 'none';
    }
    const containerElement = document.querySelector('.navigation-inner');
    if (containerElement) {
      containerElement.style.display = 'none';
    }
    const headerContent = document.querySelector('.page-header-content');
    if (headerContent) {
    headerContent.style.display = 'none';
    }
  })();
`;
