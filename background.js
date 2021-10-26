chrome.browserAction.onClicked.addListener(function(theCurrentTab) {
    chrome.tabs.query({}, function(allTabsThatAreOpen) {
        for (let oneOfTheTabsThatIsOpen of allTabsThatAreOpen) {
            if (oneOfTheTabsThatIsOpen.id !== theCurrentTab.id && oneOfTheTabsThatIsOpen.pinned === false) chrome.tabs.remove(oneOfTheTabsThatIsOpen.id);
        }
    })
});
