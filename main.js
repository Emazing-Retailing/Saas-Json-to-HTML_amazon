/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://json_to_html/./src/scss/style.scss?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("const productsContainer = document.getElementById('products');\n\n// Parse json data\n///////////////////////////////////////////////////////////////////////////////\nfetch('products.json')\n    .then(response => response.json())\n    .then(jsonData => {\n\n        displayCountProductsInfo(jsonData);\n        jsonData.forEach(product => {\n            if (product.price.price) {\n                const productDiv = document.createElement('div');\n                productDiv.classList.add('product-wrap');\n\n                productDiv.innerHTML = displayProduct(productDiv, product);\n                productsContainer.appendChild(productDiv);\n            }\n\n        });\n    }).catch(error => console.error('Error fetching JSON:', error));\n\n\n// Display product\n///////////////////////////////////////////////////////////////////////////////\nfunction displayProduct(productDiv, product) {\n\n    return productDiv.innerHTML = `\n                <div class=\"product\">\n                    <div class=\"product-img\">\n                        <img src=\"${product.main_image_url}\" alt=\"\">\n                    </div>\n                    <div class=\"product-content\">\n                        <div class=\"product-content-title\">${product.name}</div>\n                        <div class=\"product-content-brand\">Brand</div>\n                        <div class=\"product-content-rating product-content-rating-${ratingAlign(roundToHalfStep(product.rating) + '')}\">${product.rating} <span class=\"rating-stars rating-stars-${ratingAlign(roundToHalfStep(product.rating) + '')}\"></span><span class=\"nb-reviews nb-reviews-${product.nb_reviews}\">(${product.nb_reviews})</span></div>\n                        <div class=\"product-content-price\">${getCurrentPriceHtml(product)} ${getOldPriceHtml(product)}</div>\n                    </div>\n                </div>\n            `;\n}\n\n// Helpers\n///////////////////////////////////////////////////////////////////////////////\nfunction displayCountProductsInfo(jsonData) {\n    let countElement = document.getElementById('current-qty-products');\n    if (countElement) {\n        countElement.textContent = jsonData.length;\n    }\n\n    countElement = document.getElementById('all-qty-products');\n    if (countElement) {\n        countElement.textContent = jsonData.length;\n    }\n}\n\nfunction roundToHalfStep(num) {\n    return Math.round(num * 2) / 2;\n}\n\nfunction roundToTwoDecimals(price) {\n    return price.toFixed(2);\n}\n\nfunction ratingAlign(rating) {\n    return rating.replace('.', '');\n}\n\nfunction getOldPriceHtml(product) {\n    return `<span class=\"old-price\"><del><span class=\"currency\">$</span>100.99</del></span>`;\n}\n\nfunction getCurrentPriceHtml(product) {\n    return product.price.price ? `<span class=\"current-price\"><sup><span class=\"currency\">$</span></sup>${roundToTwoDecimals(product.price.price)}</span>` : ''\n}\n\n//# sourceURL=webpack://json_to_html/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/js/main.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scss/style.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;