/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/entry/background.js ***!
  \*********************************/
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
          urlContains: 'linkedin.com/'
        }
      }), new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {
          urlContains: 'linkedin.com/school/'
        }
      })],
      actions: [new chrome.declarativeContent.ShowAction()]
    }; // Finally, apply our new array of rules

    let rules = [linkedinRule];
    chrome.declarativeContent.onPageChanged.addRules(rules);
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFFO0FBQ0E7QUFDQUEsTUFBTSxDQUFDQyxPQUFQLENBQWVDLFdBQWYsQ0FBMkJDLFdBQTNCLENBQXVDLE1BQU07RUFDM0M7RUFDQUgsTUFBTSxDQUFDSSxNQUFQLENBQWNDLE9BQWQsR0FGMkMsQ0FJM0M7O0VBQ0FMLE1BQU0sQ0FBQ00sa0JBQVAsQ0FBMEJDLGFBQTFCLENBQXdDQyxXQUF4QyxDQUFvREMsU0FBcEQsRUFBK0QsTUFBTTtJQUNuRTtJQUNBLElBQUlDLFlBQVksR0FBRztNQUNqQkMsVUFBVSxFQUFFLENBQ1YsSUFBSVgsTUFBTSxDQUFDTSxrQkFBUCxDQUEwQk0sZ0JBQTlCLENBQStDO1FBQzdDQyxPQUFPLEVBQUU7VUFBRUMsV0FBVyxFQUFFO1FBQWY7TUFEb0MsQ0FBL0MsQ0FEVSxFQUlWLElBQUlkLE1BQU0sQ0FBQ00sa0JBQVAsQ0FBMEJNLGdCQUE5QixDQUErQztRQUM3Q0MsT0FBTyxFQUFFO1VBQUVDLFdBQVcsRUFBRTtRQUFmO01BRG9DLENBQS9DLENBSlUsQ0FESztNQVNqQkMsT0FBTyxFQUFFLENBQUMsSUFBSWYsTUFBTSxDQUFDTSxrQkFBUCxDQUEwQlUsVUFBOUIsRUFBRDtJQVRRLENBQW5CLENBRm1FLENBY25FOztJQUNBLElBQUlDLEtBQUssR0FBRyxDQUFDUCxZQUFELENBQVo7SUFDQVYsTUFBTSxDQUFDTSxrQkFBUCxDQUEwQkMsYUFBMUIsQ0FBd0NXLFFBQXhDLENBQWlERCxLQUFqRDtFQUNELENBakJEO0FBa0JELENBdkJELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvZW50cnkvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIC8vIFdyYXAgaW4gYW4gb25JbnN0YWxsZWQgY2FsbGJhY2sgaW4gb3JkZXIgdG8gYXZvaWQgdW5uZWNlc3Nhcnkgd29ya1xuICAvLyBldmVyeSB0aW1lIHRoZSBiYWNrZ3JvdW5kIHNjcmlwdCBpcyBydW5cbiAgY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgIC8vIFBhZ2UgYWN0aW9ucyBhcmUgZGlzYWJsZWQgYnkgZGVmYXVsdCBhbmQgZW5hYmxlZCBvbiBzZWxlY3QgdGFic1xuICAgIGNocm9tZS5hY3Rpb24uZGlzYWJsZSgpO1xuXG4gICAgLy8gQ2xlYXIgYWxsIHJ1bGVzIHRvIGVuc3VyZSBvbmx5IG91ciBleHBlY3RlZCBydWxlcyBhcmUgc2V0XG4gICAgY2hyb21lLmRlY2xhcmF0aXZlQ29udGVudC5vblBhZ2VDaGFuZ2VkLnJlbW92ZVJ1bGVzKHVuZGVmaW5lZCwgKCkgPT4ge1xuICAgICAgLy8gRGVjbGFyZSBhIHJ1bGUgdG8gZW5hYmxlIHRoZSBhY3Rpb24gb24gZXhhbXBsZS5jb20gcGFnZXNcbiAgICAgIGxldCBsaW5rZWRpblJ1bGUgPSB7XG4gICAgICAgIGNvbmRpdGlvbnM6IFtcbiAgICAgICAgICBuZXcgY2hyb21lLmRlY2xhcmF0aXZlQ29udGVudC5QYWdlU3RhdGVNYXRjaGVyKHtcbiAgICAgICAgICAgIHBhZ2VVcmw6IHsgdXJsQ29udGFpbnM6ICdsaW5rZWRpbi5jb20vJyB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5ldyBjaHJvbWUuZGVjbGFyYXRpdmVDb250ZW50LlBhZ2VTdGF0ZU1hdGNoZXIoe1xuICAgICAgICAgICAgcGFnZVVybDogeyB1cmxDb250YWluczogJ2xpbmtlZGluLmNvbS9zY2hvb2wvJyB9LFxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIGFjdGlvbnM6IFtuZXcgY2hyb21lLmRlY2xhcmF0aXZlQ29udGVudC5TaG93QWN0aW9uKCldLFxuICAgICAgfTtcblxuICAgICAgLy8gRmluYWxseSwgYXBwbHkgb3VyIG5ldyBhcnJheSBvZiBydWxlc1xuICAgICAgbGV0IHJ1bGVzID0gW2xpbmtlZGluUnVsZV07XG4gICAgICBjaHJvbWUuZGVjbGFyYXRpdmVDb250ZW50Lm9uUGFnZUNoYW5nZWQuYWRkUnVsZXMocnVsZXMpO1xuICAgIH0pO1xuICB9KTtcbiJdLCJuYW1lcyI6WyJjaHJvbWUiLCJydW50aW1lIiwib25JbnN0YWxsZWQiLCJhZGRMaXN0ZW5lciIsImFjdGlvbiIsImRpc2FibGUiLCJkZWNsYXJhdGl2ZUNvbnRlbnQiLCJvblBhZ2VDaGFuZ2VkIiwicmVtb3ZlUnVsZXMiLCJ1bmRlZmluZWQiLCJsaW5rZWRpblJ1bGUiLCJjb25kaXRpb25zIiwiUGFnZVN0YXRlTWF0Y2hlciIsInBhZ2VVcmwiLCJ1cmxDb250YWlucyIsImFjdGlvbnMiLCJTaG93QWN0aW9uIiwicnVsZXMiLCJhZGRSdWxlcyJdLCJzb3VyY2VSb290IjoiIn0=