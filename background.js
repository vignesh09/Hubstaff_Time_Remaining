chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == "complete") {
    chrome.windows.getAll({ populate: true }, function (windows) {
      windows.forEach(function (window) {
        window.tabs.forEach(function (tab) {
          //collect all of the urls here, I will just log them instead
          if (tab.url.includes("hubstaff")) {
            console.log(tab.id);
            chrome.tabs.executeScript(tab.id, { file: "jquery.js" }, () =>
              chrome.tabs.executeScript(tab.id, { file: "foreground.js" })
            );
          }
        });
      });
    });
  }
});
window.time_worked = 0;
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message);
  window.time_worked = message || null;
});
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log("got it");
// });
