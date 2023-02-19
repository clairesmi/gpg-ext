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
          urlContains: 'linkedin.com/company/'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFFO0FBQ0E7QUFDQUEsTUFBTSxDQUFDQyxPQUFQLENBQWVDLFdBQWYsQ0FBMkJDLFdBQTNCLENBQXVDLE1BQU07RUFDM0M7RUFDQUgsTUFBTSxDQUFDSSxNQUFQLENBQWNDLE9BQWQsR0FGMkMsQ0FJM0M7O0VBQ0FMLE1BQU0sQ0FBQ00sa0JBQVAsQ0FBMEJDLGFBQTFCLENBQXdDQyxXQUF4QyxDQUFvREMsU0FBcEQsRUFBK0QsTUFBTTtJQUNuRTtJQUNBLElBQUlDLFlBQVksR0FBRztNQUNqQkMsVUFBVSxFQUFFLENBQ1YsSUFBSVgsTUFBTSxDQUFDTSxrQkFBUCxDQUEwQk0sZ0JBQTlCLENBQStDO1FBQzdDQyxPQUFPLEVBQUU7VUFBRUMsV0FBVyxFQUFFO1FBQWY7TUFEb0MsQ0FBL0MsQ0FEVSxFQUlWLElBQUlkLE1BQU0sQ0FBQ00sa0JBQVAsQ0FBMEJNLGdCQUE5QixDQUErQztRQUM3Q0MsT0FBTyxFQUFFO1VBQUVDLFdBQVcsRUFBRTtRQUFmO01BRG9DLENBQS9DLENBSlUsQ0FESztNQVNqQkMsT0FBTyxFQUFFLENBQUMsSUFBSWYsTUFBTSxDQUFDTSxrQkFBUCxDQUEwQlUsVUFBOUIsRUFBRDtJQVRRLENBQW5CLENBRm1FLENBY25FOztJQUNBLElBQUlDLEtBQUssR0FBRyxDQUFDUCxZQUFELENBQVo7SUFDQVYsTUFBTSxDQUFDTSxrQkFBUCxDQUEwQkMsYUFBMUIsQ0FBd0NXLFFBQXhDLENBQWlERCxLQUFqRDtFQUNELENBakJEO0FBa0JELENBdkJELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvZW50cnkvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIC8vIFdyYXAgaW4gYW4gb25JbnN0YWxsZWQgY2FsbGJhY2sgaW4gb3JkZXIgdG8gYXZvaWQgdW5uZWNlc3Nhcnkgd29ya1xuICAvLyBldmVyeSB0aW1lIHRoZSBiYWNrZ3JvdW5kIHNjcmlwdCBpcyBydW5cbiAgY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgIC8vIFBhZ2UgYWN0aW9ucyBhcmUgZGlzYWJsZWQgYnkgZGVmYXVsdCBhbmQgZW5hYmxlZCBvbiBzZWxlY3QgdGFic1xuICAgIGNocm9tZS5hY3Rpb24uZGlzYWJsZSgpO1xuXG4gICAgLy8gQ2xlYXIgYWxsIHJ1bGVzIHRvIGVuc3VyZSBvbmx5IG91ciBleHBlY3RlZCBydWxlcyBhcmUgc2V0XG4gICAgY2hyb21lLmRlY2xhcmF0aXZlQ29udGVudC5vblBhZ2VDaGFuZ2VkLnJlbW92ZVJ1bGVzKHVuZGVmaW5lZCwgKCkgPT4ge1xuICAgICAgLy8gRGVjbGFyZSBhIHJ1bGUgdG8gZW5hYmxlIHRoZSBhY3Rpb24gb24gZXhhbXBsZS5jb20gcGFnZXNcbiAgICAgIGxldCBsaW5rZWRpblJ1bGUgPSB7XG4gICAgICAgIGNvbmRpdGlvbnM6IFtcbiAgICAgICAgICBuZXcgY2hyb21lLmRlY2xhcmF0aXZlQ29udGVudC5QYWdlU3RhdGVNYXRjaGVyKHtcbiAgICAgICAgICAgIHBhZ2VVcmw6IHsgdXJsQ29udGFpbnM6ICdsaW5rZWRpbi5jb20vY29tcGFueS8nIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgbmV3IGNocm9tZS5kZWNsYXJhdGl2ZUNvbnRlbnQuUGFnZVN0YXRlTWF0Y2hlcih7XG4gICAgICAgICAgICBwYWdlVXJsOiB7IHVybENvbnRhaW5zOiAnbGlua2VkaW4uY29tL3NjaG9vbC8nIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgYWN0aW9uczogW25ldyBjaHJvbWUuZGVjbGFyYXRpdmVDb250ZW50LlNob3dBY3Rpb24oKV0sXG4gICAgICB9O1xuXG4gICAgICAvLyBGaW5hbGx5LCBhcHBseSBvdXIgbmV3IGFycmF5IG9mIHJ1bGVzXG4gICAgICBsZXQgcnVsZXMgPSBbbGlua2VkaW5SdWxlXTtcbiAgICAgIGNocm9tZS5kZWNsYXJhdGl2ZUNvbnRlbnQub25QYWdlQ2hhbmdlZC5hZGRSdWxlcyhydWxlcyk7XG4gICAgfSk7XG4gIH0pO1xuIl0sIm5hbWVzIjpbImNocm9tZSIsInJ1bnRpbWUiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiYWN0aW9uIiwiZGlzYWJsZSIsImRlY2xhcmF0aXZlQ29udGVudCIsIm9uUGFnZUNoYW5nZWQiLCJyZW1vdmVSdWxlcyIsInVuZGVmaW5lZCIsImxpbmtlZGluUnVsZSIsImNvbmRpdGlvbnMiLCJQYWdlU3RhdGVNYXRjaGVyIiwicGFnZVVybCIsInVybENvbnRhaW5zIiwiYWN0aW9ucyIsIlNob3dBY3Rpb24iLCJydWxlcyIsImFkZFJ1bGVzIl0sInNvdXJjZVJvb3QiOiIifQ==