chrome.action.onClicked.addListener(async (tab) => {
  let allTabs = await chrome.tabs.query({});
  for (let t of allTabs) {
      // Don't close the active tab, pinned tabs, or Google Meet tabs
      if (t.id !== tab.id && !t.pinned && !t.url.includes('meet.google.com')) {
          chrome.tabs.remove(t.id);
      }
  }
});