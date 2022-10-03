/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/entry/background.js ***!
  \*********************************/
// let color = '#3aa757';
chrome.runtime.onInstalled.addListener(() => {
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
            hostSuffix: '.linkedin.com/company/'
          }
        })],
        actions: [new chrome.declarativeContent.ShowAction()]
      }; // Finally, apply our new array of rules

      let rules = [linkedinRule];
      chrome.declarativeContent.onPageChanged.addRules(rules);
    });
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUFBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxXQUFmLENBQTJCQyxXQUEzQixDQUF1QyxNQUFNO0VBQzNDO0VBQ0E7RUFDQTtFQUNBO0VBQ0FILE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxXQUFmLENBQTJCQyxXQUEzQixDQUF1QyxNQUFNO0lBQzNDO0lBQ0FILE1BQU0sQ0FBQ0ksTUFBUCxDQUFjQyxPQUFkLEdBRjJDLENBSTNDOztJQUNBTCxNQUFNLENBQUNNLGtCQUFQLENBQTBCQyxhQUExQixDQUF3Q0MsV0FBeEMsQ0FBb0RDLFNBQXBELEVBQStELE1BQU07TUFDbkU7TUFDQSxJQUFJQyxZQUFZLEdBQUc7UUFDakJDLFVBQVUsRUFBRSxDQUNWLElBQUlYLE1BQU0sQ0FBQ00sa0JBQVAsQ0FBMEJNLGdCQUE5QixDQUErQztVQUM3Q0MsT0FBTyxFQUFFO1lBQUVDLFVBQVUsRUFBRTtVQUFkO1FBRG9DLENBQS9DLENBRFUsQ0FESztRQU1qQkMsT0FBTyxFQUFFLENBQUMsSUFBSWYsTUFBTSxDQUFDTSxrQkFBUCxDQUEwQlUsVUFBOUIsRUFBRDtNQU5RLENBQW5CLENBRm1FLENBV25FOztNQUNBLElBQUlDLEtBQUssR0FBRyxDQUFDUCxZQUFELENBQVo7TUFDQVYsTUFBTSxDQUFDTSxrQkFBUCxDQUEwQkMsYUFBMUIsQ0FBd0NXLFFBQXhDLENBQWlERCxLQUFqRDtJQUNELENBZEQ7RUFlRCxDQXBCRDtBQXNCRCxDQTNCRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2VudHJ5L2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGV0IGNvbG9yID0gJyMzYWE3NTcnO1xuXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gIC8vIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgY29sb3IgfSk7XG4gIC8vIGNvbnNvbGUubG9nKCdEZWZhdWx0IGJhY2tncm91bmQgY29sb3Igc2V0IHRvICVjZ3JlZW4nLCBgY29sb3I6ICR7Y29sb3J9YCk7XG4gIC8vIFdyYXAgaW4gYW4gb25JbnN0YWxsZWQgY2FsbGJhY2sgaW4gb3JkZXIgdG8gYXZvaWQgdW5uZWNlc3Nhcnkgd29ya1xuICAvLyBldmVyeSB0aW1lIHRoZSBiYWNrZ3JvdW5kIHNjcmlwdCBpcyBydW5cbiAgY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgIC8vIFBhZ2UgYWN0aW9ucyBhcmUgZGlzYWJsZWQgYnkgZGVmYXVsdCBhbmQgZW5hYmxlZCBvbiBzZWxlY3QgdGFic1xuICAgIGNocm9tZS5hY3Rpb24uZGlzYWJsZSgpO1xuXG4gICAgLy8gQ2xlYXIgYWxsIHJ1bGVzIHRvIGVuc3VyZSBvbmx5IG91ciBleHBlY3RlZCBydWxlcyBhcmUgc2V0XG4gICAgY2hyb21lLmRlY2xhcmF0aXZlQ29udGVudC5vblBhZ2VDaGFuZ2VkLnJlbW92ZVJ1bGVzKHVuZGVmaW5lZCwgKCkgPT4ge1xuICAgICAgLy8gRGVjbGFyZSBhIHJ1bGUgdG8gZW5hYmxlIHRoZSBhY3Rpb24gb24gZXhhbXBsZS5jb20gcGFnZXNcbiAgICAgIGxldCBsaW5rZWRpblJ1bGUgPSB7XG4gICAgICAgIGNvbmRpdGlvbnM6IFtcbiAgICAgICAgICBuZXcgY2hyb21lLmRlY2xhcmF0aXZlQ29udGVudC5QYWdlU3RhdGVNYXRjaGVyKHtcbiAgICAgICAgICAgIHBhZ2VVcmw6IHsgaG9zdFN1ZmZpeDogJy5saW5rZWRpbi5jb20vY29tcGFueS8nIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgYWN0aW9uczogW25ldyBjaHJvbWUuZGVjbGFyYXRpdmVDb250ZW50LlNob3dBY3Rpb24oKV0sXG4gICAgICB9O1xuXG4gICAgICAvLyBGaW5hbGx5LCBhcHBseSBvdXIgbmV3IGFycmF5IG9mIHJ1bGVzXG4gICAgICBsZXQgcnVsZXMgPSBbbGlua2VkaW5SdWxlXTtcbiAgICAgIGNocm9tZS5kZWNsYXJhdGl2ZUNvbnRlbnQub25QYWdlQ2hhbmdlZC5hZGRSdWxlcyhydWxlcyk7XG4gICAgfSk7XG4gIH0pO1xuXG59KTsiXSwibmFtZXMiOlsiY2hyb21lIiwicnVudGltZSIsIm9uSW5zdGFsbGVkIiwiYWRkTGlzdGVuZXIiLCJhY3Rpb24iLCJkaXNhYmxlIiwiZGVjbGFyYXRpdmVDb250ZW50Iiwib25QYWdlQ2hhbmdlZCIsInJlbW92ZVJ1bGVzIiwidW5kZWZpbmVkIiwibGlua2VkaW5SdWxlIiwiY29uZGl0aW9ucyIsIlBhZ2VTdGF0ZU1hdGNoZXIiLCJwYWdlVXJsIiwiaG9zdFN1ZmZpeCIsImFjdGlvbnMiLCJTaG93QWN0aW9uIiwicnVsZXMiLCJhZGRSdWxlcyJdLCJzb3VyY2VSb290IjoiIn0=