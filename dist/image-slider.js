/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/image-slider/style.css":
/*!************************************!*\
  !*** ./src/image-slider/style.css ***!
  \************************************/
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
/*!***********************************!*\
  !*** ./src/image-slider/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/image-slider/style.css");


const images = document.querySelector(".images");

function updateCarousel(activeIndex) {
  for (let i = 0; i < activeIndex; i++) {
    const smallFactor = 1 - ((activeIndex - i) * 0.2);
    images.children[i].style.transform = `translateX(-${(activeIndex - i) * 80}px) scale(${smallFactor})`;
    images.children[i].style.opacity = (smallFactor > 0) ? smallFactor : 0;
    images.children[i].style.zIndex = -(activeIndex - i);
  }
  for (let i = activeIndex + 1; i < images.children.length; i++) {
    const smallFactor = 1 - ((i - activeIndex) * 0.2);
    images.children[i].style.transform = `translateX(${(i - activeIndex) * 80}px) scale(${smallFactor})`;
    images.children[i].style.opacity = (smallFactor > 0) ? smallFactor : 0;
    images.children[i].style.zIndex = -(i - activeIndex);
  }

  const previousActiveImage = document.querySelector(".images .active");
  previousActiveImage.classList.remove("active");

  const activeImage = images.children[activeIndex];
  activeImage.classList.add("active");
  activeImage.style.transform = "";
  activeImage.style.opacity = "";
  activeImage.style.zIndex = "";

  const navDots = document.querySelector(".nav-dots");
  const previousActiveDot = document.querySelector(".active-dot");
  if (previousActiveDot) previousActiveDot.classList.remove("active-dot");
  navDots.children[activeIndex].classList.add("active-dot");
}

function loadNavDots() {
  const navDots = document.querySelector(".nav-dots");
  for (let i = 0; i < images.children.length; i++) {
    const navDot = document.createElement("div");
    navDot.classList.add("nav-dot");
    navDot.addEventListener("click", () => {
      updateCarousel(i);
      setupMotor(i, images.children.length);
    });
    navDots.appendChild(navDot);
  }
}

function setupControls() {
  const leftButton = document.querySelector(".arrow-left");
  leftButton.addEventListener("click", () => {
    const currentImage = document.querySelector(".images .active");
    const currentIndex = Array.prototype.indexOf.call(images.children, currentImage);
  
    const leftIndex = (currentIndex === 0) ? images.children.length - 1 : currentIndex - 1;

    updateCarousel(leftIndex);
    setupMotor(leftIndex, images.children.length);
  });

  const rightButton = document.querySelector(".arrow-right");
  rightButton.addEventListener("click", () => {
    const currentImage = document.querySelector(".images .active");
    const currentIndex = Array.prototype.indexOf.call(images.children, currentImage);

    const rightIndex = (currentIndex === images.children.length - 1) ? 0 : currentIndex + 1;

    updateCarousel(rightIndex);
    setupMotor(rightIndex, images.children.length);
  });
}

function setupTransitions(transitionTimeMilliseconds) {
  document.querySelectorAll(".images img").forEach(image => {
    image.style.transition = `all ease-in-out ${transitionTimeMilliseconds}ms`;
  });
  document.querySelectorAll(".nav-dot").forEach(navDot => {
    navDot.style.transition = `all ease-in-out ${transitionTimeMilliseconds}`;
  });
}

let motor;
let motorIndex;

function setupMotor(index, motorLength) {
  motorIndex = index;
  clearInterval(motor);
  motor = setInterval(() => {
    const nextIndex = (motorIndex === motorLength - 1) ? 0 : motorIndex + 1
    updateCarousel(nextIndex);
    motorIndex = nextIndex;
  }, 3000);
}

loadNavDots();
updateCarousel(0);
setupControls();
setupMotor(0, images.children.length);

setTimeout(() => setupTransitions(1000), 1000);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utc2xpZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQjs7QUFFckI7O0FBRUE7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0Esd0RBQXdELHVCQUF1QixZQUFZLFlBQVk7QUFDdkc7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDRCQUE0QjtBQUM1RDtBQUNBLHVEQUF1RCx1QkFBdUIsWUFBWSxZQUFZO0FBQ3RHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDRCQUE0QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0QsMkJBQTJCO0FBQzNFLEdBQUc7QUFDSDtBQUNBLGlEQUFpRCwyQkFBMkI7QUFDNUUsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91aS1leGVyY2lzZS8uL3NyYy9pbWFnZS1zbGlkZXIvc3R5bGUuY3NzIiwid2VicGFjazovL3VpLWV4ZXJjaXNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VpLWV4ZXJjaXNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdWktZXhlcmNpc2UvLi9zcmMvaW1hZ2Utc2xpZGVyL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltYWdlc1wiKTtcblxuZnVuY3Rpb24gdXBkYXRlQ2Fyb3VzZWwoYWN0aXZlSW5kZXgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmVJbmRleDsgaSsrKSB7XG4gICAgY29uc3Qgc21hbGxGYWN0b3IgPSAxIC0gKChhY3RpdmVJbmRleCAtIGkpICogMC4yKTtcbiAgICBpbWFnZXMuY2hpbGRyZW5baV0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7KGFjdGl2ZUluZGV4IC0gaSkgKiA4MH1weCkgc2NhbGUoJHtzbWFsbEZhY3Rvcn0pYDtcbiAgICBpbWFnZXMuY2hpbGRyZW5baV0uc3R5bGUub3BhY2l0eSA9IChzbWFsbEZhY3RvciA+IDApID8gc21hbGxGYWN0b3IgOiAwO1xuICAgIGltYWdlcy5jaGlsZHJlbltpXS5zdHlsZS56SW5kZXggPSAtKGFjdGl2ZUluZGV4IC0gaSk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IGFjdGl2ZUluZGV4ICsgMTsgaSA8IGltYWdlcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNtYWxsRmFjdG9yID0gMSAtICgoaSAtIGFjdGl2ZUluZGV4KSAqIDAuMik7XG4gICAgaW1hZ2VzLmNoaWxkcmVuW2ldLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KGkgLSBhY3RpdmVJbmRleCkgKiA4MH1weCkgc2NhbGUoJHtzbWFsbEZhY3Rvcn0pYDtcbiAgICBpbWFnZXMuY2hpbGRyZW5baV0uc3R5bGUub3BhY2l0eSA9IChzbWFsbEZhY3RvciA+IDApID8gc21hbGxGYWN0b3IgOiAwO1xuICAgIGltYWdlcy5jaGlsZHJlbltpXS5zdHlsZS56SW5kZXggPSAtKGkgLSBhY3RpdmVJbmRleCk7XG4gIH1cblxuICBjb25zdCBwcmV2aW91c0FjdGl2ZUltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWFnZXMgLmFjdGl2ZVwiKTtcbiAgcHJldmlvdXNBY3RpdmVJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXG4gIGNvbnN0IGFjdGl2ZUltYWdlID0gaW1hZ2VzLmNoaWxkcmVuW2FjdGl2ZUluZGV4XTtcbiAgYWN0aXZlSW1hZ2UuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgYWN0aXZlSW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgYWN0aXZlSW1hZ2Uuc3R5bGUub3BhY2l0eSA9IFwiXCI7XG4gIGFjdGl2ZUltYWdlLnN0eWxlLnpJbmRleCA9IFwiXCI7XG5cbiAgY29uc3QgbmF2RG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWRvdHNcIik7XG4gIGNvbnN0IHByZXZpb3VzQWN0aXZlRG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmUtZG90XCIpO1xuICBpZiAocHJldmlvdXNBY3RpdmVEb3QpIHByZXZpb3VzQWN0aXZlRG90LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtZG90XCIpO1xuICBuYXZEb3RzLmNoaWxkcmVuW2FjdGl2ZUluZGV4XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWRvdFwiKTtcbn1cblxuZnVuY3Rpb24gbG9hZE5hdkRvdHMoKSB7XG4gIGNvbnN0IG5hdkRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1kb3RzXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5hdkRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2RG90LmNsYXNzTGlzdC5hZGQoXCJuYXYtZG90XCIpO1xuICAgIG5hdkRvdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdXBkYXRlQ2Fyb3VzZWwoaSk7XG4gICAgICBzZXR1cE1vdG9yKGksIGltYWdlcy5jaGlsZHJlbi5sZW5ndGgpO1xuICAgIH0pO1xuICAgIG5hdkRvdHMuYXBwZW5kQ2hpbGQobmF2RG90KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXR1cENvbnRyb2xzKCkge1xuICBjb25zdCBsZWZ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnJvdy1sZWZ0XCIpO1xuICBsZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWFnZXMgLmFjdGl2ZVwiKTtcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGltYWdlcy5jaGlsZHJlbiwgY3VycmVudEltYWdlKTtcbiAgXG4gICAgY29uc3QgbGVmdEluZGV4ID0gKGN1cnJlbnRJbmRleCA9PT0gMCkgPyBpbWFnZXMuY2hpbGRyZW4ubGVuZ3RoIC0gMSA6IGN1cnJlbnRJbmRleCAtIDE7XG5cbiAgICB1cGRhdGVDYXJvdXNlbChsZWZ0SW5kZXgpO1xuICAgIHNldHVwTW90b3IobGVmdEluZGV4LCBpbWFnZXMuY2hpbGRyZW4ubGVuZ3RoKTtcbiAgfSk7XG5cbiAgY29uc3QgcmlnaHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFycm93LXJpZ2h0XCIpO1xuICByaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VzIC5hY3RpdmVcIik7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChpbWFnZXMuY2hpbGRyZW4sIGN1cnJlbnRJbWFnZSk7XG5cbiAgICBjb25zdCByaWdodEluZGV4ID0gKGN1cnJlbnRJbmRleCA9PT0gaW1hZ2VzLmNoaWxkcmVuLmxlbmd0aCAtIDEpID8gMCA6IGN1cnJlbnRJbmRleCArIDE7XG5cbiAgICB1cGRhdGVDYXJvdXNlbChyaWdodEluZGV4KTtcbiAgICBzZXR1cE1vdG9yKHJpZ2h0SW5kZXgsIGltYWdlcy5jaGlsZHJlbi5sZW5ndGgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0dXBUcmFuc2l0aW9ucyh0cmFuc2l0aW9uVGltZU1pbGxpc2Vjb25kcykge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltYWdlcyBpbWdcIikuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgaW1hZ2Uuc3R5bGUudHJhbnNpdGlvbiA9IGBhbGwgZWFzZS1pbi1vdXQgJHt0cmFuc2l0aW9uVGltZU1pbGxpc2Vjb25kc31tc2A7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1kb3RcIikuZm9yRWFjaChuYXZEb3QgPT4ge1xuICAgIG5hdkRvdC5zdHlsZS50cmFuc2l0aW9uID0gYGFsbCBlYXNlLWluLW91dCAke3RyYW5zaXRpb25UaW1lTWlsbGlzZWNvbmRzfWA7XG4gIH0pO1xufVxuXG5sZXQgbW90b3I7XG5sZXQgbW90b3JJbmRleDtcblxuZnVuY3Rpb24gc2V0dXBNb3RvcihpbmRleCwgbW90b3JMZW5ndGgpIHtcbiAgbW90b3JJbmRleCA9IGluZGV4O1xuICBjbGVhckludGVydmFsKG1vdG9yKTtcbiAgbW90b3IgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY29uc3QgbmV4dEluZGV4ID0gKG1vdG9ySW5kZXggPT09IG1vdG9yTGVuZ3RoIC0gMSkgPyAwIDogbW90b3JJbmRleCArIDFcbiAgICB1cGRhdGVDYXJvdXNlbChuZXh0SW5kZXgpO1xuICAgIG1vdG9ySW5kZXggPSBuZXh0SW5kZXg7XG4gIH0sIDMwMDApO1xufVxuXG5sb2FkTmF2RG90cygpO1xudXBkYXRlQ2Fyb3VzZWwoMCk7XG5zZXR1cENvbnRyb2xzKCk7XG5zZXR1cE1vdG9yKDAsIGltYWdlcy5jaGlsZHJlbi5sZW5ndGgpO1xuXG5zZXRUaW1lb3V0KCgpID0+IHNldHVwVHJhbnNpdGlvbnMoMTAwMCksIDEwMDApOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==