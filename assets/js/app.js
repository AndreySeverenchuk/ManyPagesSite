/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/***/ (function() {

eval("const burger = document.getElementById('burger');\r\nconst body = document.body;\r\nconst sidebarMask = document.getElementById('mask');\r\n\r\nburger.addEventListener('click', event => {\r\n    body.classList.toggle('sidebar-active');\r\n    body.classList.toggle('noScroll');\r\n});\r\n\r\nsidebarMask.addEventListener('click', event => {\r\n    body.classList.remove('sidebar-active');\r\n    body.classList.remove('noScroll');\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (function() {

eval("// Действия с модальными окнами\r\n// получение элемента  и его вывод\r\n\r\nconst modalCall = document.querySelectorAll('[data-modal]');\r\nconst body = document.body;\r\n\r\nmodalCall.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        $this = event.currentTarget;\r\n        let modalId = $this.getAttribute('data-modal');\r\n        let modal = document.getElementById(modalId);\r\n\r\n        ModalOpen(modal);\r\n\r\n// отмена закрытия по маске внутри элемента        \r\n        \r\n        let modalMaskNo = modal.querySelector('.modal__content');\r\n        \r\n        modalMaskNo.addEventListener('click', event => {\r\n            event.stopPropagation();\r\n        });\r\n\r\n        setTimeout(function() {\r\n            modalMaskNo.style.transform = 'none';\r\n            modalMaskNo.style.opacity = '1';\r\n        }, 200);\r\n    });\r\n});\r\n\r\nfunction ModalOpen(params) {\r\n    params.classList.add('show');\r\n    body.classList.add('noScroll');\r\n}\r\n\r\n// закрытие окна по крестику\r\n\r\nconst modalCross = document.querySelectorAll('.modal__close');\r\n\r\nmodalCross.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        $this = event.currentTarget;\r\n        let modal = $this.closest('.modal');        \r\n\r\n        setTimeout(function() {\r\n            modalMaskNo.style.transform = 'none';\r\n            modalMaskNo.style.opacity = '1';\r\n        }, 1);\r\n\r\n        ModalClose(modal);\r\n    });\r\n});\r\n\r\nfunction ModalClose(param) {\r\n    let modalMaskNo = param.querySelector('.modal__content');\r\n    modalMaskNo.removeAttribute('style');\r\n\r\n    setTimeout(() => {\r\n        param.classList.remove('show');\r\n        body.classList.remove('noScroll');\r\n    }, 200);\r\n}\r\n\r\n// закрытие окна по маске\r\n\r\nconst modalMask = document.querySelectorAll('.modal');\r\n\r\nmodalMask.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        $this = event.currentTarget;        \r\n\r\n        ModalClose($this);\r\n    });\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/textarea.js":
/*!***********************************!*\
  !*** ./src/assets/js/textarea.js ***!
  \***********************************/
/***/ (function() {

eval("let dataresize = document.querySelectorAll('[data-resize]');\r\n\r\n\r\ndataresize.forEach(item => {\r\n\r\n    let textareaHeight = item.offsetHeight;\r\n\r\n    item.addEventListener('input', event => {\r\n        $this = event.target;\r\n\r\n        $this.style.height = textareaHeight + 'px';\r\n\r\n        if($this.scrollHeight > textareaHeight) {\r\n        $this.style.height = $this.scrollHeight + 'px';\r\n        }\r\n    });\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/textarea.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/burger.js"]();
/******/ 	__webpack_modules__["./src/assets/js/modal.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/textarea.js"]();
/******/ 	
/******/ })()
;