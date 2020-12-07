chrome.runtime.onInstalled.addListener(function () {
    console.log('Mbolo Word');

    chrome.tabs.onActivated.addListener(function (info) {
        chrome.tabs.get(info.tabId, function (tab) {
            if (tab.url.includes('whatsapp')) {
                console.log(tab);
                chrome.tabs.executeScript({
                    file: 'content.js',
                });
            }
        });
    });
});
