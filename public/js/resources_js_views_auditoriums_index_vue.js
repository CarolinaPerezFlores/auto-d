"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_auditoriums_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auditoriums/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auditoriums/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      loading: false,
      auditoriums: [{
        name: 'A',
        schedules: [{
          start_time: '15:00:00'
        }, {
          start_time: '17:00:00'
        }]
      }, {
        name: 'B',
        schedules: [{
          start_time: '15:00:00'
        }, {
          start_time: '17:00:00'
        }]
      }]
    };
  },
  mounted: function mounted() {
    this.getAuditoriums();
  },
  methods: {
    /**
     * Get auditoriums with yours attributes.
     */
    getAuditoriums: function getAuditoriums() {
      var _this = this;

      this.loading = true;
      axios.get('/api/auditoriums').then(function (res) {
        _this.auditoriums = res.data.auditoriums;
      })["catch"](function (er) {
        console.warn(er.response);
      }).then(function () {
        return _this.loading = false;
      });
    },

    /**
     * Go to route booking.
     */
    goToBookingRoute: function goToBookingRoute(idAuditorium, nameAuditorium, scheduleName, scheduleId) {
      if (idAuditorium && nameAuditorium) {
        var dataUrl = _objectSpread(_objectSpread({}, {
          name: 'booking'
        }), {
          params: {
            idAuditorium: idAuditorium,
            nameAuditorium: nameAuditorium,
            scheduleName: scheduleName,
            scheduleId: scheduleId
          }
        });

        this.$router.push(dataUrl);
      }
    }
  },
  computed: {}
});

/***/ }),

/***/ "./resources/js/views/auditoriums/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/auditoriums/index.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_465a7964___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=465a7964& */ "./resources/js/views/auditoriums/index.vue?vue&type=template&id=465a7964&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/auditoriums/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_465a7964___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_465a7964___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auditoriums/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/auditoriums/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/auditoriums/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auditoriums/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auditoriums/index.vue?vue&type=template&id=465a7964&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/auditoriums/index.vue?vue&type=template&id=465a7964& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_465a7964___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_465a7964___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_465a7964___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=465a7964& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auditoriums/index.vue?vue&type=template&id=465a7964&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auditoriums/index.vue?vue&type=template&id=465a7964&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auditoriums/index.vue?vue&type=template&id=465a7964& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h2", { staticStyle: { "text-align": "center", color: "white" } }, [
        _vm._v("LARA MOVIE"),
      ]),
      _vm._v(" "),
      _c("h3", { staticStyle: { "text-align": "center" } }, [
        _vm._v("Cartelera"),
      ]),
      _vm._v(" "),
      _c(
        "v-card",
        {
          staticStyle: {
            "max-width": "50vw",
            margin: "auto",
            "margin-top": "30vh",
          },
        },
        [
          _c(
            "v-toolbar",
            { attrs: { flat: "", color: "primary", dark: "" } },
            [_c("v-toolbar-title", [_vm._v("Avengerss")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tabs",
            {
              staticStyle: { "align-items": "center" },
              attrs: { vertical: "" },
            },
            [
              _vm._l(_vm.auditoriums, function (auditorium, index) {
                return _c(
                  "v-tab",
                  { key: index },
                  [
                    _c("v-icon", { attrs: { left: "" } }, [
                      _vm._v(
                        "\n              mdi-filmstrip-box-multiple\n          "
                      ),
                    ]),
                    _vm._v(
                      "\n          Sala " +
                        _vm._s(auditorium.name) +
                        "\n          "
                    ),
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _vm._l(_vm.auditoriums, function (auditorium, index) {
                return _c(
                  "v-tab-item",
                  {
                    key: index,
                    staticStyle: {
                      "justify-content": "center",
                      display: "flex",
                    },
                  },
                  [
                    _c(
                      "v-chip-group",
                      {
                        attrs: { "active-class": "primary--text", column: "" },
                      },
                      _vm._l(auditorium.schedules, function (tag, index) {
                        return _c(
                          "v-chip",
                          {
                            key: index,
                            on: {
                              click: function ($event) {
                                return _vm.goToBookingRoute(
                                  auditorium.id,
                                  auditorium.name,
                                  tag.start_time,
                                  tag.id
                                )
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                  " +
                                _vm._s(tag.start_time) +
                                "\n                  "
                            ),
                          ]
                        )
                      }),
                      1
                    ),
                  ],
                  1
                )
              }),
            ],
            2
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);