/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Regular.woff2 */ "./src/fonts/Montserrat-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Regular.woff */ "./src/fonts/Montserrat-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Medium.woff2 */ "./src/fonts/Montserrat-Medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Medium.woff */ "./src/fonts/Montserrat-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-SemiBold.woff2 */ "./src/fonts/Montserrat-SemiBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-SemiBold.woff */ "./src/fonts/Montserrat-SemiBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Bold.woff2 */ "./src/fonts/Montserrat-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Bold.woff */ "./src/fonts/Montserrat-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  padding: 0;
  margin: 0;
  border: 0;
}

html {
  /*Пригодится в большинстве ситуаций (когда, например, нужно будет "прижать" футер к низу сайта)*/
  height: 100%;
  /*Убираем скачок интерфейса по горизонтали при появлении / исчезновении скроллбара*/
  scrollbar-gutter: stable;
}

body {
  /*Пригодится в большинстве ситуаций (когда, например, нужно будет "прижать" футер к низу сайта*/
  min-height: 100%;
  line-height: 1;
}

input,
button,
textarea,
select {
  font-family: inherit;
}

button,
label {
  cursor: pointer;
}

a,
a:visited {
  -webkit-text-decoration: none;
  text-decoration: none;
}

a:hover {
  -webkit-text-decoration: none;
  text-decoration: none;
}

ul li {
  list-style: none;
}

address {
  font-style: normal;
}

img,
video {
  display: block;
  max-width: 100%;
  height: auto;
}

details summary {
  list-style: none;
  cursor: pointer;
}

details summary::-webkit-details-marker {
  display: none;
}

details summary::marker {
  display: none;
}

:root {
  --font-family: "Montserrat", sans-serif;
  --color-white: #ffffff;
  --color-white-accent: #fefefe;
  --color-white-95: #F1F1F3;
  --color-white-99: #FCFCFD;
  --color-black: #101010;
  --color-grey-10: #1A1A1A;
  --color-grey-15: #262626;
  --color-grey-20: #333333;
  --color-grey-30: #4C4C4D;
  --color-grey-40: #656567;
  --color-grey-60: #98989A;
  --color-grey-70: #B3B3B3;
  --color-orange: #F57520;
  --color-orange-accent: #EB6B16;
  --container: 87.5rem;
  --container-padding-x: 0.9375rem;
}

@font-face {
  font-family: "Montserrat";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("woff");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
body {
  display: flex;
  flex-direction: column;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: clamp(0.875rem, 0.7784653465rem + 0.396039604vw, 1.125rem);
  color: #101010;
  color: var(--color-black);
}
body._lock {
  overflow: hidden;
}
body .page {
  flex: 1 1 auto;
  min-width: 0;
}

._container {
  max-width: calc(87.5rem + 0.9375rem * 2);
  max-width: calc(var(--container) + var(--container-padding-x) * 2);
  margin: 0 auto;
  padding: 0px 0.9375rem;
  padding: 0px var(--container-padding-x);
}

._visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
  border: 0 !important;
  padding: 0 !important;
  white-space: nowrap !important;
  clip-path: inset(100%) !important;
  clip: rect(0 0 0 0) !important;
  overflow: hidden !important;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  display: block;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.7);
  transition: opacity 0.5s ease 0s, visibility 0.5s ease 0s, box-shadow 0.5s ease 0s;
  border-radius: 0.625rem;
}
.modal__content {
  max-width: 37.5rem;
  width: 100%;
  padding: 3.125rem clamp(0.625rem, 0.3836633663rem + 0.9900990099vw, 1.25rem);
  background: #fefefe;
  background: var(--color-white-accent);
}
.modal__close {
  position: absolute;
  top: 0.4375rem;
  right: 0.9375rem;
  background: transparent;
  font-size: 1.25rem;
  padding: 0.625rem;
  font-weight: 600;
  transition: rotate 0.3s ease 0s;
}
.modal__title {
  font-size: clamp(1.25rem, 1.0086633663rem + 0.9900990099vw, 1.875rem);
  text-align: center;
  text-transform: uppercase;
}
.modal__title:not(:last-child) {
  margin: 0rem 0rem clamp(0.9375rem, 0.5754950495rem + 1.4851485149vw, 1.875rem) 0rem;
}

.modal[open] {
  opacity: 1;
  visibility: visible;
}

.modal::backdrop {
  background-color: rgba(0, 0, 0, 0);
}

.admin {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.admin-panel {
  padding-top: clamp(1.25rem, 0.525990099rem + 2.9702970297vw, 3.125rem);
  padding-bottom: clamp(1.25rem, 0.525990099rem + 2.9702970297vw, 3.125rem);
}
.admin-panel__body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.admin-panel__title {
  text-align: center;
}
.admin-panel__title:not(:last-child) {
  margin: 0rem auto clamp(1.25rem, 0.525990099rem + 2.9702970297vw, 3.125rem) auto;
}
.admin-panel__inner {
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
}
.admin-panel__search-out {
  display: none;
  padding: 0.625rem 0.9375rem;
  border: 0.125rem solid #B3B3B3;
  border: 0.125rem solid var(--color-grey-70);
  border-radius: 0.625rem;
}
.admin-panel__search-out._active {
  display: block;
}
.admin-panel__box {
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
}

.button {
  display: inline-block;
  text-align: center;
  font-weight: 600;
  font-size: clamp(0.875rem, 0.8267326733rem + 0.198019802vw, 1rem);
  padding: 0.625rem 1.25rem;
  border-radius: 0.625rem;
  color: #F1F1F3;
  color: var(--color-white-95);
  background: #B3B3B3;
  background: var(--color-grey-70);
  transition: background 0.3s ease 0s;
}
.button_red {
  background: #F57520;
  background: var(--color-orange);
}
.button_start {
  align-self: flex-start;
}

.spoller__button {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  border: 0.125rem solid #B3B3B3;
  border: 0.125rem solid var(--color-grey-70);
  border-radius: 0.625rem;
  padding: 0.625rem 0.9375rem;
  transition: border 0.3s ease 0s;
}
.spoller__button._active {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.spoller__icon {
  width: 1.25rem;
  height: 1.25rem;
  position: relative;
}
.spoller__icon::before, .spoller__icon::after {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  content: "";
  display: inline-block;
  width: 100%;
  height: 0.125rem;
  background: #333333;
  background: var(--color-grey-20);
}
.spoller__icon::after {
  rotate: 90deg;
  transition: rotate 0.3s ease 0s;
}
.spoller__icon._active::after {
  rotate: 0deg;
}
.spoller__body._active .spoller__inner {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-top: 0;
}
.spoller__inner {
  padding: 0.625rem 0.9375rem;
  border: 0.125rem solid #B3B3B3;
  border: 0.125rem solid var(--color-grey-70);
  border-radius: 0.625rem;
  transition: border 0.3s ease 0s;
}

.error-massage {
  display: none;
  color: red;
  font-size: clamp(0.875rem, 0.8267326733rem + 0.198019802vw, 1rem);
  text-transform: uppercase;
  padding: 0.3125rem 0.3125rem;
}
.error-massage._active {
  display: block;
}
.menu__list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
}
.menu__link {
  font-weight: 600;
  color: #333333;
  color: var(--color-grey-20);
  text-transform: uppercase;
  transition: color 0.3s ease 0s;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.4375rem;
}
.logo__text {
  font-size: clamp(1.25rem, 1.0086633663rem + 0.9900990099vw, 1.875rem);
  font-weight: 700;
  color: #101010;
  color: var(--color-black);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}
.form_modal {
  min-width: clamp(15.625rem, 9.5915841584rem + 24.7524752475vw, 31.25rem);
}
.form__input {
  width: 100%;
  min-height: 3.125rem;
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
  border: 0.125rem solid #B3B3B3;
  border: 0.125rem solid var(--color-grey-70);
  border-radius: 0.625rem;
  font-size: 1rem;
}
.form__input._error {
  border: 0.125rem solid red !important;
}

.burger {
  width: 2.125rem;
  height: 2.125rem;
  display: none;
  padding: 0.5rem 0.25rem;
  position: relative;
  z-index: 35;
  background-color: transparent;
}
.burger::before {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 2.75rem;
  height: 2.75rem;
  content: "";
}
.burger._active .burger__line:first-child {
  rotate: 45deg;
  transform-origin: 0;
  translate: 0.25em -0.1em;
}
.burger._active .burger__line:nth-child(2) {
  rotate: -45deg;
}
.burger._active .burger__line:last-child {
  width: 0;
}
.burger__line {
  width: 100%;
  height: 0.125rem;
  background-color: #333333;
  background-color: var(--color-grey-20);
  transition-duration: 0.3s;
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fefefe;
  background: var(--color-white-accent);
  box-shadow: -0.125rem 0.3125rem 0.625rem 0rem rgba(0, 0, 0, 0.75);
}
.header__body {
  min-height: 4.375rem;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  justify-content: space-between;
}
.header__inner {
  display: flex;
  align-items: center;
  gap: 0.9375rem;
}

.intro {
  padding-top: clamp(1.25rem, 0.525990099rem + 2.9702970297vw, 3.125rem);
  padding-bottom: clamp(1.25rem, 0.525990099rem + 2.9702970297vw, 3.125rem);
}
.intro__body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
}
.intro__text:not(:last-child) {
  margin: 0rem 0rem clamp(0.125rem, -0.5507425743rem + 2.7722772277vw, 1.875rem) 0rem;
}
.intro__list {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}
.intro__item::before {
  width: 0.625rem;
  height: 0.625rem;
  content: "";
  display: inline-block;
  background: #EB6B16;
  background: var(--color-orange-accent);
  border-radius: 50%;
  margin: 0rem 0.3125rem 0rem 0rem;
}
.intro__title {
  font-weight: 700;
  font-size: clamp(1.375rem, 1.0853960396rem + 1.1881188119vw, 2.125rem);
  color: #EB6B16;
  color: var(--color-orange-accent);
}
.intro__subtitle {
  font-weight: 600;
  text-transform: uppercase;
  color: #656567;
  color: var(--color-grey-40);
  font-size: clamp(1.125rem, 1.0284653465rem + 0.396039604vw, 1.375rem);
}

.faq {
  padding-top: clamp(1.25rem, 0.525990099rem + 2.9702970297vw, 3.125rem);
  padding-bottom: clamp(1.25rem, 0.525990099rem + 2.9702970297vw, 3.125rem);
}
.faq__title {
  text-align: center;
}
.faq__title:not(:last-child) {
  margin: 0rem auto clamp(1.25rem, 1.0086633663rem + 0.9900990099vw, 1.875rem) auto;
}
.faq__body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.25rem;
  gap: 1.25rem;
}

.files {
  padding-top: clamp(1.25rem, 0.525990099rem + 2.9702970297vw, 3.125rem);
  padding-bottom: clamp(1.25rem, 0.525990099rem + 2.9702970297vw, 3.125rem);
}
.files__image {
  width: clamp(5rem, 4.0346534653rem + 3.9603960396vw, 7.5rem);
}
.files__title {
  color: #1A1A1A;
  color: var(--color-grey-10);
  text-transform: uppercase;
  font-size: clamp(1.25rem, 0.9603960396rem + 1.1881188119vw, 2rem);
}
.files__title:not(:last-child) {
  margin: 0rem 0rem clamp(1.25rem, 0.7673267327rem + 1.9801980198vw, 2.5rem) 0rem;
}
.files__out {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: clamp(0.625rem, 0.3836633663rem + 0.9900990099vw, 1.25rem);
  gap: clamp(0.625rem, 0.3836633663rem + 0.9900990099vw, 1.25rem);
}
.files__article {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  background: #F1F1F3;
  background: var(--color-white-95);
  border-radius: 0.625rem;
}
.files__article-title {
  display: flex;
  justify-content: center;
  font-size: clamp(1.125rem, 1.0767326733rem + 0.198019802vw, 1.25rem);
  color: #1A1A1A;
  color: var(--color-grey-10);
  transition: opacity 0.3s ease 0s;
  text-transform: uppercase;
}
.footer {
  border-top: 0.125rem solid #B3B3B3;
  border-top: 0.125rem solid var(--color-grey-70);
}
.footer__copy {
  padding: 0.9375rem;
  text-align: center;
  font-size: clamp(1.125rem, 1.0284653465rem + 0.396039604vw, 1.375rem);
}
@media (max-width: 63.99875em){
  .faq__body {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 47.99875em){
  ._mobile-hidden {
    display: none;
  }
  .menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    z-index: 30;
    overflow: auto;
    transition: left 0.3s ease 0s;
    background: #F1F1F3;
    background: var(--color-white-95);
  }
  .menu._active {
    left: 0;
  }
  .menu__list {
    display: flex;
    flex-direction: column;
    padding: 5.625rem 1.875rem 2.5rem 1.875rem;
  }
  .menu__link {
    font-size: 1.125rem;
  }
  .burger {
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .header__inner {
    z-index: 40;
  }
  .files__out {
    grid-template-columns: 1fr;
  }
}
@media (any-hover: hover){
  .modal__close:hover {
    rotate: 360deg;
  }
  .button:hover {
    opacity: 0.8;
  }
  .menu__link:hover {
    color: #656567;
    color: var(--color-grey-40);
  }
  .files__article-title:hover {
    opacity: 0.8;
  }
}
@media (any-hover: none){
  .modal__close:active {
    rotate: 360deg;
  }
  .button:active {
    opacity: 0.8;
  }
  .menu__link:active {
    color: #656567;
    color: var(--color-grey-40);
  }
  .files__article-title:active {
    opacity: 0.8;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/modules/_reset.scss","webpack://./src/scss/modules/_variables.scss","webpack://./src/scss/modules/_fonts.scss","webpack://./src/scss/modules/_options.scss","webpack://./src/scss/modules/base/_modal.scss","webpack://./src/scss/modules/blocks/_admin.scss","webpack://./src/scss/modules/tools/_mixins.scss","webpack://./src/scss/modules/blocks/_admin-panel.scss","webpack://./src/scss/modules/blocks/_button.scss","webpack://./src/scss/modules/blocks/_spoller.scss","webpack://./src/scss/modules/blocks/_error-massage.scss","webpack://./src/scss/modules/blocks/_menu.scss","webpack://./src/scss/modules/blocks/_logo.scss","webpack://./src/scss/modules/blocks/_form.scss","webpack://./src/scss/modules/blocks/_burger.scss","webpack://./src/scss/modules/blocks/_header.scss","webpack://./src/scss/modules/blocks/_intro.scss","webpack://./src/scss/modules/blocks/_faq.scss","webpack://./src/scss/modules/blocks/_files.scss","webpack://./src/scss/modules/blocks/_footer.scss","webpack://./src/scss/modules/tools/_media.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nhtml {\n  /*Пригодится в большинстве ситуаций (когда, например, нужно будет \"прижать\" футер к низу сайта)*/\n  height: 100%;\n  /*Убираем скачок интерфейса по горизонтали при появлении / исчезновении скроллбара*/\n  scrollbar-gutter: stable;\n}\n\nbody {\n  /*Пригодится в большинстве ситуаций (когда, например, нужно будет \"прижать\" футер к низу сайта*/\n  min-height: 100%;\n  line-height: 1;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font-family: inherit;\n}\n\nbutton,\nlabel {\n  cursor: pointer;\n}\n\na,\na:visited {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: none;\n}\n\nul li {\n  list-style: none;\n}\n\naddress {\n  font-style: normal;\n}\n\nimg,\nvideo {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\ndetails summary {\n  list-style: none;\n  cursor: pointer;\n}\n\ndetails summary::-webkit-details-marker {\n  display: none;\n}\n\ndetails summary::marker {\n  display: none;\n}\n\n:root {\n  --font-family: \"Montserrat\", sans-serif;\n  --color-white: #ffffff;\n  --color-white-accent: #fefefe;\n  --color-white-95: #F1F1F3;\n  --color-white-99: #FCFCFD;\n  --color-black: #101010;\n  --color-grey-10: #1A1A1A;\n  --color-grey-15: #262626;\n  --color-grey-20: #333333;\n  --color-grey-30: #4C4C4D;\n  --color-grey-40: #656567;\n  --color-grey-60: #98989A;\n  --color-grey-70: #B3B3B3;\n  --color-orange: #F57520;\n  --color-orange-accent: #EB6B16;\n  --container: 87.5rem;\n  --container-padding-x: 0.9375rem;\n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(\"../fonts/Montserrat-Regular.woff2\") format(\"woff2\"), url(\"../fonts/Montserrat-Regular.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(\"../fonts/Montserrat-Medium.woff2\") format(\"woff2\"), url(\"../fonts/Montserrat-Medium.woff\") format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(\"../fonts/Montserrat-SemiBold.woff2\") format(\"woff2\"), url(\"../fonts/Montserrat-SemiBold.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(\"../fonts/Montserrat-Bold.woff2\") format(\"woff2\"), url(\"../fonts/Montserrat-Bold.woff\") format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Montserrat\";\n  font-weight: 400;\n  font-size: clamp(0.875rem, 0.7784653465rem + 0.396039604vw, 1.125rem);\n  color: var(--color-black);\n}\nbody._lock {\n  overflow: hidden;\n}\nbody .page {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n\n._container {\n  max-width: calc(var(--container) + var(--container-padding-x) * 2);\n  margin: 0 auto;\n  padding: 0px var(--container-padding-x);\n}\n\n._visually-hidden {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  margin: -1px !important;\n  border: 0 !important;\n  padding: 0 !important;\n  white-space: nowrap !important;\n  clip-path: inset(100%) !important;\n  clip: rect(0 0 0 0) !important;\n  overflow: hidden !important;\n}\n\n@media (max-width: 47.99875em) {\n  ._mobile-hidden {\n    display: none;\n  }\n}\n\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: 0;\n  display: block;\n  opacity: 0;\n  visibility: hidden;\n  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.7);\n  transition: opacity 0.5s ease 0s, visibility 0.5s ease 0s, box-shadow 0.5s ease 0s;\n  border-radius: 0.625rem;\n}\n.modal__content {\n  max-width: 37.5rem;\n  width: 100%;\n  padding: 3.125rem clamp(0.625rem, 0.3836633663rem + 0.9900990099vw, 1.25rem);\n  background: var(--color-white-accent);\n}\n.modal__close {\n  position: absolute;\n  top: 0.4375rem;\n  right: 0.9375rem;\n  background: transparent;\n  font-size: 1.25rem;\n  padding: 0.625rem;\n  font-weight: 600;\n  transition: rotate 0.3s ease 0s;\n}\n@media (any-hover: hover) {\n  .modal__close:hover {\n    rotate: 360deg;\n  }\n}\n@media (any-hover: none) {\n  .modal__close:active {\n    rotate: 360deg;\n  }\n}\n.modal__title {\n  font-size: clamp(1.25rem, 1.0086633663rem + 0.9900990099vw, 1.875rem);\n  text-align: center;\n  text-transform: uppercase;\n}\n.modal__title:not(:last-child) {\n  margin: 0rem 0rem clamp(0.9375rem, 0.5754950495rem + 1.4851485149vw, 1.875rem) 0rem;\n}\n\n.modal[open] {\n  opacity: 1;\n  visibility: visible;\n}\n\n.modal::backdrop {\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.admin {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n.admin-panel {\n  padding-block: clamp(1.25rem, 0.525990099rem + 2.9702970297vw, 3.125rem);\n}\n.admin-panel__body {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.admin-panel__title {\n  text-align: center;\n}\n.admin-panel__title:not(:last-child) {\n  margin: 0rem auto clamp(1.25rem, 0.525990099rem + 2.9702970297vw, 3.125rem) auto;\n}\n.admin-panel__inner {\n  display: flex;\n  flex-direction: column;\n  gap: 0.9375rem;\n}\n.admin-panel__search-out {\n  display: none;\n  padding: 0.625rem 0.9375rem;\n  border: 0.125rem solid var(--color-grey-70);\n  border-radius: 0.625rem;\n}\n.admin-panel__search-out._active {\n  display: block;\n}\n.admin-panel__box {\n  display: flex;\n  flex-direction: column;\n  gap: 0.9375rem;\n}\n\n.button {\n  display: inline-block;\n  text-align: center;\n  font-weight: 600;\n  font-size: clamp(0.875rem, 0.8267326733rem + 0.198019802vw, 1rem);\n  padding: 0.625rem 1.25rem;\n  border-radius: 0.625rem;\n  color: var(--color-white-95);\n  background: var(--color-grey-70);\n  transition: background 0.3s ease 0s;\n}\n@media (any-hover: hover) {\n  .button:hover {\n    opacity: 0.8;\n  }\n}\n@media (any-hover: none) {\n  .button:active {\n    opacity: 0.8;\n  }\n}\n.button_red {\n  background: var(--color-orange);\n}\n.button_start {\n  align-self: flex-start;\n}\n\n.spoller__button {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  border: 0.125rem solid var(--color-grey-70);\n  border-radius: 0.625rem;\n  padding: 0.625rem 0.9375rem;\n  transition: border 0.3s ease 0s;\n}\n.spoller__button._active {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.spoller__icon {\n  width: 1.25rem;\n  height: 1.25rem;\n  position: relative;\n}\n.spoller__icon::before, .spoller__icon::after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  translate: -50% -50%;\n  content: \"\";\n  display: inline-block;\n  width: 100%;\n  height: 0.125rem;\n  background: var(--color-grey-20);\n}\n.spoller__icon::after {\n  rotate: 90deg;\n  transition: rotate 0.3s ease 0s;\n}\n.spoller__icon._active::after {\n  rotate: 0deg;\n}\n.spoller__body._active .spoller__inner {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-top: 0;\n}\n.spoller__inner {\n  padding: 0.625rem 0.9375rem;\n  border: 0.125rem solid var(--color-grey-70);\n  border-radius: 0.625rem;\n  transition: border 0.3s ease 0s;\n}\n\n.error-massage {\n  display: none;\n  color: red;\n  font-size: clamp(0.875rem, 0.8267326733rem + 0.198019802vw, 1rem);\n  text-transform: uppercase;\n  padding: 0.3125rem 0.3125rem;\n}\n.error-massage._active {\n  display: block;\n}\n\n@media (max-width: 47.99875em) {\n  .menu {\n    position: fixed;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    z-index: 30;\n    overflow: auto;\n    transition: left 0.3s ease 0s;\n    background: var(--color-white-95);\n  }\n  .menu._active {\n    left: 0;\n  }\n}\n.menu__list {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n}\n@media (max-width: 47.99875em) {\n  .menu__list {\n    display: flex;\n    flex-direction: column;\n    padding: 5.625rem 1.875rem 2.5rem 1.875rem;\n  }\n}\n.menu__link {\n  font-weight: 600;\n  color: var(--color-grey-20);\n  text-transform: uppercase;\n  transition: color 0.3s ease 0s;\n}\n@media (any-hover: hover) {\n  .menu__link:hover {\n    color: var(--color-grey-40);\n  }\n}\n@media (any-hover: none) {\n  .menu__link:active {\n    color: var(--color-grey-40);\n  }\n}\n@media (max-width: 47.99875em) {\n  .menu__link {\n    font-size: 1.125rem;\n  }\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 0.4375rem;\n}\n.logo__text {\n  font-size: clamp(1.25rem, 1.0086633663rem + 0.9900990099vw, 1.875rem);\n  font-weight: 700;\n  color: var(--color-black);\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.form_modal {\n  min-width: clamp(15.625rem, 9.5915841584rem + 24.7524752475vw, 31.25rem);\n}\n.form__input {\n  width: 100%;\n  min-height: 3.125rem;\n  padding-inline: 0.9375rem;\n  border: 0.125rem solid var(--color-grey-70);\n  border-radius: 0.625rem;\n  font-size: 1rem;\n}\n.form__input._error {\n  border: 0.125rem solid red !important;\n}\n\n.burger {\n  width: 2.125rem;\n  height: 2.125rem;\n  display: none;\n  padding: 0.5rem 0.25rem;\n  position: relative;\n  z-index: 35;\n  background-color: transparent;\n}\n.burger::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  translate: -50% -50%;\n  width: 2.75rem;\n  height: 2.75rem;\n  content: \"\";\n}\n@media (max-width: 47.99875em) {\n  .burger {\n    display: inline-flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n}\n.burger._active .burger__line:first-child {\n  rotate: 45deg;\n  transform-origin: 0;\n  translate: 0.25em -0.1em;\n}\n.burger._active .burger__line:nth-child(2) {\n  rotate: -45deg;\n}\n.burger._active .burger__line:last-child {\n  width: 0;\n}\n.burger__line {\n  width: 100%;\n  height: 0.125rem;\n  background-color: var(--color-grey-20);\n  transition-duration: 0.3s;\n}\n\n.header {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: var(--color-white-accent);\n  box-shadow: -0.125rem 0.3125rem 0.625rem 0rem rgba(0, 0, 0, 0.75);\n}\n.header__body {\n  min-height: 4.375rem;\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  justify-content: space-between;\n}\n.header__inner {\n  display: flex;\n  align-items: center;\n  gap: 0.9375rem;\n}\n@media (max-width: 47.99875em) {\n  .header__inner {\n    z-index: 40;\n  }\n}\n\n.intro {\n  padding-block: clamp(1.25rem, 0.525990099rem + 2.9702970297vw, 3.125rem);\n}\n.intro__body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.625rem;\n}\n.intro__text:not(:last-child) {\n  margin: 0rem 0rem clamp(0.125rem, -0.5507425743rem + 2.7722772277vw, 1.875rem) 0rem;\n}\n.intro__list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.intro__item::before {\n  width: 0.625rem;\n  height: 0.625rem;\n  content: \"\";\n  display: inline-block;\n  background: var(--color-orange-accent);\n  border-radius: 50%;\n  margin: 0rem 0.3125rem 0rem 0rem;\n}\n.intro__title {\n  font-weight: 700;\n  font-size: clamp(1.375rem, 1.0853960396rem + 1.1881188119vw, 2.125rem);\n  color: var(--color-orange-accent);\n}\n.intro__subtitle {\n  font-weight: 600;\n  text-transform: uppercase;\n  color: var(--color-grey-40);\n  font-size: clamp(1.125rem, 1.0284653465rem + 0.396039604vw, 1.375rem);\n}\n\n.faq {\n  padding-block: clamp(1.25rem, 0.525990099rem + 2.9702970297vw, 3.125rem);\n}\n.faq__title {\n  text-align: center;\n}\n.faq__title:not(:last-child) {\n  margin: 0rem auto clamp(1.25rem, 1.0086633663rem + 0.9900990099vw, 1.875rem) auto;\n}\n.faq__body {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.25rem;\n}\n@media (max-width: 63.99875em) {\n  .faq__body {\n    grid-template-columns: 1fr;\n  }\n}\n\n.files {\n  padding-block: clamp(1.25rem, 0.525990099rem + 2.9702970297vw, 3.125rem);\n}\n.files__image {\n  width: clamp(5rem, 4.0346534653rem + 3.9603960396vw, 7.5rem);\n}\n.files__title {\n  color: var(--color-grey-10);\n  text-transform: uppercase;\n  font-size: clamp(1.25rem, 0.9603960396rem + 1.1881188119vw, 2rem);\n}\n.files__title:not(:last-child) {\n  margin: 0rem 0rem clamp(1.25rem, 0.7673267327rem + 1.9801980198vw, 2.5rem) 0rem;\n}\n.files__out {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: clamp(0.625rem, 0.3836633663rem + 0.9900990099vw, 1.25rem);\n}\n@media (max-width: 47.99875em) {\n  .files__out {\n    grid-template-columns: 1fr;\n  }\n}\n.files__article {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n  background: var(--color-white-95);\n  border-radius: 0.625rem;\n}\n.files__article-title {\n  display: flex;\n  justify-content: center;\n  font-size: clamp(1.125rem, 1.0767326733rem + 0.198019802vw, 1.25rem);\n  color: var(--color-grey-10);\n  transition: opacity 0.3s ease 0s;\n  text-transform: uppercase;\n}\n@media (any-hover: hover) {\n  .files__article-title:hover {\n    opacity: 0.8;\n  }\n}\n@media (any-hover: none) {\n  .files__article-title:active {\n    opacity: 0.8;\n  }\n}\n.footer {\n  border-top: 0.125rem solid var(--color-grey-70);\n}\n.footer__copy {\n  padding: 0.9375rem;\n  text-align: center;\n  font-size: clamp(1.125rem, 1.0284653465rem + 0.396039604vw, 1.375rem);\n}","*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 0;\r\n}\r\n\r\nhtml {\r\n    /*Пригодится в большинстве ситуаций (когда, например, нужно будет \"прижать\" футер к низу сайта)*/\r\n    height: 100%;\r\n    /*Убираем скачок интерфейса по горизонтали при появлении / исчезновении скроллбара*/\r\n    scrollbar-gutter: stable;\r\n}\r\n\r\nbody {\r\n    /*Пригодится в большинстве ситуаций (когда, например, нужно будет \"прижать\" футер к низу сайта*/\r\n    min-height: 100%;\r\n\r\n    line-height: 1;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n    font-family: inherit;\r\n}\r\n\r\nbutton,\r\nlabel {\r\n    cursor: pointer;\r\n}\r\n\r\na,\r\na:visited {\r\n    text-decoration: none;\r\n}\r\n\r\na:hover {\r\n    text-decoration: none;\r\n}\r\n\r\nul li {\r\n    list-style: none;\r\n}\r\n\r\naddress {\r\n    font-style: normal;\r\n}\r\n\r\nimg,\r\nvideo {\r\n    display: block;\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n// плавное закрытие споллера (слабая поддержка)\r\n// details::details-content{\r\n//     content-visibility: visible !important;\r\n// }\r\n\r\ndetails summary {\r\n    list-style: none; // отключение стрелочки во всех браузерах\r\n    cursor: pointer;\r\n}\r\n\r\ndetails summary::-webkit-details-marker {\r\n    display: none; // отключение стрелочки в safari\r\n}\r\n\r\ndetails summary::marker {\r\n    display: none; // отключение стрелочки в Firefox и новые стандарты\r\n}","@use 'tools' as *;\r\n\r\n:root {\r\n    --font-family: 'Montserrat', sans-serif;\r\n\r\n    // color white\r\n    --color-white: #ffffff;\r\n    --color-white-accent: #fefefe;\r\n    --color-white-95: #F1F1F3;\r\n    --color-white-99: #FCFCFD;\r\n\r\n    // color black\r\n    --color-black: #101010;\r\n\r\n    // color grey\r\n    --color-grey-10: #1A1A1A;\r\n    --color-grey-15: #262626;\r\n    --color-grey-20: #333333;\r\n    --color-grey-30: #4C4C4D;\r\n    --color-grey-40: #656567;\r\n    --color-grey-60: #98989A;\r\n    --color-grey-70: #B3B3B3;\r\n\r\n    // color orange\r\n    --color-orange: #F57520;\r\n    --color-orange-accent: #EB6B16;\r\n\r\n    // options container\r\n    --container: #{rem(1400)};\r\n    --container-padding-x: #{rem(15)};\r\n}","@font-face {\r\n    font-family: 'Montserrat';\r\n    src: url('../fonts/Montserrat-Regular.woff2') format('woff2'),\r\n        url('../fonts/Montserrat-Regular.woff') format('woff');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-display: swap;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Montserrat';\r\n    src: url('../fonts/Montserrat-Medium.woff2') format('woff2'),\r\n        url('../fonts/Montserrat-Medium.woff') format('woff');\r\n    font-weight: 500;\r\n    font-style: normal;\r\n    font-display: swap;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Montserrat';\r\n    src: url('../fonts/Montserrat-SemiBold.woff2') format('woff2'),\r\n        url('../fonts/Montserrat-SemiBold.woff') format('woff');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n    font-display: swap;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Montserrat';\r\n    src: url('../fonts/Montserrat-Bold.woff2') format('woff2'),\r\n        url('../fonts/Montserrat-Bold.woff') format('woff');\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-display: swap;\r\n}","// * import index file\r\n@use 'tools' as *;\r\n// =======================================================================================================\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-family: 'Montserrat';\r\n    font-weight: 400;\r\n    font-size: fluid(18, 14);\r\n    color: var(--color-black);\r\n\r\n    &._lock {\r\n        overflow: hidden;\r\n    }\r\n\r\n    // press footer\r\n    .page {\r\n        flex: 1 1 auto;\r\n        // fix slider\r\n        min-width: 0;\r\n    }\r\n}\r\n\r\n// =======================================================================================================\r\n// * Утилитарные классы\r\n\r\n// сontainer\r\n._container {\r\n    max-width: calc(var(--container) + var(--container-padding-x) * 2);\r\n    margin: 0 auto;\r\n    padding: 0px var(--container-padding-x);\r\n}\r\n\r\n// visually-hidden\r\n._visually-hidden {\r\n    position: absolute !important;\r\n    width: 1px !important;\r\n    height: 1px !important;\r\n    margin: -1px !important;\r\n    border: 0 !important;\r\n    padding: 0 !important;\r\n    white-space: nowrap !important;\r\n    clip-path: inset(100%) !important;\r\n    clip: rect(0 0 0 0) !important;\r\n    overflow: hidden !important;\r\n}\r\n\r\n// mobile hidden\r\n._mobile-hidden {\r\n\r\n    @include mobile {\r\n        display: none;\r\n    }\r\n}","@use '../tools' as *;\r\n\r\n// * Базовые стили для modal\r\n.modal {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    margin: 0;\r\n\r\n    display: block;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .7);\r\n    transition: opacity .5s ease 0s, visibility .5s ease 0s, box-shadow .5s ease 0s;\r\n    border-radius: rem(10);\r\n\r\n    &__content {\r\n        max-width: rem(600);\r\n        width: 100%;\r\n        padding: rem(50) fluid(20, 10);\r\n        background: var(--color-white-accent);\r\n    }\r\n\r\n    &__close {\r\n        position: absolute;\r\n        top: rem(7);\r\n        right: rem(15);\r\n        background: transparent;\r\n        font-size: rem(20);\r\n        padding: rem(10);\r\n        font-weight: 600;\r\n        transition: rotate 0.3s ease 0s;\r\n\r\n        @include hover {\r\n            rotate: 360deg;\r\n        }\r\n    }\r\n\r\n    &__title {\r\n        font-size: fluid(30, 20);\r\n        text-align: center;\r\n        text-transform: uppercase;\r\n\r\n        &:not(:last-child) {\r\n            margin: rem(0) rem(0) fluid(30, 15) rem(0);\r\n        }\r\n    }\r\n}\r\n\r\n.modal[open] {\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n.modal::backdrop {\r\n    background-color: #00000000;\r\n}","@use '../tools' as *;\r\n\r\n.admin {\r\n    @include flex-center;\r\n\r\n    height: 100vh;\r\n\r\n    &__body {}\r\n}","@use 'functions' as *;\r\n\r\n@mixin hide {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n}\r\n\r\n@mixin show {\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n@mixin flex-center($isInline: false) {\r\n    @if $isInline {\r\n        display: inline-flex;\r\n    }\r\n\r\n    @else {\r\n        display: flex;\r\n    }\r\n\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n@mixin abs-center {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    translate: -50% -50%;\r\n}\r\n\r\n@mixin square($size) {\r\n    width: $size;\r\n    height: $size;\r\n}","@use '../tools' as *;\r\n\r\n.admin-panel {\r\n    padding-block: fluid(50, 20);\r\n\r\n    &__body {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: rem(20);\r\n    }\r\n\r\n    &__title {\r\n        text-align: center;\r\n\r\n        &:not(:last-child) {\r\n            margin: rem(0) auto fluid(50, 20) auto;\r\n        }\r\n    }\r\n\r\n    &__inner {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: rem(15);\r\n    }\r\n\r\n    &__search-out {\r\n        display: none;\r\n        padding: rem(10) rem(15);\r\n        border: rem(2) solid var(--color-grey-70);\r\n        border-radius: rem(10);\r\n\r\n        &._active {\r\n            display: block;\r\n        }\r\n    }\r\n\r\n    &__box {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: rem(15);\r\n    }\r\n}","@use '../tools' as *;\r\n\r\n.button {\r\n    display: inline-block;\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: fluid(16, 14);\r\n    padding: rem(10) rem(20);\r\n    border-radius: rem(10);\r\n    color: var(--color-white-95);\r\n    background: var(--color-grey-70);\r\n    transition: background 0.3s ease 0s;\r\n\r\n    @include hover {\r\n        opacity: .8;\r\n    }\r\n\r\n    &_red {\r\n        background: var(--color-orange);\r\n    }\r\n\r\n    &_start {\r\n        align-self: flex-start;\r\n    }\r\n}","@use '../tools' as *;\r\n\r\n.spoller {\r\n\r\n    &__button {\r\n        display: grid;\r\n        grid-template-columns: 1fr auto;\r\n        align-items: center;\r\n        border: rem(2) solid var(--color-grey-70);\r\n        border-radius: rem(10);\r\n        padding: rem(10) rem(15);\r\n        transition: border 0.3s ease 0s;\r\n\r\n        &._active {\r\n            border-bottom-right-radius: 0;\r\n            border-bottom-left-radius: 0;\r\n        }\r\n    }\r\n\r\n    &__button-text {}\r\n\r\n    &__icon {\r\n        @include square(rem(20));\r\n        position: relative;\r\n\r\n        &::before,\r\n        &::after {\r\n            @include abs-center;\r\n\r\n            content: '';\r\n            display: inline-block;\r\n            width: 100%;\r\n            height: rem(2);\r\n            background: var(--color-grey-20);\r\n        }\r\n\r\n        &::after {\r\n            rotate: 90deg;\r\n            transition: rotate 0.3s ease 0s;\r\n        }\r\n\r\n        &._active {\r\n            &::after {\r\n                rotate: 0deg;\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    &__body {\r\n\r\n        &._active .spoller__inner {\r\n            border-top-right-radius: 0;\r\n            border-top-left-radius: 0;\r\n            border-top: 0;\r\n        }\r\n    }\r\n\r\n    &__inner {\r\n        padding: rem(10) rem(15);\r\n        border: rem(2) solid var(--color-grey-70);\r\n        border-radius: rem(10);\r\n        transition: border 0.3s ease 0s;\r\n    }\r\n}","@use '../tools' as *;\r\n\r\n.error-massage {\r\n    display: none;\r\n    color: red;\r\n    font-size: fluid(16, 14);\r\n    text-transform: uppercase;\r\n    padding: rem(5) rem(5);\r\n\r\n    &._active {\r\n        display: block;\r\n    }\r\n}","@use '../tools' as *;\r\n\r\n.menu {\r\n\r\n    @include mobile {\r\n        position: fixed;\r\n        top: 0;\r\n        left: -100%;\r\n        width: 100%;\r\n        height: 100%;\r\n        z-index: 30;\r\n        overflow: auto;\r\n        transition: left 0.3s ease 0s;\r\n        background: var(--color-white-95);\r\n\r\n        &._active {\r\n            left: 0;\r\n        }\r\n    }\r\n\r\n\r\n    &__list {\r\n        display: flex;\r\n        align-items: center;\r\n        flex-wrap: wrap;\r\n        gap: rem(20);\r\n\r\n        @include mobile {\r\n            display: flex;\r\n            flex-direction: column;\r\n            padding: rem(90) rem(30) rem(40) rem(30);\r\n        }\r\n    }\r\n\r\n    &__item {}\r\n\r\n    &__link {\r\n        font-weight: 600;\r\n        color: var(--color-grey-20);\r\n        text-transform: uppercase;\r\n        transition: color 0.3s ease 0s;\r\n\r\n        @include hover {\r\n            color: var(--color-grey-40);\r\n        }\r\n\r\n        @include mobile {\r\n            font-size: rem(18);\r\n        }\r\n    }\r\n}","@use '../tools' as *;\r\n\r\n.logo {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: rem(7);\r\n\r\n    &__text {\r\n        font-size: fluid(30, 20);\r\n        font-weight: 700;\r\n        color: var(--color-black);\r\n    }\r\n}","@use '../tools' as *;\r\n\r\n.form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: rem(10);\r\n\r\n    &_modal {\r\n        min-width: fluid(500, 250);\r\n    }\r\n\r\n    &__input {\r\n        width: 100%;\r\n        min-height: rem(50);\r\n        padding-inline: rem(15);\r\n        border: rem(2) solid var(--color-grey-70);\r\n        border-radius: rem(10);\r\n        font-size: rem(16);\r\n\r\n        &._error {\r\n            border: rem(2) solid red !important;\r\n        }\r\n    }\r\n}","@use '../tools' as *;\r\n\r\n.burger {\r\n    @include square(rem(34));\r\n\r\n    display: none;\r\n    padding: rem(8) rem(4);\r\n    position: relative;\r\n    z-index: 35;\r\n    background-color: transparent;\r\n\r\n    &::before {\r\n        @include abs-center;\r\n        @include square(rem(44));\r\n\r\n        content: '';\r\n    }\r\n\r\n    @include mobile {\r\n        display: inline-flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    &._active {\r\n        .burger__line {\r\n            &:first-child {\r\n                rotate: 45deg;\r\n                transform-origin: 0;\r\n                translate: 0.25em -0.1em;\r\n            }\r\n\r\n            &:nth-child(2) {\r\n                rotate: -45deg;\r\n            }\r\n\r\n            &:last-child {\r\n                width: 0;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__line {\r\n        width: 100%;\r\n        height: rem(2);\r\n        background-color: var(--color-grey-20);\r\n        transition-duration: .3s;\r\n    }\r\n}","// * import index file\r\n@use '../tools' as *;\r\n// =======================================================================================================\r\n\r\n.header {\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 100;\r\n    background: var(--color-white-accent);\r\n    box-shadow: rem(-2) rem(5) rem(10) rem(0) rgba(0, 0, 0, 0.75);\r\n\r\n    &__body {\r\n        min-height: rem(70);\r\n        display: flex;\r\n        align-items: center;\r\n        gap: rem(10);\r\n        justify-content: space-between;\r\n    }\r\n\r\n    &__inner {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: rem(15);\r\n\r\n        @include mobile {\r\n            z-index: 40;\r\n        }\r\n    }\r\n}","@use '../tools' as *;\r\n\r\n.intro {\r\n    padding-block: fluid(50, 20);\r\n\r\n    &__body {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        gap: rem(10);\r\n    }\r\n\r\n    &__text {\r\n\r\n        &:not(:last-child) {\r\n            margin: rem(0) rem(0) fluid(30, 2) rem(0);\r\n        }\r\n    }\r\n\r\n    &__list {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: rem(10);\r\n    }\r\n\r\n    &__item {\r\n\r\n        &::before {\r\n            @include square(rem(10));\r\n\r\n            content: '';\r\n            display: inline-block;\r\n            background: var(--color-orange-accent);\r\n            border-radius: 50%;\r\n            margin: rem(0) rem(5) rem(0) rem(0);\r\n        }\r\n    }\r\n\r\n    &__title {\r\n        font-weight: 700;\r\n        font-size: fluid(34, 22);\r\n        color: var(--color-orange-accent);\r\n    }\r\n\r\n    &__subtitle {\r\n        font-weight: 600;\r\n        text-transform: uppercase;\r\n        color: var(--color-grey-40);\r\n        font-size: fluid(22, 18);\r\n    }\r\n}","@use '../tools' as *;\r\n\r\n.faq {\r\n    padding-block: fluid(50, 20);\r\n\r\n    &__title {\r\n        text-align: center;\r\n\r\n        &:not(:last-child) {\r\n            margin: rem(0) auto fluid(30, 20) auto;\r\n        }\r\n    }\r\n\r\n    &__body {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 1fr);\r\n        gap: rem(20);\r\n\r\n        @include tablet {\r\n            grid-template-columns: 1fr;\r\n        }\r\n    }\r\n}","@use '../tools' as *;\r\n\r\n.files {\r\n    padding-block: fluid(50, 20);\r\n\r\n    &__body {}\r\n\r\n    &__image {\r\n        width: fluid(120, 80);\r\n    }\r\n\r\n    &__title {\r\n        color: var(--color-grey-10);\r\n        text-transform: uppercase;\r\n        font-size: fluid(32, 20);\r\n\r\n        &:not(:last-child) {\r\n            margin: rem(0) rem(0) fluid(40, 20) rem(0);\r\n        }\r\n    }\r\n\r\n    &__out {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 1fr);\r\n        gap: fluid(20, 10);\r\n\r\n        @include mobile {\r\n            grid-template-columns: 1fr;\r\n        }\r\n    }\r\n\r\n    &__article {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: rem(10);\r\n        background: var(--color-white-95);\r\n        border-radius: rem(10);\r\n    }\r\n\r\n    &__article-title {\r\n        display: flex;\r\n        justify-content: center;\r\n        font-size: fluid(20, 18);\r\n        color: var(--color-grey-10);\r\n        transition: opacity 0.3s ease 0s;\r\n        text-transform: uppercase;\r\n\r\n        @include hover {\r\n            opacity: .8;\r\n        }\r\n    }\r\n\r\n    &__link {}\r\n}","// * import index file\r\n@use '../tools' as *;\r\n// =======================================================================================================\r\n\r\n.footer {\r\n    border-top: rem(2) solid var(--color-grey-70);\r\n\r\n    &__copy {\r\n        padding: rem(15);\r\n        text-align: center;\r\n        font-size: fluid(22, 18);\r\n    }\r\n}","@use 'functions' as *;\r\n\r\n$laptop: 1440.98;\r\n$tablet: 1023.98;\r\n$mobile: 767.98;\r\n$mobile-small: 479.98;\r\n\r\n@mixin laptop-above {\r\n    @media (min-width: em($laptop, 16)) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin laptop {\r\n    @media (max-width: em($laptop, 16)) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin tablet-above {\r\n    @media (min-width: em($tablet, 16)) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin tablet {\r\n    @media (max-width: em($tablet, 16)) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin mobile-above {\r\n    @media (min-width: em($mobile, 16)) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin mobile {\r\n    @media (max-width: em($mobile, 16)) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin mobile-small-above {\r\n    @media (min-width: em($mobile-small, 16)) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin mobile-small {\r\n    @media (max-width: em($mobile-small, 16)) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin hover($hasActiveEffect: true) {\r\n    @media (any-hover: hover) {\r\n        &:hover {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @if ($hasActiveEffect) {\r\n        @media (any-hover: none) {\r\n            &:active {\r\n                @content;\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/Montserrat-Bold.woff":
/*!****************************************!*\
  !*** ./src/fonts/Montserrat-Bold.woff ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Montserrat-Bold.woff";

/***/ }),

/***/ "./src/fonts/Montserrat-Bold.woff2":
/*!*****************************************!*\
  !*** ./src/fonts/Montserrat-Bold.woff2 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Montserrat-Bold.woff2";

/***/ }),

/***/ "./src/fonts/Montserrat-Medium.woff":
/*!******************************************!*\
  !*** ./src/fonts/Montserrat-Medium.woff ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Montserrat-Medium.woff";

/***/ }),

/***/ "./src/fonts/Montserrat-Medium.woff2":
/*!*******************************************!*\
  !*** ./src/fonts/Montserrat-Medium.woff2 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Montserrat-Medium.woff2";

/***/ }),

/***/ "./src/fonts/Montserrat-Regular.woff":
/*!*******************************************!*\
  !*** ./src/fonts/Montserrat-Regular.woff ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Montserrat-Regular.woff";

/***/ }),

/***/ "./src/fonts/Montserrat-Regular.woff2":
/*!********************************************!*\
  !*** ./src/fonts/Montserrat-Regular.woff2 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Montserrat-Regular.woff2";

/***/ }),

/***/ "./src/fonts/Montserrat-SemiBold.woff":
/*!********************************************!*\
  !*** ./src/fonts/Montserrat-SemiBold.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Montserrat-SemiBold.woff";

/***/ }),

/***/ "./src/fonts/Montserrat-SemiBold.woff2":
/*!*********************************************!*\
  !*** ./src/fonts/Montserrat-SemiBold.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Montserrat-SemiBold.woff2";

/***/ }),

/***/ "./src/js/modules/AdminLogin.js":
/*!**************************************!*\
  !*** ./src/js/modules/AdminLogin.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class AdminLogin {
    selectors = {
        root: '[data-js-admin]',
        inputUsername: '[data-js-admin-username]',
        inputPassword: '[data-js-admin-password]',
        buttonSubmit: '[data-js-admin-button]'
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if (!this.rootElement) return
        this.inputUsernameElement = this.rootElement.querySelector(this.selectors.inputUsername)
        this.inputPasswordElement = this.rootElement.querySelector(this.selectors.inputPassword)
        this.buttonSubmitElement = this.rootElement.querySelector(this.selectors.buttonSubmit)
        this.adminLogin()
    }

    postData(userData) {
        fetch('https://pdfcloud-server.onrender.com/api/adminLogin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        }).then(response => {
            if (!response.ok) throw new Error(`Ошибка: ${response.status}`)
            return response.json();
        }).then(data => {
            console.log('Ответ от сервера:', data)
            if (data.success) {
                alert('Вход выполнен успешно!')
                localStorage.setItem('isAdmin', 'true')
                window.location.href = '/admin.html'
            } else {
                alert('Ошибка: ' + data.message)
            }
        }).catch(err => {
            console.error('Ошибка при отправке:', err)
        })
    }

    clickButton = (e) => {
        e.preventDefault()

        const username = this.inputUsernameElement.value
        const password = this.inputPasswordElement.value

        const userData = {
            username,
            password
        }

        this.postData(userData)
    }

    adminLogin() {
        this.buttonSubmitElement.addEventListener('click', this.clickButton)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminLogin);

/***/ }),

/***/ "./src/js/modules/AdminPanel.js":
/*!**************************************!*\
  !*** ./src/js/modules/AdminPanel.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class AdminPanel {
    selectors = {
        root: '[data-js-admin-panel]',
        logOut: '[data-js-admin-log-out]',
        formUploadingPDF: '[data-js-uploading-pdf]',
        formAddUser: '[data-js-add-user]',
        formDeleteUser: '[data-js-delete-user]',
        formEditUser: '[data-js-edit-user]',
        formAdminSearch: '[data-js-admin-search]'
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if (!this.rootElement) return
        if (localStorage.getItem('isAdmin') !== 'true') window.location.href = '/adminLogin.html'
        this.buttonLogOut = document.querySelector(this.selectors.logOut)
        this.logOut()
        this.formUploadingPDF = this.rootElement.querySelector(this.selectors.formUploadingPDF)
        this.uploadPdf()
        this.formAddUser = this.rootElement.querySelector(this.selectors.formAddUser)
        this.addUser()
        this.formDeleteUser = this.rootElement.querySelector(this.selectors.formDeleteUser)
        this.deleteUser()
        this.formEditUser = this.rootElement.querySelector(this.selectors.formEditUser)
        this.editUser()
        this.formAdminSearch = this.rootElement.querySelector(this.selectors.formAdminSearch)
        this.search()
    }

    logOut() {
        this.buttonLogOut.addEventListener('click', (e) => {
            localStorage.removeItem('isAdmin')
            window.location.href = '/adminLogin.html'
        })
    }

    uploadPdf() {
        this.formUploadingPDF.addEventListener('submit', (e) => {
            e.preventDefault()

            const fileInput = this.formUploadingPDF.querySelector('input[type="file"]')
            const file = fileInput.files[0];

            const formData = new FormData()
            formData.append('pdf', file)

            fetch('http://localhost:3000/api/upload-pdf', {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then((json) => {
                    if (json.success) alert('Документ успешно загружен в базу')
                })
                .catch(console.error);
        })
    }

    addUser() {
        this.formAddUser.addEventListener('submit', (e) => {
            e.preventDefault()

            const addUserName = this.formAddUser.querySelector('[data-js-add-user-login]')
            const addUserPassword = this.formAddUser.querySelector('[data-js-add-user-password]')

            fetch('http://localhost:3000/api/admin/add-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: addUserName.value,
                    password: addUserPassword.value
                })
            })
                .then(res => res.json())
                .then((json) => {
                    if (json.success) alert('Пользователь успешно загружен в базу')
                })
                .catch(console.error);
        })
    }

    deleteUser() {
        this.formDeleteUser.addEventListener('submit', (e) => {
            e.preventDefault()

            const inputDeleteUser = this.formDeleteUser.querySelector('[data-js-input-delete-user]')

            fetch(`http://localhost:3000/api/admin/delete-user/${encodeURIComponent(inputDeleteUser.value)}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    alert(data.message)
                })
                .catch(error => {
                    console.error('Ошибка:', error)
                })
        })
    }

    editUser() {
        this.formEditUser.addEventListener('submit', (e) => {
            e.preventDefault()

            const inputEditUserNameOld = this.formEditUser.querySelector('[data-js-edit-user-old]')
            const inputEditUserName = this.formEditUser.querySelector('[data-js-edit-user-login]')
            const inputEditPassword = this.formEditUser.querySelector('[data-js-edit-user-password]')

            fetch(`http://localhost:3000/api/admin/update-user/${encodeURIComponent(inputEditUserNameOld.value)}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ newUsername: inputEditUserName.value || undefined, newPassword: inputEditPassword.value || undefined })
            })
                .then(res => res.json())
                .then(data => alert(data.message))
                .catch(console.error);
        })
    }

    search() {
        this.formAdminSearch.addEventListener('submit', (e) => {
            e.preventDefault()

            const inputSearch = this.formAdminSearch.querySelector('[data-js-input-search]')
            const searchOut = this.formAdminSearch.querySelector('[data-js-admin-search-out]')

            fetch(`https://pdfcloud-server.onrender.com/api/users/search?login=${encodeURIComponent(inputSearch.value)}`)
                .then(res => {
                    if (!res.ok) throw new Error('Ошибка поиска');
                    return res.json();
                })
                .then(data => {
                    if (data.length === 0) {
                        searchOut.classList.add('_active')
                        searchOut.innerHTML = 'Пользователь не найден'
                    } else {
                        searchOut.classList.add('_active')
                        searchOut.innerHTML = `Пользователь найден. id: ${data[0].id} username: ${data[0].Username} password: ${data[0].password}`
                    }
                })
                .catch(console.error);
        })
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminPanel);

/***/ }),

/***/ "./src/js/modules/Header.js":
/*!**********************************!*\
  !*** ./src/js/modules/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Header {
    selectors = {
        root: '[data-js-header]',
        headerBody: '[data-js-header-body]',
        menu: '[data-js-menu]',
        burger: '[data-js-burger]',
        menuLinks: '[data-js-menu-link]'
    }

    stateClasses = {
        isActive: '_active',
        isLock: '_lock',
    }

    ariaAttribute = {
        ariaExpanded: 'aria-expanded',
        ariaLabel: 'aria-label'
    }

    stateAriaAttribute = {
        ariaExpandedTrue: true,
        ariaExpandedFalse: false,
        ariaLabelOpen: 'Open menu',
        ariaLabelClose: 'Close menu',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if (!this.rootElement) return
        this.headerBodyElement = this.rootElement.querySelector(this.selectors.headerBody)
        this.menuElement = this.rootElement.querySelector(this.selectors.menu)
        this.burgerElement = this.rootElement.querySelector(this.selectors.burger)
        this.menuLinksElements = this.rootElement.querySelectorAll(this.selectors.menuLinks)
        this.bindEvents()
    }

    clickMenuLinks = () => {
        document.body.classList.remove(this.stateClasses.isLock)
        this.burgerElement.classList.remove(this.stateClasses.isActive)
        this.menuElement.classList.remove(this.stateClasses.isActive)
        this.burgerElement.setAttribute(this.ariaAttribute.ariaExpanded, this.stateAriaAttribute.ariaExpandedFalse)
        this.burgerElement.setAttribute(this.ariaAttribute.ariaLabel, this.stateAriaAttribute.ariaLabelOpen)
    }

    toggleBurger = () => {
        this.burgerElement.classList.toggle(this.stateClasses.isActive)
        this.menuElement.classList.toggle(this.stateClasses.isActive)
        document.body.classList.toggle(this.stateClasses.isLock)

        this.burgerElement.setAttribute(this.ariaAttribute.ariaExpanded, this.stateAriaAttribute.ariaExpandedFalse)
        this.burgerElement.setAttribute(this.ariaAttribute.ariaLabel, this.stateAriaAttribute.ariaLabelOpen)

        if (this.burgerElement.classList.contains(this.stateClasses.isActive)) {
            this.burgerElement.setAttribute(this.ariaAttribute.ariaExpanded, this.stateAriaAttribute.ariaExpandedTrue)
            this.burgerElement.setAttribute(this.ariaAttribute.ariaLabel, this.stateAriaAttribute.ariaLabelClose)

            this.menuLinksElements.forEach(link => link.addEventListener('click', this.clickMenuLinks))
        }
    }

    scrollHeader = () => {
        const scrollPosition = window.scrollY

        if (scrollPosition >= 50) {
            this.rootElement.classList.add('_scroll')
            this.headerBodyElement.classList.add('_scroll')
        } else {
            this.rootElement.classList.remove('_scroll')
            this.headerBodyElement.classList.remove('_scroll')
        }
    }

    bindEvents() {
        this.burgerElement.addEventListener('click', this.toggleBurger)
        window.addEventListener('scroll', this.scrollHeader)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/js/modules/Modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/Modal.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const rootSelector = '[data-js-modal-target]'

class Modal {
    selectors = {
        modalPath: '[data-js-modal-path]',
        modalButtonClose: '[data-js-modal-close]'
    }

    dataAttributes = {
        modalTarget: 'data-js-modal-target',
        modalPath: 'data-js-modal-path',
    }

    stateClases = {
        isActive: '_active',
        isLock: '_lock'
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.modalPath = document.querySelectorAll(this.selectors.modalPath)
        this.modalButtonClose = this.rootElement.querySelector(this.selectors.modalButtonClose)
        this.bindEvents()
    }

    toggleClasses() {
        this.rootElement.classList.toggle(this.stateClases.isActive)
        document.body.classList.toggle(this.stateClases.isLock)
    }

    modalOpen = (e) => {
        let path = e.currentTarget.getAttribute(this.dataAttributes.modalPath)
        let modalTarget = this.rootElement.getAttribute(this.dataAttributes.modalTarget)

        if (modalTarget !== path) return

        this.toggleClasses()
        this.rootElement.showModal()
    }

    modalClose = (e) => {
        if (!this.rootElement.classList.contains('_active')) return

        this.toggleClasses()
        this.rootElement.close()
    }

    modalCancel = (e) => {
        if (!this.rootElement.classList.contains('_active')) return

        this.toggleClasses()
        this.rootElement.close()
    }

    modalCloseOverlay = (e) => {
        const dialog = e.currentTarget
        const isOnOverlayClick = e.target === dialog

        if (!isOnOverlayClick) return

        this.toggleClasses()
        this.rootElement.close()
    }

    bindEvents() {
        this.modalPath.forEach((trigger) => trigger.addEventListener('click', this.modalOpen))
        this.modalButtonClose.addEventListener('click', this.modalClose)
        this.rootElement.addEventListener('cancel', this.modalCancel)
        this.rootElement.addEventListener('click', this.modalCloseOverlay)
    }
}

class ModalCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((modal) => new Modal(modal))
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalCollection);

/***/ }),

/***/ "./src/js/modules/SignIn.js":
/*!**********************************!*\
  !*** ./src/js/modules/SignIn.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class SignIn {
    selectors = {
        root: '[data-js-sign-in]',
        inputUsername: '[data-js-input-sign-in-username]',
        inputPassword: '[data-js-input-sign-in-password]',
        buttonSubmit: '[data-js-sign-in-button]'
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if (!this.rootElement) return
        this.inputUsernameElement = this.rootElement.querySelector(this.selectors.inputUsername)
        this.inputPasswordElement = this.rootElement.querySelector(this.selectors.inputPassword)
        this.buttonSubmitElement = this.rootElement.querySelector(this.selectors.buttonSubmit)
        this.signUp()
    }

    // coutingTime(data) {
    //     const loginTime = Date.now()

    //     localStorage.setItem('userId', data.userId)
    //     localStorage.setItem('loginTime', loginTime)

    //     window.addEventListener('beforeunload', () => {
    //         const logoutTime = Date.now();
    //         const durationSec = Math.floor((logoutTime - loginTime) / 1000);
    //         const userId = data.userId;

    //         fetch('http://localhost:3000/api/track-time', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ userId, durationSec }),
    //             keepalive: true,
    //         });
    //     });
    // }

    postData(userData) {
        fetch('https://pdfcloud-server.onrender.com/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        }).then(response => {
            if (!response.ok) throw new Error(`Ошибка: ${response.status}`)
            return response.json();
        }).then(data => {
            console.log('Ответ от сервера:', data)
            if (data.success) {
                alert('Вход выполнен успешно!')
                localStorage.setItem('isUser', 'true')
                window.location.href = '/dashboard.html'

                // this.coutingTime(data)
            } else {
                alert('Ошибка: ' + data.message)
            }
        }).catch(err => {
            console.error('Ошибка при отправке:', err)
        })
    }

    clickButton = (e) => {
        e.preventDefault()

        const username = this.inputUsernameElement.value
        const password = this.inputPasswordElement.value

        const userData = {
            username,
            password
        }

        this.postData(userData)
    }

    signUp() {
        this.buttonSubmitElement.addEventListener('click', this.clickButton)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);

/***/ }),

/***/ "./src/js/modules/SignUp.js":
/*!**********************************!*\
  !*** ./src/js/modules/SignUp.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class SignUp {
    selectors = {
        root: '[data-js-sign-up]',
        inputUsername: '[data-js-input-username]',
        inputPassword: '[data-js-input-password]',
        buttonSubmit: '[data-js-button]',
        error: '[data-js-error]'
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if (!this.rootElement) return
        this.inputUsernameElement = this.rootElement.querySelector(this.selectors.inputUsername)
        this.inputPasswordElement = this.rootElement.querySelector(this.selectors.inputPassword)
        this.buttonSubmitElement = this.rootElement.querySelector(this.selectors.buttonSubmit)
        this.errorElement = this.rootElement.querySelector(this.selectors.error)
        this.signUp()
    }

    postData(userData) {
        fetch('https://pdfcloud-server.onrender.com/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`)
            }
            return response.json()
        }).then(data => {
            console.log('Ответ от сервера:', data)
            if (data.id) {
                alert('Регистрация выполнена успешно!');
            } else {
                alert('Ошибка регистрации!');
            }
        }).catch(error => {
            console.error('Ошибка при отправке:', error)
        })
    }

    clickButton = (e) => {
        e.preventDefault()

        this.inputUsernameElement.classList.remove('_error');
        this.inputPasswordElement.classList.remove('_error');
        this.errorElement.classList.remove('_active');

        // validation username
        if (this.inputUsernameElement.value.trim() === '') {
            this.inputUsernameElement.classList.add('_error')
            this.errorElement.classList.add('_active')
            return
        }

        // validation password
        if (this.inputPasswordElement.value.trim() === '') {
            this.inputPasswordElement.classList.add('_error')
            this.errorElement.classList.add('_active')
            return
        }

        const username = this.inputUsernameElement.value
        const password = this.inputPasswordElement.value

        const userData = {
            username,
            password
        }

        this.postData(userData)
    }

    signUp() {
        this.buttonSubmitElement.addEventListener('click', this.clickButton)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);

/***/ }),

/***/ "./src/js/modules/Spoller.js":
/*!***********************************!*\
  !*** ./src/js/modules/Spoller.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const rootElement = '[data-js-spoller]'

class Spoller {
    timeAnimationMS = 300 // 300 мс соответствует длительности transition

    selectors = {
        root: rootElement,
        button: '[data-js-spoller-button]',
        icon: '[data-js-spoller-icon]',
        body: '[data-js-spoller-body]'
    }

    stateClases = {
        isActive: '_active'
    }

    stateAttributes = {
        style: 'style',
        open: 'open'
    }

    inlineStyles = {
        hidden: 'hidden',
        transition: `max-height ${this.timeAnimationMS}ms ease-in-out`,
        block: 'block',
        none: 'none'
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.spollerButton = this.rootElement.querySelector(this.selectors.button)
        this.spollerIcon = this.rootElement.querySelector(this.selectors.icon)
        this.spollerBody = this.rootElement.querySelector(this.selectors.body)
        this.initSpoller()
    }

    updateSpollerClasses(isOpen) {
        this.spollerButton.classList.toggle(this.stateClases.isActive, isOpen)
        this.spollerBody.classList.toggle(this.stateClases.isActive, isOpen)
        this.spollerIcon?.classList.toggle(this.stateClases.isActive, isOpen)
    }

    toggleSpoller = (e) => {
        e.preventDefault()
        const isOpen = this.rootElement.hasAttribute(this.stateAttributes.open)

        // Общие стили для анимации споллера
        this.spollerBody.style.overflow = this.inlineStyles.hidden
        this.spollerBody.style.transition = this.inlineStyles.transition

        this.updateSpollerClasses(!isOpen)

        if (!isOpen) {
            // Анимация открытия споллера
            this.rootElement.open = !isOpen
            this.spollerBody.style.display = this.inlineStyles.block
            this.spollerBody.style.maxHeight = '0px'
            this.spollerBody.style.maxHeight = this.spollerBody.scrollHeight + 'px'
            setTimeout(() => this.spollerBody.removeAttribute(this.stateAttributes.style), this.timeAnimationMS)
        } else {
            // Анимация закрытия споллера
            this.spollerBody.style.maxHeight = this.spollerBody.scrollHeight + 'px'
            this.spollerBody.offsetHeight // reflow
            this.spollerBody.style.maxHeight = '0px'
            setTimeout(() => {
                this.spollerBody.removeAttribute(this.stateAttributes.style)
                this.spollerBody.style.display = this.inlineStyles.none
                this.rootElement.removeAttribute(this.stateAttributes.open)
            }, this.timeAnimationMS)
        }
    }

    initSpoller() {
        const isOpen = this.rootElement.hasAttribute(this.stateAttributes.open)
        if (!isOpen) this.spollerBody.style.display = this.inlineStyles.none
        this.updateSpollerClasses(isOpen)

        this.spollerButton.addEventListener('click', this.toggleSpoller)
    }
}

class SpollerCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootElement).forEach((element) => new Spoller(element))
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpollerCollection);

/***/ }),

/***/ "./src/js/modules/User.js":
/*!********************************!*\
  !*** ./src/js/modules/User.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class User {
    selectors = {
        root: '[data-js-user]',
        logOut: '[data-js-user-log-out]'
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if (!this.rootElement) return
        if (localStorage.getItem('isUser') !== 'true') window.location.href = '/index.html'
        this.buttonLogOut = document.querySelector(this.selectors.logOut)
        this.logOut()
        this.displayPDF()
    }

    logOut() {
        this.buttonLogOut.addEventListener('click', (e) => {
            console.log(this.buttonLogOut)
            localStorage.removeItem('isUser')
            window.location.href = '/index.html'
        })
    }

    renderIntroPDF(documents) {
        const containerPDF = this.rootElement.querySelector('[data-js-inner-pdf]')

        documents.forEach((document) => {
            const articlePdfHTML = `
                    <article class="files__article">
                        <a href="http://localhost:3000/api/pdf/${document.DocumentId}" class="files__box">
                            <img class="files__image" src="img/logo/pdf-logo.svg" alt="pdf document" width="120" height="120">
                        </a>
                        <h2><a href="http://localhost:3000/api/pdf/${document.DocumentId}" class="files__article-title" target="_blank">${document.FileName}</a></h2>
                        <a href="http://localhost:3000/api/pdf/${document.DocumentId}" class="button button_red" target="_blank">View Document</a>
                        <a href="http://localhost:3000/api/pdf/${document.DocumentId}/download" class="button button_red" target="_blank">Download</a>
                    </article>`

            containerPDF.insertAdjacentHTML('beforeend', articlePdfHTML)
        })
    }

    displayPDF() {
        fetch(`https://pdfcloud-server.onrender.com/api/documents`)
            .then(res => {
                if (!res.ok) throw new Error('Ошибка при загрузке PDF');
                return res.json();
            })
            .then(json => this.renderIntroPDF(json))
            .catch(console.error);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./src/js/modules/isWebp.js":
/*!**********************************!*\
  !*** ./src/js/modules/isWebp.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function isWebp() {
    function testWebP(callback) {

        var webP = new Image()
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2)
        }
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }

    testWebP(function (support) {

        if (support == true) {
            document.querySelector('body').classList.add('webp')
        } else {
            document.querySelector('body').classList.add('no-webp')
        }
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isWebp);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _modules_isWebp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/isWebp.js */ "./src/js/modules/isWebp.js");
/* harmony import */ var _modules_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Header.js */ "./src/js/modules/Header.js");
/* harmony import */ var _modules_Modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Modal.js */ "./src/js/modules/Modal.js");
/* harmony import */ var _modules_AdminLogin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/AdminLogin.js */ "./src/js/modules/AdminLogin.js");
/* harmony import */ var _modules_AdminPanel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/AdminPanel.js */ "./src/js/modules/AdminPanel.js");
/* harmony import */ var _modules_User_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/User.js */ "./src/js/modules/User.js");
/* harmony import */ var _modules_SignUp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/SignUp.js */ "./src/js/modules/SignUp.js");
/* harmony import */ var _modules_SignIn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/SignIn.js */ "./src/js/modules/SignIn.js");
/* harmony import */ var _modules_Spoller_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/Spoller.js */ "./src/js/modules/Spoller.js");
 // слежка за scss файлом

// ===================================================================










// import SliderCollection from "./modules/Slider.js"
// import TabsCollection from "./modules/Tabs.js"
// import MaskPhoneCollection from "./modules/MaskPhone.js"

(0,_modules_isWebp_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
new _modules_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"]()
new _modules_Modal_js__WEBPACK_IMPORTED_MODULE_3__["default"]()
new _modules_AdminLogin_js__WEBPACK_IMPORTED_MODULE_4__["default"]()
new _modules_AdminPanel_js__WEBPACK_IMPORTED_MODULE_5__["default"]()
new _modules_User_js__WEBPACK_IMPORTED_MODULE_6__["default"]()
new _modules_SignUp_js__WEBPACK_IMPORTED_MODULE_7__["default"]()
new _modules_SignIn_js__WEBPACK_IMPORTED_MODULE_8__["default"]()
new _modules_Spoller_js__WEBPACK_IMPORTED_MODULE_9__["default"]()
// new SliderCollection()
// new TabsCollection()
// new MaskPhoneCollection()
})();

/******/ })()
;
//# sourceMappingURL=app.90e91c7cc530a1766861.js.map