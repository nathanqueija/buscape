module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_PRODUTO_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REMOVER_PRODUTO_CARRINHO; });
var ADD_PRODUTO_CARRINHO = 'ADD_PRODUTO_CARRINHO';
var REMOVER_PRODUTO_CARRINHO = 'REMOVER_PRODUTO_CARRINHO';

/***/ }),

/***/ "./actions/produtos.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addProduto;
/* harmony export (immutable) */ __webpack_exports__["b"] = removerProduto;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__("./actions/index.js");


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




function addProduto(produto) {
  var _this = this;

  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({ type: __WEBPACK_IMPORTED_MODULE_1____["a" /* ADD_PRODUTO_CARRINHO */], payload: produto });

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

function removerProduto(produto) {
  var _this2 = this;

  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(dispatch) {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({ type: __WEBPACK_IMPORTED_MODULE_1____["b" /* REMOVER_PRODUTO_CARRINHO */], payload: produto });

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
}

/***/ }),

/***/ "./components/Carrinho/CarrinhoItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_produtos__ = __webpack_require__("./actions/produtos.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
var _jsxFileName = '/Users/nathanqueija/Desktop/Projetos/estudos/buscape/components/Carrinho/CarrinhoItem.js';




var CarrinhoItem = function CarrinhoItem(_ref) {
  var produto = _ref.produto,
      removerProduto = _ref.removerProduto;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-3544208074' + ' ' + 'carrinho-item',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '3544208074',
      css: '.carrinho-item.jsx-3544208074{background:#c49d00;min-height:100px;margin-top:3px;padding:20px;display:grid;grid-template-columns:100px 1fr;grid-gap:10px;grid-template-areas: "img titulo" "img titulo" "img condicao" "img preco";}.produto__imagem.jsx-3544208074{background:white;border:1px solid black;grid-area:img;max-width:100px;max-height:100px;padding:10px;}.produto__titulo.jsx-3544208074{grid-area:titulo;color:white;display:grid;grid-template-columns:1fr 20px;grid-gap:10px;}.produto__remover.jsx-3544208074{color:black;cursor:pointer;width:auto;font-weight:600;}.produto__condicao.jsx-3544208074{grid-area:condicao;}.produto__preco.jsx-3544208074{grid-area:preco;}.produto__imagem.jsx-3544208074 img.jsx-3544208074{max-width:100%;max-height:100%;object-fit:contain;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FycmluaG8vQ2FycmluaG9JdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9VLEFBRzhCLEFBZUEsQUFTRixBQVFOLEFBT1EsQUFJSCxBQUlELFlBZEQsR0FlRSxDQUpoQixDQTVCeUIsQUFTYixFQXhCSyxBQXVDakIsUUFOVSxFQVJHLEVBdUJNLEtBL0NKLEVBaUNBLEVBbEJDLEVBVWUsUUF1Qi9CLENBL0NhLEdBZUssQUFrQmxCLFVBaENhLE1BZU0sR0FTTCxJQXZCa0IsVUFlakIsQUFTZixhQVJBLFNBZmMsY0FNZiwwRUFBQyIsImZpbGUiOiJjb21wb25lbnRzL0NhcnJpbmhvL0NhcnJpbmhvSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmF0aGFucXVlaWphL0Rlc2t0b3AvUHJvamV0b3MvZXN0dWRvcy9idXNjYXBlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZW1vdmVyUHJvZHV0b30gZnJvbSAnLi4vLi4vYWN0aW9ucy9wcm9kdXRvcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuY29uc3QgQ2FycmluaG9JdGVtID0gICh7cHJvZHV0bywgcmVtb3ZlclByb2R1dG99KSA9PiB7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnJpbmhvLWl0ZW1cIj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtcbiAgICAgICAgICBgXG4gICAgICAgICAgLmNhcnJpbmhvLWl0ZW17XG4gICAgICAgICAgYmFja2dyb3VuZDogI2M0OWQwMDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMWZyO1xuICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgXCJpbWcgdGl0dWxvXCJcbiAgICAgICAgICAgIFwiaW1nIHRpdHVsb1wiXG4gICAgICAgICAgICBcImltZyBjb25kaWNhb1wiXG4gICAgICAgICAgICBcImltZyBwcmVjb1wiXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnByb2R1dG9fX2ltYWdlbXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICBncmlkLWFyZWE6IGltZztcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnByb2R1dG9fX3RpdHVsb3tcbiAgICAgICAgICBncmlkLWFyZWE6IHRpdHVsbztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyMHB4O1xuICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICAucHJvZHV0b19fcmVtb3ZlcntcbiAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucHJvZHV0b19fY29uZGljYW97XG4gICAgICAgICAgZ3JpZC1hcmVhOiBjb25kaWNhbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucHJvZHV0b19fcHJlY297XG4gICAgICAgICAgZ3JpZC1hcmVhOiBwcmVjbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucHJvZHV0b19faW1hZ2VtIGltZ3tcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdXRvX19pbWFnZW1cIj5cbiAgICAgICAgICA8aW1nIHNyYz17cHJvZHV0by5pbWFnZXNbMF19IGFsdD1cImltYWdlbVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdXRvX190aXR1bG9cIj57cHJvZHV0by5uYW1lfVxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHJlbW92ZXJQcm9kdXRvKHByb2R1dG8pfSBjbGFzc05hbWU9XCJwcm9kdXRvX19yZW1vdmVyXCI+WDwvc3Bhbj5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1dG9fX2NvbmRpY2FvXCI+XG4gICAgICAgICAge2Ake3Byb2R1dG8ucHJpY2UuaW5zdGFsbG1lbnRzfXggUiQgJHtwcm9kdXRvLnByaWNlLmluc3RhbGxtZW50VmFsdWUudG9GaXhlZCgyKS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnLCcpfWB9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHV0b19fcHJlY29cIj5cbiAgICAgICAgICB7YG91IFIkICR7cHJvZHV0by5wcmljZS52YWx1ZS50b0ZpeGVkKDIpLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcsJyl9IMOgIHZpc3RhYH1cbiAgICAgICAgPC9wPlxuICAgIDwvZGl2PlxuXG4gIClcbn1cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBwcm9kdXRvcyB9KSA9PiAoe1xuICBwcm9kdXRvcyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge3JlbW92ZXJQcm9kdXRvfSkoQ2FycmluaG9JdGVtKTsiXX0= */\n/*@ sourceURL=components/Carrinho/CarrinhoItem.js */'
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-3544208074' + ' ' + 'produto__imagem',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: produto.images[0], alt: 'imagem', className: 'jsx-3544208074',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      {
        className: 'jsx-3544208074' + ' ' + 'produto__titulo',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      },
      produto.name,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'span',
        { onClick: function onClick() {
            return removerProduto(produto);
          }, className: 'jsx-3544208074' + ' ' + 'produto__remover',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        },
        'X'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      {
        className: 'jsx-3544208074' + ' ' + 'produto__condicao',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      },
      produto.price.installments + 'x R$ ' + produto.price.installmentValue.toFixed(2).toString().replace('.', ',')
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      {
        className: 'jsx-3544208074' + ' ' + 'produto__preco',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      },
      'ou R$ ' + produto.price.value.toFixed(2).toString().replace('.', ',') + ' \xE0 vista'
    )
  );
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var produtos = _ref2.produtos;
  return {
    produtos: produtos
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps, { removerProduto: __WEBPACK_IMPORTED_MODULE_2__actions_produtos__["b" /* removerProduto */] })(CarrinhoItem));

/***/ }),

/***/ "./components/Carrinho/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CarrinhoItem__ = __webpack_require__("./components/Carrinho/CarrinhoItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
var _jsxFileName = '/Users/nathanqueija/Desktop/Projetos/estudos/buscape/components/Carrinho/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Carrinho = function (_Component) {
  _inherits(Carrinho, _Component);

  function Carrinho() {
    _classCallCheck(this, Carrinho);

    return _possibleConstructorReturn(this, (Carrinho.__proto__ || Object.getPrototypeOf(Carrinho)).apply(this, arguments));
  }

  _createClass(Carrinho, [{
    key: 'getTotalValue',
    value: function getTotalValue() {
      var produtos = this.props.produtos;


      var valorTotal = produtos.carrinho.reduce(function (valorAnterior, valorAtual) {
        return valorAnterior + valorAtual.price.value;
      }, 0);

      return valorTotal;
    }
  }, {
    key: 'render',
    value: function render() {
      var produtos = this.props.produtos;

      var valorTotal = this.getTotalValue().toFixed(2);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-2605743037' + ' ' + 'carrinho',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2605743037',
          css: '.carrinho.jsx-2605743037{background:#daaf00;width:100%;height:auto;position:absolute;box-shadow:0px 1px 6px 3px rgba(0,0,0,0.31);padding-bottom:30px;z-index:9999;}.carrinho__footer.jsx-2605743037{margin:20px 20px;}.carrinho__status.jsx-2605743037{margin:20px 20px;}.carrinho__footer.jsx-2605743037>p.jsx-2605743037{font-size:16px;text-align:right;line-height:25px;}.carrinho__footer.jsx-2605743037 p.jsx-2605743037:first-of-type{border-bottom:1px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FycmluaG8vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJXLEFBR29DLEFBVU4sQUFJQSxBQUlGLEFBTWEsZUFMWCxFQVJuQixBQUlBLEVBZGlCLFdBQ0MsQUF1QmxCLEVBTG1CLFVBakJLLE9Ba0J4QixXQWpCa0QsNENBQ3hCLG9CQUNQLGFBQ25CIiwiZmlsZSI6ImNvbXBvbmVudHMvQ2FycmluaG8vaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25hdGhhbnF1ZWlqYS9EZXNrdG9wL1Byb2pldG9zL2VzdHVkb3MvYnVzY2FwZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FycmluaG9JdGVtIGZyb20gJy4vQ2FycmluaG9JdGVtJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNsYXNzIENhcnJpbmhvIGV4dGVuZHMgQ29tcG9uZW50e1xuXG5cbiAgZ2V0VG90YWxWYWx1ZSgpe1xuICAgIGNvbnN0IHtwcm9kdXRvc30gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdmFsb3JUb3RhbCA9ICBwcm9kdXRvcy5jYXJyaW5oby5yZWR1Y2UoZnVuY3Rpb24odmFsb3JBbnRlcmlvciwgdmFsb3JBdHVhbCkge1xuICAgICAgcmV0dXJuIHZhbG9yQW50ZXJpb3IgKyB2YWxvckF0dWFsLnByaWNlLnZhbHVlO1xuICAgIH0sIDApO1xuXG4gICAgcmV0dXJuIHZhbG9yVG90YWw7XG5cbiAgfVxuXG4gIHJlbmRlcigpe1xuXG4gICAgY29uc3Qge3Byb2R1dG9zfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmFsb3JUb3RhbCA9IHRoaXMuZ2V0VG90YWxWYWx1ZSgpLnRvRml4ZWQoMik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FycmluaG9cIj5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuY2FycmluaG97XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2RhYWYwMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNnB4IDNweCByZ2JhKDAsMCwwLDAuMzEpO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcnJpbmhvX19mb290ZXJ7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAgLmNhcnJpbmhvX19zdGF0dXN7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FycmluaG9fX2Zvb3RlciA+IHB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJyaW5ob19fZm9vdGVyIHA6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAge3Byb2R1dG9zLmNhcnJpbmhvLmxlbmd0aCA+IDAgPyBwcm9kdXRvcy5jYXJyaW5ob1xuICAgICAgICAgIC5tYXAocHJvZHV0byA9PiA8Q2FycmluaG9JdGVtIGtleT17cHJvZHV0by5pZH0gcHJvZHV0bz17cHJvZHV0b30vPikgOiA8cCBjbGFzc05hbWU9J2NhcnJpbmhvX19zdGF0dXMnPlNldSBjYXJyaW5obyBlc3TDoSB2YXppbzwvcD59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FycmluaG9fX2Zvb3RlclwiPlxuICAgICAgICAgIDxwPnN1YnRvdGFsPC9wPlxuICAgICAgICAgIDxwPntgMTB4IFIkICR7KHZhbG9yVG90YWwvMTApLnRvRml4ZWQoMikudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJywnKX1gfTwvcD5cbiAgICAgICAgICA8cD57YG91IFIkICR7dmFsb3JUb3RhbC50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnLCcpfSDDoCB2aXN0YWB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBwcm9kdXRvcyB9KSA9PiAoe1xuICBwcm9kdXRvcyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoQ2FycmluaG8pOyJdfQ== */\n/*@ sourceURL=components/Carrinho/index.js */'
        }),
        produtos.carrinho.length > 0 ? produtos.carrinho.map(function (produto) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CarrinhoItem__["a" /* default */], { key: produto.id, produto: produto, __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          });
        }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: 'jsx-2605743037' + ' ' + 'carrinho__status',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          },
          'Seu carrinho est\xE1 vazio'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-2605743037' + ' ' + 'carrinho__footer',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-2605743037',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              }
            },
            'subtotal'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-2605743037',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              }
            },
            '10x R$ ' + (valorTotal / 10).toFixed(2).toString().replace('.', ',')
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-2605743037',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              }
            },
            'ou R$ ' + valorTotal.toString().replace('.', ',') + ' \xE0 vista'
          )
        )
      );
    }
  }]);

  return Carrinho;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var produtos = _ref.produtos;
  return {
    produtos: produtos
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps, null)(Carrinho));

/***/ }),

/***/ "./components/Galeria/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/nathanqueija/Desktop/Projetos/estudos/buscape/components/Galeria/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Galeria = function (_Component) {
  _inherits(Galeria, _Component);

  function Galeria(props) {
    _classCallCheck(this, Galeria);

    var _this = _possibleConstructorReturn(this, (Galeria.__proto__ || Object.getPrototypeOf(Galeria)).call(this, props));

    _this.state = {
      currentImage: props.images[0]
    };

    _this.onClickThumb = _this.onClickThumb.bind(_this);
    return _this;
  }

  _createClass(Galeria, [{
    key: "onClickThumb",
    value: function onClickThumb(e) {
      this.setState({ currentImage: e.target.src });

      var children = e.target.parentElement.childNodes;

      children.forEach(function (currentValue, currentIndex) {
        currentValue.classList.remove("selected");
      });

      e.target.classList.add("selected");
    }
  }, {
    key: "handleImageError",
    value: function handleImageError(e) {
      e.target.src = '/static/nao_disponivel.jpg';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var currentImage = this.state.currentImage;
      var images = this.props.images;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-3274514095" + " " + "galeria",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "3274514095",
          css: "@media (max-width:774px){.galeria.jsx-3274514095{grid-template-columns:100px 200px !important;}}@media (max-width:470px){.galeria.jsx-3274514095{grid-template-columns:40px 1fr !important;}.thumbs.jsx-3274514095{grid-template-columns:40px !important;}}.galeria.jsx-3274514095{display:grid;grid-template-columns:60px 1fr;grid-gap:5px;}.thumbs.jsx-3274514095{background:white;display:grid;grid-template-columns:60px;grid-gap:5px;}.thumbs.jsx-3274514095 img.jsx-3274514095{border:1px solid #dfdfdf;border-radius:3px;max-width:100%;padding:3px;background:white;cursor:pointer;box-sizing:border-box;}.selected.jsx-3274514095{border:1px solid #ffcd00 !important;}.image.jsx-3274514095{max-width:100%;object-fit:contain;width:100%;padding:10px;background:white;box-sizing:border-box;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvR2FsZXJpYS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q1csQUFLdUUsQUFPSCxBQUtsRCxBQUlVLEFBTVEsQUFTTSxBQVVZLEFBSXhCLGFBNUJnQixFQTZCWixFQXZCRixRQVNHLEtBUlcsSUF1QnBCLEVBTFgsRUE5QkksSUFKRSxDQXlCVyxDQWZKLENBakJQLEFBK0NPLFlBN0JiLEFBTWlCLENBU0gsQUFlRyxZQXJCakIsQUFPbUIsS0FlRyxZQWRMLFVBZUMsS0FkTyxzQkFDekIsNENBY0EiLCJmaWxlIjoiY29tcG9uZW50cy9HYWxlcmlhL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uYXRoYW5xdWVpamEvRGVza3RvcC9Qcm9qZXRvcy9lc3R1ZG9zL2J1c2NhcGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIEdhbGVyaWEgZXh0ZW5kcyBDb21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudEltYWdlOiBwcm9wcy5pbWFnZXNbMF1cbiAgICB9XG5cbiAgICB0aGlzLm9uQ2xpY2tUaHVtYiA9IHRoaXMub25DbGlja1RodW1iLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbkNsaWNrVGh1bWIoZSl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudEltYWdlOiBlLnRhcmdldC5zcmN9KTtcblxuICAgIGNvbnN0IGNoaWxkcmVuID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChcbiAgICAgIGZ1bmN0aW9uKGN1cnJlbnRWYWx1ZSwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGN1cnJlbnRWYWx1ZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICB9XG4gICAgKTtcblxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcblxuICB9XG5cbiAgaGFuZGxlSW1hZ2VFcnJvcihlKXtcbiAgICBlLnRhcmdldC5zcmMgPSAnL3N0YXRpYy9uYW9fZGlzcG9uaXZlbC5qcGcnO1xuICB9XG5cbiAgcmVuZGVyKCl7XG5cbiAgICBjb25zdCB7Y3VycmVudEltYWdlfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge2ltYWdlc30gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxlcmlhXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcblxuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzc0cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmdhbGVyaWF7XG4gICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAyMDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDcwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmdhbGVyaWF7XG4gICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDFmciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnRodW1ic3tcbiAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAhaW1wb3J0YW50XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5nYWxlcmlhe1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggMWZyO1xuICAgICAgICAgICAgICBncmlkLWdhcDogNXB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnRodW1ic3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweDtcbiAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiA1cHg7XG5cblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnRodW1icyBpbWd7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuc2VsZWN0ZWR7XG4gICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmNkMDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5pbWFnZXtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aHVtYnNcIj5cbiAgICAgICAgICB7aW1hZ2VzLm1hcChpbWFnZSA9PiA8aW1nIGtleT17aW1hZ2V9IGNsYXNzTmFtZT17aW1hZ2UgPT09IGN1cnJlbnRJbWFnZSA/ICdzZWxlY3RlZCcgOiAnJ30gb25FcnJvcj17dGhpcy5oYW5kbGVJbWFnZUVycm9yfSBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tUaHVtYn0gc3JjPXtpbWFnZX0gYWx0PVwiU2FtcGxlIHBob3RvXCIgLz5cbiAgICAgICAgICApfVxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlXCIgc3JjPXtjdXJyZW50SW1hZ2V9IGFsdD1cIlNhbXBsZSBwaG90b1wiIC8+XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYWxlcmlhOyJdfQ== */\n/*@ sourceURL=components/Galeria/index.js */"
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-3274514095" + " " + "thumbs",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            }
          },
          images.map(function (image) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { key: image, onError: _this2.handleImageError, onClick: _this2.onClickThumb, src: image, alt: "Sample photo", className: "jsx-3274514095" + " " + ((image === currentImage ? 'selected' : '') || ""),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 102
              }
            });
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: currentImage, alt: "Sample photo", className: "jsx-3274514095" + " " + "image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        })
      );
    }
  }]);

  return Galeria;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Galeria);

/***/ }),

/***/ "./components/Header/MenuButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/nathanqueija/Desktop/Projetos/estudos/buscape/components/Header/MenuButton.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    {
      className: "jsx-4031268975" + " " + "menu-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "4031268975",
      css: ".menu-button.jsx-4031268975{box-sizing:border-box;display:grid;padding:10px;grid-gap:1px;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;cursor:pointer;min-height:100%;}.menu-button.jsx-4031268975>*.jsx-4031268975{background:black;height:5px;border-radius:70px;margin-bottom:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyL01lbnVCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS1UsQUFHaUMsQUFTSCxpQkFDTixLQVRFLE1BVU0sT0FUTixZQVVLLENBVEwsYUFDUSxJQVN2Qix3RUFSaUIsZUFDQyxnQkFDbEIiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIvTWVudUJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmF0aGFucXVlaWphL0Rlc2t0b3AvUHJvamV0b3MvZXN0dWRvcy9idXNjYXBlIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1idXR0b25cIj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtcbiAgICAgICAgICBgXG4gICAgICAgICAgLm1lbnUtYnV0dG9ue1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxcHg7XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWVudS1idXR0b24gPiAqIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXY+PC9kaXY+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=components/Header/MenuButton.js */"
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "jsx-4031268975",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "jsx-4031268975",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "jsx-4031268975",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    })
  );
});

/***/ }),

/***/ "./components/Header/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MenuButton__ = __webpack_require__("./components/Header/MenuButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
var _jsxFileName = '/Users/nathanqueija/Desktop/Projetos/estudos/buscape/components/Header/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var produtos = this.props.produtos;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'header',
        {
          className: 'jsx-1638187780',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1638187780',
          css: '.logo.jsx-1638187780{padding:10px;margin-left:5px;}.logo.jsx-1638187780 img.jsx-1638187780{max-width:100%;max-height:100%;object-fit:contain;}.badge.jsx-1638187780{cursor:pointer;position:absolute;box-sizing:border-box;}.carrinho-badge.jsx-1638187780{height:20px;width:20px;background:#d62a33;border-radius:50px;display:grid;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:35px;}.carrinho-badge.jsx-1638187780 p.jsx-1638187780{color:white;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdvQixBQUcwQixBQUtDLEFBTUQsQUFPSCxBQVdBLFlBVkQsQUFXTSxDQTdCQyxFQUtBLEFBTUEsUUFRQyxNQWxCbkIsRUFLbUIsRUFPRyxTQU9ILFFBYm5CLEtBT0EsTUFPYSxhQUNRLHVCQVFyQixxREFQdUIsbUdBQ1AsZ0JBQ2hCIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uYXRoYW5xdWVpamEvRGVza3RvcC9Qcm9qZXRvcy9lc3R1ZG9zL2J1c2NhcGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSAnLi9NZW51QnV0dG9uJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudHtcbiAgcmVuZGVyKCl7XG5cbiAgICBjb25zdCB7cHJvZHV0b3N9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4oXG4gICAgICA8aGVhZGVyPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubG9nb3tcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2dvIGltZ3tcbiAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5iYWRnZXtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FycmluaG8tYmFkZ2V7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkNjJhMzM7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJyaW5oby1iYWRnZSBwe1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2xvZ28ucG5nXCIgYWx0PVwiTG9nbyBkbyBCdXNjYXDDqVwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DaGFuZ2V9PlxuICAgICAgICAgIHtwcm9kdXRvcy5jYXJyaW5oby5sZW5ndGggPiAwID9cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhZGdlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnJpbmhvLWJhZGdlXCI+PHA+e3Byb2R1dG9zLmNhcnJpbmhvLmxlbmd0aH08L3A+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+IDogJyd9XG4gICAgICAgICAgPE1lbnVCdXR0b24vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgIClcbiAgfVxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgcHJvZHV0b3MgfSkgPT4gKHtcbiAgcHJvZHV0b3MsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKEhlYWRlcik7Il19 */\n/*@ sourceURL=components/Header/index.js */'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-1638187780' + ' ' + 'logo',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: '/static/logo.png', alt: 'Logo do Buscap\xE9', className: 'jsx-1638187780',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
          className: 'jsx-1638187780',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { onClick: this.props.onChange, className: 'jsx-1638187780',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          },
          produtos.carrinho.length > 0 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-1638187780' + ' ' + 'badge',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-1638187780' + ' ' + 'carrinho-badge',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'p',
                {
                  className: 'jsx-1638187780',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  }
                },
                produtos.carrinho.length
              )
            )
          ) : '',
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__MenuButton__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          })
        )
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

;

var mapStateToProps = function mapStateToProps(_ref) {
  var produtos = _ref.produtos;
  return {
    produtos: produtos
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps, null)(Header));

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Carrinho__ = __webpack_require__("./components/Carrinho/index.js");
var _jsxFileName = '/Users/nathanqueija/Desktop/Projetos/estudos/buscape/components/Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/* babel-plugin-inline-import '../styles/style.css' */var styles = '@import url(\'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700\');\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    background: #f3f3f3;\n    font-family: \'Montserrat\', sans-serif;\n}\n\nheader{\n    min-height: 60px;\n    background: #ffcd00;\n    display: grid;\n    grid-template-columns: 100px 1fr 50px;\n}';




var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      open: false
    };

    _this.abrirCarrinho = _this.abrirCarrinho.bind(_this);
    return _this;
  }

  _createClass(Layout, [{
    key: 'abrirCarrinho',
    value: function abrirCarrinho() {
      this.setState({ open: !this.state.open });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          _props$title = _props.title,
          title = _props$title === undefined ? 'Buscapé' : _props$title;
      var open = this.state.open;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'title',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            },
            title
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { charSet: 'utf-8', __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: styles.__hash,
          css: styles
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* default */], { onChange: this.abrirCarrinho, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }),
        open && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Carrinho__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }),
        children
      );
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/PriceTag/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/nathanqueija/Desktop/Projetos/estudos/buscape/components/PriceTag/index.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    {
      className: "jsx-250189772",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "250189772",
      css: ".tag.jsx-250189772{display:inline-block;box-sizing:content-box;height:10px;position:relative;content:\"\";cursor:pointer;margin:0 13px 0 0;padding:10px 20px 10px 8px;border:none;border-radius:4px 1px 1px 4px;color:white;text-align:center;text-transform:uppercase;-o-text-overflow:ellipsis;text-overflow:ellipsis;background:#008CBA;top:20px;}.tag.jsx-250189772 h5.jsx-250189772{font-size:10px;font-weight:300;color:#fff;margin-top:0;min-width:100%;text-align:center;}.tag.jsx-250189772:before{display:inline-block;box-sizing:content-box;z-index:1;width:22px;height:21px;position:absolute;content:\"\";cursor:pointer;top:5px;right:-10px;border:none;border-radius:1px 1px 4px;color:#fff;-o-text-overflow:clip;text-overflow:clip;background:#008CBA;text-shadow:none;-webkit-transform:rotateY(1deg) rotateZ(-45deg);-ms-transform:rotateY(1deg) rotateZ(-45deg);transform:rotateY(1deg) rotateZ(-45deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJpY2VUYWcvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS1UsQUFHa0MsQUFtQk4sQUFRTSxlQVBMLE1BbkJPLEFBMkJBLFVBUFosV0FDRSxFQXBCRCxBQTJCRixVQUNDLENBUEksQ0FwQkcsU0E0Qk4sS0FQTSxJQXBCUCxHQTRCTyxRQTNCSCxHQW9CakIsT0FRYSxLQTNCTyxNQTRCSCxZQTNCWSxHQTRCbkIsUUFDSSxZQUNBLElBN0JBLFFBOEJjLElBN0JJLHNCQThCbkIsUUE3QkMsR0E4QlUsU0E3QkosYUE4QkMsS0E3Qk0sY0E4Qk4sV0E3Qk8sUUE4QlQsaUJBQ3VCLENBOUJqQix1QkFDSixtQkFDVixTQUNYLGdGQTRCQSIsImZpbGUiOiJjb21wb25lbnRzL1ByaWNlVGFnL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uYXRoYW5xdWVpamEvRGVza3RvcC9Qcm9qZXRvcy9lc3R1ZG9zL2J1c2NhcGUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge1xuICAgICAgICAgIGBcbiAgICAgICAgICAudGFnIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxM3B4IDAgMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDhweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAxcHggMXB4IDRweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwOENCQTtcbiAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRhZyBoNSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGFnOmJlZm9yZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgICAgIGhlaWdodDogMjFweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIHJpZ2h0OiAtMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFweCAxcHggNHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAtby10ZXh0LW92ZXJmbG93OiBjbGlwO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogY2xpcDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDhDQkE7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxZGVnKSByb3RhdGVaKC00NWRlZyk7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ1wiPlxuICAgICAgICA8aDU+TUVMSE9SIFBSRcOHTzwvaDU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=components/PriceTag/index.js */"
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "div",
      {
        className: "jsx-250189772" + " " + "tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "h5",
        {
          className: "jsx-250189772",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        },
        "MELHOR PRE\xC7O"
      )
    )
  );
});

/***/ }),

/***/ "./components/Produto/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PriceTag__ = __webpack_require__("./components/PriceTag/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Galeria__ = __webpack_require__("./components/Galeria/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_produtos__ = __webpack_require__("./actions/produtos.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
var _jsxFileName = '/Users/nathanqueija/Desktop/Projetos/estudos/buscape/components/Produto/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Produto = function (_Component) {
  _inherits(Produto, _Component);

  function Produto() {
    _classCallCheck(this, Produto);

    return _possibleConstructorReturn(this, (Produto.__proto__ || Object.getPrototypeOf(Produto)).apply(this, arguments));
  }

  _createClass(Produto, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          produto = _props.produto,
          add = _props.addProduto;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-923871149' + ' ' + 'produto',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '923871149',
          css: '@media (max-width:774px){.produto.jsx-923871149{grid-template-columns:1fr !important;}.produto__titulo.jsx-923871149{min-width:100%;}}@media (max-width:470px){.produto__preco.jsx-923871149{grid-template-columns:1fr !important;}.produto__info.jsx-923871149{width:100% !important;}}.produto.jsx-923871149{min-height:200px;box-sizing:border-box;background:white;margin:15px 8px;border-radius:3px;box-shadow:0px 0px 5px 0px rgba(0,0,0,0.14);display:grid;grid-template-columns:300px 1fr;padding:25px 10px;}.produto__info.jsx-923871149{background:white;box-sizing:border-box;}.produto__titulo.jsx-923871149{border-bottom:1px solid #e6e6e6;font-weight:400;display:inline-block;padding-bottom:10px;max-width:100%;min-width:100%;}.produto__titulo.jsx-923871149 p.jsx-923871149{color:#444444;font-size:20px;}.produto__titulo.jsx-923871149 p.jsx-923871149::after{content:"";color:red;margin-left:10px;}.produto__preco.jsx-923871149{margin-top:20px;display:grid;grid-template-columns:200px 220px;grid-gap:20px;}.produto__condicao.jsx-923871149 p.jsx-923871149:first-of-type{color:#22b14c;font-size:25px;font-weight:400;}.produto__condicao--destaque.jsx-923871149{font-weight:500;font-size:30px;}.produto__condicao.jsx-923871149 p.jsx-923871149:last-of-type{font-size:14px;color:#444444;}.preco.jsx-923871149{color:#22b14c;}.adicionarBtn.jsx-923871149{background:#22b14c;border-radius:2px;padding:10px;color:white;-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.adicionarBtn.jsx-923871149 p.jsx-923871149::after{content:">";color:white;margin-left:10px;font-weight:700;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZHV0by9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlWSxBQUs4RCxBQUl4QixBQVF3QixBQUlsQixBQUtOLEFBWUQsQUFLWSxBQVVkLEFBT0osQUFNTSxBQVFGLEFBT0UsQUFLRCxBQUtELEFBSUssQUFVUixXQTVDRixDQTZDRSxFQXBESSxBQXFCQSxBQWlCbkIsQ0FqRk0sQUE0RWMsQ0FwQkgsQUFlRSxDQXZETyxBQVlELEVBeURILEVBbENGLENBeENmLEVBcUZlLEtBbkRwQixBQVlzQyxBQVFsQixBQVlwQixFQUxBLENBdkNnQixLQXRDWixBQVlBLEFBK0VhLENBbENqQixDQW5DcUIsQUFZckIsRUFvRW1CLElBOUJuQixHQWpDcUIsRUFxREwsTUFyRUksQ0FnRnBCLEtBVnFCLENBOUJILE1BdkJFLEdBaEJFLEtBeUN0QixZQXhCZSxDQWhCaUMsY0FpQmpDLGVBRWYsV0FrRG1CLElBcEVGLFdBcUVJLEVBcEVlLGdDQUNkLGtCQUN0QixpQ0FtRUEiLCJmaWxlIjoiY29tcG9uZW50cy9Qcm9kdXRvL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uYXRoYW5xdWVpamEvRGVza3RvcC9Qcm9qZXRvcy9lc3R1ZG9zL2J1c2NhcGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByaWNlVGFnIGZyb20gJy4uL1ByaWNlVGFnJztcbmltcG9ydCBHYWxlcmlhIGZyb20gJy4uL0dhbGVyaWEnO1xuaW1wb3J0IHthZGRQcm9kdXRvfSBmcm9tICcuLi8uLi9hY3Rpb25zL3Byb2R1dG9zJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jbGFzcyBQcm9kdXRvIGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gIHJlbmRlcigpe1xuXG4gICAgY29uc3QgeyBwcm9kdXRvLCBhZGRQcm9kdXRvIDogYWRkIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHV0b1wiPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGBcblxuICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzc0cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1dG97XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnByb2R1dG9fX3RpdHVsb3tcbiAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ3MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdXRvX19wcmVjb3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgLnByb2R1dG9fX2luZm97XG4gICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5wcm9kdXRve1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCA4cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xNCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnByb2R1dG9fX2luZm97XG4gICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucHJvZHV0b19fdGl0dWxve1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucHJvZHV0b19fdGl0dWxvIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgIC5wcm9kdXRvX190aXR1bG8gcDo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucHJvZHV0b19fcHJlY297XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMjIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnByb2R1dG9fX2NvbmRpY2FvIHA6Zmlyc3Qtb2YtdHlwZXtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMmIxNGM7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5wcm9kdXRvX19jb25kaWNhby0tZGVzdGFxdWV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucHJvZHV0b19fY29uZGljYW8gcDpsYXN0LW9mLXR5cGV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucHJlY297XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjJiMTRjO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5hZGljaW9uYXJCdG57XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMmIxNGM7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYWRpY2lvbmFyQnRuIHA6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIj5cIjtcbiAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgXG4gICAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgIDxHYWxlcmlhIGltYWdlcz17cHJvZHV0by5pbWFnZXN9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdXRvX19pbmZvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdXRvX190aXR1bG9cIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7cHJvZHV0by5uYW1lfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGk+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxQcmljZVRhZy8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdXRvX19wcmVjb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdXRvX19jb25kaWNhb1wiPlxuICAgICAgICAgICAgICA8cD4xMHggUiQgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHV0b19fY29uZGljYW8tLWRlc3RhcXVlXCI+MzY2LDU2PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgPHA+b3UgUiQ8c3BhbiBjbGFzc05hbWU9XCJwcmVjb1wiPiAzLjE5OSwwMDwvc3Bhbj4gw6AgdmlzdGE8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRpY2lvbmFyQnRuXCIgb25DbGljaz17KCkgPT4gYWRkKHByb2R1dG8pfT5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICBBZGljaW9uYXIgYW8gY2FycmluaG9cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwge2FkZFByb2R1dG99KShQcm9kdXRvKTsiXX0= */\n/*@ sourceURL=components/Produto/index.js */'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Galeria__["a" /* default */], { images: produto.images, __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-923871149' + ' ' + 'produto__info',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-923871149' + ' ' + 'produto__titulo',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              {
                className: 'jsx-923871149',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 132
                }
              },
              produto.name
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', {
              className: 'jsx-923871149',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 135
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__PriceTag__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-923871149' + ' ' + 'produto__preco',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 138
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-923871149' + ' ' + 'produto__condicao',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 139
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'p',
                {
                  className: 'jsx-923871149',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                  }
                },
                '10x R$ ',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'span',
                  {
                    className: 'jsx-923871149' + ' ' + 'produto__condicao--destaque',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 140
                    }
                  },
                  '366,56'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'p',
                {
                  className: 'jsx-923871149',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                  }
                },
                'ou R$',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'span',
                  {
                    className: 'jsx-923871149' + ' ' + 'preco',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 141
                    }
                  },
                  ' 3.199,00'
                ),
                ' \xE0 vista'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              { onClick: function onClick() {
                  return add(produto);
                }, className: 'jsx-923871149' + ' ' + 'adicionarBtn',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 143
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'p',
                {
                  className: 'jsx-923871149',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                  }
                },
                'Adicionar ao carrinho'
              )
            )
          )
        )
      );
    }
  }]);

  return Produto;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(null, { addProduto: __WEBPACK_IMPORTED_MODULE_4__actions_produtos__["a" /* addProduto */] })(Produto));

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_store__ = __webpack_require__("./utils/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Produto__ = __webpack_require__("./components/Produto/index.js");
var _jsxFileName = '/Users/nathanqueija/Desktop/Projetos/estudos/buscape/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Index = function (_Component) {
    _inherits(Index, _Component);

    function Index() {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
    }

    _createClass(Index, [{
        key: 'render',
        value: function render() {
            var produtos = this.props.produtos;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'produtos', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                        }
                    },
                    produtos.all.map(function (produto) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Produto__["a" /* default */], { key: produto.product.id, produto: produto.product, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 15
                            }
                        });
                    })
                )
            );
        }
    }]);

    return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
    var produtos = _ref.produtos;
    return {
        produtos: produtos
    };
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_2__utils_store__["a" /* default */], mapStateToProps, null)(Index));

/***/ }),

/***/ "./reducers/Produtos/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./actions/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



var data = __webpack_require__("./resources/data.json");

var INITIAL_STATE = {
  all: data.items,
  carrinho: []
};
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ADD_PRODUTO_CARRINHO */]:
      var selected = state.carrinho.filter(function (produto) {
        return produto.id === action.payload.id;
      });
      return _extends({}, state, { carrinho: selected.length > 0 ? state.carrinho : [].concat(_toConsumableArray(state.carrinho), [action.payload]) });
    case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* REMOVER_PRODUTO_CARRINHO */]:
      var filtered = state.carrinho.filter(function (produto) {
        return produto.id !== action.payload.id;
      });
      return _extends({}, state, { carrinho: filtered });
    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Produtos__ = __webpack_require__("./reducers/Produtos/index.js");



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  produtos: __WEBPACK_IMPORTED_MODULE_1__Produtos__["a" /* default */]
}));

/***/ }),

/***/ "./resources/data.json":
/***/ (function(module, exports) {

module.exports = {"items":[{"product":{"id":2321312,"name":"Smartphone Apple iPhone 7 128GB","images":["http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb_600x600-PU98460_1.jpg","http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb/__200x400-PU98460_2_c.jpg?v=2347575274","http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb/__200x400-PU98460_3_c.jpg?v=318433138","http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb/__200x400-PU98460_4_c.jpg?v=33273730"],"price":{"value":3509.1,"installments":10,"installmentValue":389.9}}},{"product":{"id":9971,"name":"Smart TV Samsung Série 4 UN32J4300AG 32 polegadas LED Plana","images":["http://mthumbs.buscape.com.br/tv/smart-tv-samsung-serie-4-un32j4300ag-32-polegadas-led-plana_600x600-PU95547_1.jpg","http://thumbs.buscape.com.br/__400x400-PU95547_2_c.jpg?v=3988579075","http://thumbs.buscape.com.br/__400x400-PU95547_4_c.jpg?v=4208003525","http://thumbs.buscape.com.br/__231312400x400-PU95547_5_c.jpg?v=1473261122"],"price":{"value":1139.9,"installments":10,"installmentValue":134.11}}},{"product":{"id":6717131,"name":"Câmera Digital Canon EOS Rebel T5i 18.0 Megapixels","images":["http://mthumbs.buscape.com.br/camera-digital/canon-eos-rebel-t5i-18-0-megapixels_600x600-PU7bf7b_1.jpg"],"price":{"value":1999.2,"installments":10,"installmentValue":235.2}}},{"product":{"id":6717132,"name":"Lenovo IdeaPad 310 80UH0004BR Intel Core i7-6500U 2.5 GHz 8192 MB 1024 GB","images":["http://mthumbs.buscape.com.br/notebook/lenovo-ideapad-310-80uh0004br-intel-core-i7-6500u-2-5-ghz-8192-mb-1024-gb_600x600-PU98e6e_1.jpg"],"price":{"value":2599,"installments":10,"installmentValue":259.9}}}]}

/***/ }),

/***/ "./utils/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("./reducers/index.js");





var isClient = typeof window !== 'undefined';

var enhancers = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(typeof window !== 'undefined' && "development" !== 'production' ? window.devToolsExtension && window.devToolsExtension() : function (f) {
  return f;
});

var createStoreWithMiddleware = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a)(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"]);

/* harmony default export */ __webpack_exports__["a"] = (function (initialState) {
  return createStoreWithMiddleware(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], initialState, enhancers);
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map