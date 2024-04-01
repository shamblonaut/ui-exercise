/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/drop-down-system/index.js":
/*!************************************************!*\
  !*** ./node_modules/drop-down-system/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupDropDownSystem: () => (/* binding */ setupDropDownSystem)
/* harmony export */ });
function setupDropDownSystem(activators, dropDownClass, visibilityClass) {
  if (activators.length < 0) return; 

  activators.forEach(activator => {
    activator.addEventListener("click", event => event.stopPropagation());

    const activatorButton = activator.querySelector("button");
    if (activatorButton === null) throw new Error("Activator button not found");

    const dropDown = activator.querySelector(`.${dropDownClass}`);
    if (dropDown === null) throw new Error("Drop down not found");

    activatorButton.addEventListener("click", () => {
      activators.forEach(otherActivator => {
        const otherDropDown = otherActivator.querySelector(`.${dropDownClass}`);
        if (otherDropDown === null) throw new Error("Drop down not found");

        if (activator !== otherActivator) otherDropDown.classList.remove(visibilityClass);
      });
      dropDown.classList.toggle(visibilityClass);
    });
  });
  
  window.addEventListener("click", () => {
    activators.forEach(activator => {
      const dropDown = activator.querySelector(`.${dropDownClass}`);
      if (dropDown === null) throw new Error("Drop down not found");

      dropDown.classList.remove(visibilityClass);
    });
  });
}


/***/ }),

/***/ "./src/mobile-menu/style.css":
/*!***********************************!*\
  !*** ./src/mobile-menu/style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/mobile-menu/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var drop_down_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drop-down-system */ "./node_modules/drop-down-system/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/mobile-menu/style.css");



const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  if (tab.classList.contains("categories")) return;
  tab.addEventListener("click", () => {
    tabs.forEach(otherTab => otherTab.classList.remove("active"));
    tab.classList.add("active");
  })
})

const categoriesTab = document.querySelector(".tab.categories");

(0,drop_down_system__WEBPACK_IMPORTED_MODULE_0__.setupDropDownSystem)([categoriesTab], "drop-down", "visible");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLW1lbnUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpREFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0EsK0RBQStELGNBQWM7QUFDN0U7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxjQUFjO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDL0JBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOdUQ7QUFDbEM7O0FBRXJCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7QUFFQSxxRUFBbUIsMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91aS1leGVyY2lzZS8uL25vZGVfbW9kdWxlcy9kcm9wLWRvd24tc3lzdGVtL2luZGV4LmpzIiwid2VicGFjazovL3VpLWV4ZXJjaXNlLy4vc3JjL21vYmlsZS1tZW51L3N0eWxlLmNzcz83NjQ1Iiwid2VicGFjazovL3VpLWV4ZXJjaXNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VpLWV4ZXJjaXNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91aS1leGVyY2lzZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VpLWV4ZXJjaXNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdWktZXhlcmNpc2UvLi9zcmMvbW9iaWxlLW1lbnUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNldHVwRHJvcERvd25TeXN0ZW0oYWN0aXZhdG9ycywgZHJvcERvd25DbGFzcywgdmlzaWJpbGl0eUNsYXNzKSB7XG4gIGlmIChhY3RpdmF0b3JzLmxlbmd0aCA8IDApIHJldHVybjsgXG5cbiAgYWN0aXZhdG9ycy5mb3JFYWNoKGFjdGl2YXRvciA9PiB7XG4gICAgYWN0aXZhdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKSk7XG5cbiAgICBjb25zdCBhY3RpdmF0b3JCdXR0b24gPSBhY3RpdmF0b3IucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbiAgICBpZiAoYWN0aXZhdG9yQnV0dG9uID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJBY3RpdmF0b3IgYnV0dG9uIG5vdCBmb3VuZFwiKTtcblxuICAgIGNvbnN0IGRyb3BEb3duID0gYWN0aXZhdG9yLnF1ZXJ5U2VsZWN0b3IoYC4ke2Ryb3BEb3duQ2xhc3N9YCk7XG4gICAgaWYgKGRyb3BEb3duID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJEcm9wIGRvd24gbm90IGZvdW5kXCIpO1xuXG4gICAgYWN0aXZhdG9yQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhY3RpdmF0b3JzLmZvckVhY2gob3RoZXJBY3RpdmF0b3IgPT4ge1xuICAgICAgICBjb25zdCBvdGhlckRyb3BEb3duID0gb3RoZXJBY3RpdmF0b3IucXVlcnlTZWxlY3RvcihgLiR7ZHJvcERvd25DbGFzc31gKTtcbiAgICAgICAgaWYgKG90aGVyRHJvcERvd24gPT09IG51bGwpIHRocm93IG5ldyBFcnJvcihcIkRyb3AgZG93biBub3QgZm91bmRcIik7XG5cbiAgICAgICAgaWYgKGFjdGl2YXRvciAhPT0gb3RoZXJBY3RpdmF0b3IpIG90aGVyRHJvcERvd24uY2xhc3NMaXN0LnJlbW92ZSh2aXNpYmlsaXR5Q2xhc3MpO1xuICAgICAgfSk7XG4gICAgICBkcm9wRG93bi5jbGFzc0xpc3QudG9nZ2xlKHZpc2liaWxpdHlDbGFzcyk7XG4gICAgfSk7XG4gIH0pO1xuICBcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWN0aXZhdG9ycy5mb3JFYWNoKGFjdGl2YXRvciA9PiB7XG4gICAgICBjb25zdCBkcm9wRG93biA9IGFjdGl2YXRvci5xdWVyeVNlbGVjdG9yKGAuJHtkcm9wRG93bkNsYXNzfWApO1xuICAgICAgaWYgKGRyb3BEb3duID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJEcm9wIGRvd24gbm90IGZvdW5kXCIpO1xuXG4gICAgICBkcm9wRG93bi5jbGFzc0xpc3QucmVtb3ZlKHZpc2liaWxpdHlDbGFzcyk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzZXR1cERyb3BEb3duU3lzdGVtIH0gZnJvbSBcImRyb3AtZG93bi1zeXN0ZW1cIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYlwiKTtcblxudGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2F0ZWdvcmllc1wiKSkgcmV0dXJuO1xuICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YWJzLmZvckVhY2gob3RoZXJUYWIgPT4gb3RoZXJUYWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pXG59KVxuXG5jb25zdCBjYXRlZ29yaWVzVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWIuY2F0ZWdvcmllc1wiKTtcblxuc2V0dXBEcm9wRG93blN5c3RlbShbY2F0ZWdvcmllc1RhYl0sIFwiZHJvcC1kb3duXCIsIFwidmlzaWJsZVwiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=