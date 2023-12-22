import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=051d1148"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=051d1148"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=051d1148"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import App from "/src/App.jsx?t=1702847200446";
import "/src/index.css?t=1702847996895";
import { store } from "/src/app/store.js?t=1702822753343";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=051d1148";
import { fetchUsers } from "/src/features/users/usersSlice.js";
import { BrowserRouter as Router, Routes, Route } from "/node_modules/.vite/deps/react-router-dom.js?v=051d1148";
store.dispatch(fetchUsers());
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(Provider, { store, children: /* @__PURE__ */ jsxDEV(Router, { children: [
  " ",
  /* @__PURE__ */ jsxDEV(Routes, { children: /* @__PURE__ */ jsxDEV(Route, { path: "/*", element: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
    fileName: "C:/Users/Tomas/Documents/PROGRAMMING/TUTORIAL/redux toolkit/src/main.jsx",
    lineNumber: 15,
    columnNumber: 37
  }, this) }, void 0, false, {
    fileName: "C:/Users/Tomas/Documents/PROGRAMMING/TUTORIAL/redux toolkit/src/main.jsx",
    lineNumber: 15,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "C:/Users/Tomas/Documents/PROGRAMMING/TUTORIAL/redux toolkit/src/main.jsx",
    lineNumber: 14,
    columnNumber: 9
  }, this)
] }, void 0, true, {
  fileName: "C:/Users/Tomas/Documents/PROGRAMMING/TUTORIAL/redux toolkit/src/main.jsx",
  lineNumber: 12,
  columnNumber: 7
}, this) }, void 0, false, {
  fileName: "C:/Users/Tomas/Documents/PROGRAMMING/TUTORIAL/redux toolkit/src/main.jsx",
  lineNumber: 11,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "C:/Users/Tomas/Documents/PROGRAMMING/TUTORIAL/redux toolkit/src/main.jsx",
  lineNumber: 10,
  columnNumber: 61
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBaUJvQztBQWpCcEMsT0FBT0EsV0FBVztBQUNsQixPQUFPQyxjQUFjO0FBQ3JCLE9BQU9DLFNBQVM7QUFDaEIsT0FBTztBQUNQLFNBQVNDLGFBQWE7QUFDdEIsU0FBU0MsZ0JBQWdCO0FBQ3pCLFNBQVNDLGtCQUFrQjtBQUMzQixTQUFTQyxpQkFBaUJDLFFBQVFDLFFBQVFDLGFBQWE7QUFFdkROLE1BQU1PLFNBQVNMLFdBQVcsQ0FBQztBQUUzQkosU0FBU1UsV0FBV0MsU0FBU0MsZUFBZSxNQUFNLENBQUMsRUFBRUMsT0FDbkQsdUJBQUMsTUFBTSxZQUFOLEVBQ0MsaUNBQUMsWUFBUyxPQUNSLGlDQUFDLFVBQ0U7QUFBQTtBQUFBLEVBQ0QsdUJBQUMsVUFDQyxpQ0FBQyxTQUFNLE1BQUssTUFBSyxTQUFTLHVCQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBa0MsS0FEcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBO0FBQUEsS0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0EsS0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0EsS0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BU0EsQ0FDRiIsIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJBcHAiLCJzdG9yZSIsIlByb3ZpZGVyIiwiZmV0Y2hVc2VycyIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsImRpc3BhdGNoIiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwic291cmNlcyI6WyJtYWluLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi9hcHAvc3RvcmUuanNcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBmZXRjaFVzZXJzIH0gZnJvbSBcIi4vZmVhdHVyZXMvdXNlcnMvdXNlcnNTbGljZS5qc1wiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5zdG9yZS5kaXNwYXRjaChmZXRjaFVzZXJzKCkpO1xuXG5SZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSkucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIHtcIiBcIn1cbiAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi8qXCIgZWxlbWVudD17PEFwcCAvPn0gLz5cbiAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICA8L1JvdXRlcj5cbiAgICA8L1Byb3ZpZGVyPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+XG4pO1xuIl0sImZpbGUiOiJDOi9Vc2Vycy9Ub21hcy9Eb2N1bWVudHMvUFJPR1JBTU1JTkcvVFVUT1JJQUwvcmVkdXggdG9vbGtpdC9zcmMvbWFpbi5qc3gifQ==