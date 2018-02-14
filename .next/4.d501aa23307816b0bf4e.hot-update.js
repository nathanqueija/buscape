webpackHotUpdate(4,{

/***/ "./components/Produto/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PriceTag__ = __webpack_require__("./components/PriceTag/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Galeria__ = __webpack_require__("./components/Galeria/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_produtos__ = __webpack_require__("./actions/produtos.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
var _jsxFileName = '/Users/nathanqueija/Desktop/Projetos/estudos/buscape/components/Produto/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Produto;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(null, { addProduto: __WEBPACK_IMPORTED_MODULE_4__actions_produtos__["a" /* addProduto */] })(Produto);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Produto, 'Produto', '/Users/nathanqueija/Desktop/Projetos/estudos/buscape/components/Produto/index.js');
  reactHotLoader.register(_default, 'default', '/Users/nathanqueija/Desktop/Projetos/estudos/buscape/components/Produto/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.d501aa23307816b0bf4e.hot-update.js.map