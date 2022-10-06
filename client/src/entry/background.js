// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
  // chrome.storage.sync.set({ color });
  // console.log('Default background color set to %cgreen', `color: ${color}`);
  // Wrap in an onInstalled callback in order to avoid unnecessary work
  // every time the background script is run
  chrome.runtime.onInstalled.addListener(() => {
    // Page actions are disabled by default and enabled on select tabs
    chrome.action.disable();

    // Clear all rules to ensure only our expected rules are set
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
      // Declare a rule to enable the action on example.com pages
      let linkedinRule = {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: '.linkedin.com/company/' },
          })
        ],
        actions: [new chrome.declarativeContent.ShowAction()],
      };

      // Finally, apply our new array of rules
      let rules = [linkedinRule];
      chrome.declarativeContent.onPageChanged.addRules(rules);
    });
  });

// });