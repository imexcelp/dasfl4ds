(() => {
  function hideTeamsButton() {
    const hideButtonStyles = `
      button[data-element-id="workspace-tab-teams"] {
        display: none !important;
      }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = hideButtonStyles;
    document.head.appendChild(styleElement);

    console.log('Teams button hidden successfully');
  }

  // Check if the document is already loaded
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    hideTeamsButton();
  } else {
    // If not, wait for it to load
    document.addEventListener('DOMContentLoaded', hideTeamsButton);
  }
})();
