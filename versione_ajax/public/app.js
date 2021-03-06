/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var template_html = $('#templatecard').html();
  var template_function = Handlebars.compile(template_html);
  $.ajax({
    'url': 'database/lista_music.php',
    'method': 'GET',
    'success': function success(data) {
      var authors = [];

      for (var i = 0; i < data.length; i++) {
        var dati = data[i];
        console.log(dati);
        var card = {
          'img': dati.poster,
          'primoparametro': dati.title,
          'secondoparametro': dati.author,
          'terzoparametro': dati.genre,
          'quartoparametro': dati.year
        };
        var card_finale = template_function(card);
        $('.container').append(card_finale);

        if (!authors.includes(dati.author)) {
          authors.push(dati.author);
        }
      }

      for (var i = 0; i < authors.length; i++) {
        var value = parseInt(i + 1);
        console.log(authors[i]);
        $('.dropdown-list').append('<option value="' + authors[i] + '">' + authors[i] + '</option>');
      }

      $('.dropdown-list').change(function () {
        var val_select = $(this).val();

        if (val_select != '') {
          $('.container').empty();
          $.ajax({
            'url': 'database/lista_music.php',
            'method': 'GET',
            'success': function success(data) {
              var authors = [];

              for (var i = 0; i < data.length; i++) {
                var dati = data[i];
                var card = {
                  'img': dati.poster,
                  'primoparametro': dati.title,
                  'secondoparametro': dati.author,
                  'terzoparametro': dati.genre,
                  'quartoparametro': dati.year
                };

                if (val_select == dati.author) {
                  var card_finale = template_function(card);
                  $('.container').append(card_finale);
                }
              }
            },
            'error': function error() {
              console.log('si è verificato un errore');
            }
          });
        } else {
          $('.container').empty();

          for (var i = 0; i < data.length; i++) {
            var dati = data[i];
            var card = {
              'img': dati.poster,
              'primoparametro': dati.title,
              'secondoparametro': dati.author,
              'terzoparametro': dati.genre,
              'quartoparametro': dati.year
            };
            var card_finale = template_function(card);
            $('.container').append(card_finale);
          }
        }
      });
    },
    'error': function error() {
      console.log('si è verificato un errore');
    }
  });
});

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Applications/MAMP/htdocs/boolean esercizi/php-ajax-dischi/versione_ajax/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/boolean esercizi/php-ajax-dischi/versione_ajax/src/scss/app.scss */"./src/scss/app.scss");


/***/ })

/******/ });