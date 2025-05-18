chrome.action.onClicked.addListener(async (tab) => {
    let allTabs = await chrome.tabs.query({});
    for (let t of allTabs) {
        if (t.id !== tab.id && !t.pinned) {
            chrome.tabs.remove(t.id);
        }
    }
});
