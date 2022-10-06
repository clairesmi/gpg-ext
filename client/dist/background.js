/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/entry/background.js ***!
  \*********************************/
// let color = '#3aa757';
// chrome.runtime.onInstalled.addListener(() => {
// chrome.storage.sync.set({ color });
// console.log('Default background color set to %cgreen', `color: ${color}`);
// Wrap in an onInstalled callback in order to avoid unnecessary work
// every time the background script is run
chrome.runtime.onInstalled.addListener(() => {
  // Page actions are disabled by default and enabled on select tabs
  chrome.action.disable(); // Clear all rules to ensure only our expected rules are set

  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    // Declare a rule to enable the action on example.com pages
    let linkedinRule = {
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {
          urlContains: '.linkedin.com/company/'
        }
      })],
      actions: [new chrome.declarativeContent.ShowAction()]
    }; // Finally, apply our new array of rules

    let rules = [linkedinRule];
    chrome.declarativeContent.onPageChanged.addRules(rules);
  });
}); // });
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUE7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsV0FBZixDQUEyQkMsV0FBM0IsQ0FBdUMsTUFBTTtFQUMzQztFQUNBSCxNQUFNLENBQUNJLE1BQVAsQ0FBY0MsT0FBZCxHQUYyQyxDQUkzQzs7RUFDQUwsTUFBTSxDQUFDTSxrQkFBUCxDQUEwQkMsYUFBMUIsQ0FBd0NDLFdBQXhDLENBQW9EQyxTQUFwRCxFQUErRCxNQUFNO0lBQ25FO0lBQ0EsSUFBSUMsWUFBWSxHQUFHO01BQ2pCQyxVQUFVLEVBQUUsQ0FDVixJQUFJWCxNQUFNLENBQUNNLGtCQUFQLENBQTBCTSxnQkFBOUIsQ0FBK0M7UUFDN0NDLE9BQU8sRUFBRTtVQUFFQyxXQUFXLEVBQUU7UUFBZjtNQURvQyxDQUEvQyxDQURVLENBREs7TUFNakJDLE9BQU8sRUFBRSxDQUFDLElBQUlmLE1BQU0sQ0FBQ00sa0JBQVAsQ0FBMEJVLFVBQTlCLEVBQUQ7SUFOUSxDQUFuQixDQUZtRSxDQVduRTs7SUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBQ1AsWUFBRCxDQUFaO0lBQ0FWLE1BQU0sQ0FBQ00sa0JBQVAsQ0FBMEJDLGFBQTFCLENBQXdDVyxRQUF4QyxDQUFpREQsS0FBakQ7RUFDRCxDQWREO0FBZUQsQ0FwQkQsR0FzQkYsTSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9lbnRyeS9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxldCBjb2xvciA9ICcjM2FhNzU3JztcblxuLy8gY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAvLyBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGNvbG9yIH0pO1xuICAvLyBjb25zb2xlLmxvZygnRGVmYXVsdCBiYWNrZ3JvdW5kIGNvbG9yIHNldCB0byAlY2dyZWVuJywgYGNvbG9yOiAke2NvbG9yfWApO1xuICAvLyBXcmFwIGluIGFuIG9uSW5zdGFsbGVkIGNhbGxiYWNrIGluIG9yZGVyIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHdvcmtcbiAgLy8gZXZlcnkgdGltZSB0aGUgYmFja2dyb3VuZCBzY3JpcHQgaXMgcnVuXG4gIGNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAvLyBQYWdlIGFjdGlvbnMgYXJlIGRpc2FibGVkIGJ5IGRlZmF1bHQgYW5kIGVuYWJsZWQgb24gc2VsZWN0IHRhYnNcbiAgICBjaHJvbWUuYWN0aW9uLmRpc2FibGUoKTtcblxuICAgIC8vIENsZWFyIGFsbCBydWxlcyB0byBlbnN1cmUgb25seSBvdXIgZXhwZWN0ZWQgcnVsZXMgYXJlIHNldFxuICAgIGNocm9tZS5kZWNsYXJhdGl2ZUNvbnRlbnQub25QYWdlQ2hhbmdlZC5yZW1vdmVSdWxlcyh1bmRlZmluZWQsICgpID0+IHtcbiAgICAgIC8vIERlY2xhcmUgYSBydWxlIHRvIGVuYWJsZSB0aGUgYWN0aW9uIG9uIGV4YW1wbGUuY29tIHBhZ2VzXG4gICAgICBsZXQgbGlua2VkaW5SdWxlID0ge1xuICAgICAgICBjb25kaXRpb25zOiBbXG4gICAgICAgICAgbmV3IGNocm9tZS5kZWNsYXJhdGl2ZUNvbnRlbnQuUGFnZVN0YXRlTWF0Y2hlcih7XG4gICAgICAgICAgICBwYWdlVXJsOiB7IHVybENvbnRhaW5zOiAnLmxpbmtlZGluLmNvbS9jb21wYW55LycgfSxcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBhY3Rpb25zOiBbbmV3IGNocm9tZS5kZWNsYXJhdGl2ZUNvbnRlbnQuU2hvd0FjdGlvbigpXSxcbiAgICAgIH07XG5cbiAgICAgIC8vIEZpbmFsbHksIGFwcGx5IG91ciBuZXcgYXJyYXkgb2YgcnVsZXNcbiAgICAgIGxldCBydWxlcyA9IFtsaW5rZWRpblJ1bGVdO1xuICAgICAgY2hyb21lLmRlY2xhcmF0aXZlQ29udGVudC5vblBhZ2VDaGFuZ2VkLmFkZFJ1bGVzKHJ1bGVzKTtcbiAgICB9KTtcbiAgfSk7XG5cbi8vIH0pOyJdLCJuYW1lcyI6WyJjaHJvbWUiLCJydW50aW1lIiwib25JbnN0YWxsZWQiLCJhZGRMaXN0ZW5lciIsImFjdGlvbiIsImRpc2FibGUiLCJkZWNsYXJhdGl2ZUNvbnRlbnQiLCJvblBhZ2VDaGFuZ2VkIiwicmVtb3ZlUnVsZXMiLCJ1bmRlZmluZWQiLCJsaW5rZWRpblJ1bGUiLCJjb25kaXRpb25zIiwiUGFnZVN0YXRlTWF0Y2hlciIsInBhZ2VVcmwiLCJ1cmxDb250YWlucyIsImFjdGlvbnMiLCJTaG93QWN0aW9uIiwicnVsZXMiLCJhZGRSdWxlcyJdLCJzb3VyY2VSb290IjoiIn0=