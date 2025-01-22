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

    const topBar = document.querySelector('.top-bar');
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

    const moreSpace = document.querySelector('.elementor-column[data-id="b5c1e46"]');
    if (moreSpace) {
      moreSpace.style.display = 'none';
    }

    const postCard = document.querySelector('.post-card.editor-post-card');
    if (postCard) {
      postCard.style.marginBottom = '0px';
    }
      
    const postContent = document.querySelector('.editor-post-card .post-content');
    if (postContent) {
      postContent.style.position = 'static';  // Remove absolute positioning
      postContent.style.transform = 'translateY(0)';  // Reset 'transform' property
    }
  })();
`;

