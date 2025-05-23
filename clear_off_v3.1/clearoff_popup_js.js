document.addEventListener('DOMContentLoaded', function() {
  const clearButton = document.getElementById('clearTabs');
  
  clearButton.addEventListener('click', function() {
    chrome.tabs.query({}, function(tabs) {
      const tabsToClose = [];
      
      tabs.forEach(function(tab) {
        // Keep tab open if it's:
        // 1. Pinned
        // 2. Active (currently selected)
        // 3. A Google Meet URL
        const isGoogleMeet = tab.url && tab.url.includes('https://meet.google.com/');
        
        if (!tab.pinned && !tab.active && !isGoogleMeet) {
          tabsToClose.push(tab.id);
        }
      });
      
      if (tabsToClose.length > 0) {
        chrome.tabs.remove(tabsToClose, function() {
          // Update button text to show completion
          clearButton.textContent = `Closed ${tabsToClose.length} tabs`;
          clearButton.style.background = 'rgba(76, 175, 80, 0.3)';
          
          // Reset button after 2 seconds
          setTimeout(function() {
            clearButton.textContent = 'Clear Tabs';
            clearButton.style.background = 'rgba(255, 255, 255, 0.2)';
          }, 2000);
        });
      } else {
        // No tabs to close
        clearButton.textContent = 'No tabs to close';
        clearButton.style.background = 'rgba(255, 193, 7, 0.3)';
        
        setTimeout(function() {
          clearButton.textContent = 'Clear Tabs';
          clearButton.style.background = 'rgba(255, 255, 255, 0.2)';
        }, 2000);
      }
    });
  });
});