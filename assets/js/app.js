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

/***/ "./src/assets/js/sendform.js":
/*!***********************************!*\
  !*** ./src/assets/js/sendform.js ***!
  \***********************************/
/***/ (function() {

"use strict";
eval("\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    const form = document.getElementById('sendMessage');\r\n    const formReq = form.querySelectorAll('._req');\r\n    \r\n    form.addEventListener('submit', formSend);\r\n    \r\n    async function formSend(event) {\r\n        event.preventDefault();\r\n\r\n        let error = 0;\r\n        for (let index = 0; index < formReq.length; index++) {\r\n        \r\n            FormRemoveError(formReq[index]);\r\n            error = error + FormTest(formReq[index]);\r\n            if(error != 0) {\r\n                break;\r\n            }\r\n        }\r\n\r\n        if(error != 0) {\r\n            alert('Заполните правильно все поля');\r\n        }\r\n        else {\r\n            form.classList.add('_sending');\r\n            let formData = new FormData(form);\r\n            let response = await fetch('sendmail.php', {\r\n                method: 'POST',\r\n                body: formData\r\n            });\r\n            if(response.ok) {\r\n                let result = await response.json();\r\n                alert(result.message);\r\n                form.reset();\r\n                form.classList.remove('_sending');\r\n            }\r\n            else {                \r\n                form.classList.remove('_sending');\r\n                alert ('Сервер не обрабатывает php. Напишите, пожалуйста, на severandy21@gmail.com послание через ваш почтовый клиент. Спасибо.');\r\n                form.reset();\r\n                form.classList.remove('_sending');\r\n            }\r\n        }\r\n    }\r\n\r\n    function FormAddError(i) {\r\n        i.parentElement.classList.add('_error');\r\n        i.classList.add('_error');\r\n    }\r\n\r\n    function FormRemoveError(i) {\r\n        i.parentElement.classList.remove('_error');\r\n        i.classList.remove('_error');\r\n    }\r\n\r\n    function FormTest(i) {\r\n        let name = i.getAttribute('type');\r\n        if(name == 'email') {\r\n            if(Emailtest(i) == false) {\r\n                FormAddError(i);\r\n                return 1;\r\n            }\r\n        }\r\n        else {\r\n            if(i.value == '') {\r\n                FormAddError(i);\r\n                return 1;\r\n            }\r\n        }\r\n        return 0;\r\n    }\r\n\r\n    function Emailtest(address) {\r\n        return /^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$/.test(address.value);\r\n    }    \r\n\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/sendform.js?");

/***/ }),

/***/ "./src/assets/js/textarea.js":
/*!***********************************!*\
  !*** ./src/assets/js/textarea.js ***!
  \***********************************/
/***/ (function() {

eval("let dataresize = document.querySelectorAll('[data-resize]');\r\n\r\n\r\ndataresize.forEach(item => {\r\n\r\n    let textareaHeight = item.offsetHeight;\r\n\r\n    item.addEventListener('input', event => {\r\n        $this = event.target;\r\n\r\n        $this.style.height = textareaHeight + 'px';\r\n\r\n        if($this.scrollHeight > textareaHeight) {\r\n        $this.style.height = $this.scrollHeight + 5 + 'px';\r\n        }\r\n    });\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/textarea.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/burger.js"]();
/******/ 	__webpack_modules__["./src/assets/js/modal.js"]();
/******/ 	__webpack_modules__["./src/assets/js/sendform.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/textarea.js"]();
/******/ 	
/******/ })()
;