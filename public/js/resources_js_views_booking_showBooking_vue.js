"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_booking_showBooking_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/booking/showBooking.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/booking/showBooking.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  props: {
    token_id: String
  },
  data: function data() {
    return {
      loading: false,
      tiket: {
        email: '',
        auditorium_name: '',
        schedule_name: '',
        seats_names: []
      }
    };
  },
  mounted: function mounted() {
    this.showBooking();
  },
  methods: {
    /**
     * Display the Boiking by token string.
     */
    showBooking: function showBooking() {
      var _this = this;

      if (this.token_id) {
        axios.get("/api/show-booking/".concat(this.token_id)).then(function (res) {
          _this.tiket = res.data.tiket;
        })["catch"](function (er) {
          console.warn(er.response);
        });
      }
    },

    /**
     * Go to route auditoriums.
     */
    goToAuditoriums: function goToAuditoriums() {
      this.$router.push({
        name: 'auditoriums'
      });
    }
  },
  computed: {}
});

/***/ }),

/***/ "./resources/js/views/booking/showBooking.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/booking/showBooking.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _showBooking_vue_vue_type_template_id_229841b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showBooking.vue?vue&type=template&id=229841b7& */ "./resources/js/views/booking/showBooking.vue?vue&type=template&id=229841b7&");
/* harmony import */ var _showBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showBooking.vue?vue&type=script&lang=js& */ "./resources/js/views/booking/showBooking.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _showBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _showBooking_vue_vue_type_template_id_229841b7___WEBPACK_IMPORTED_MODULE_0__.render,
  _showBooking_vue_vue_type_template_id_229841b7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/booking/showBooking.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/booking/showBooking.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/booking/showBooking.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./showBooking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/booking/showBooking.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/booking/showBooking.vue?vue&type=template&id=229841b7&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/booking/showBooking.vue?vue&type=template&id=229841b7& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showBooking_vue_vue_type_template_id_229841b7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showBooking_vue_vue_type_template_id_229841b7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showBooking_vue_vue_type_template_id_229841b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./showBooking.vue?vue&type=template&id=229841b7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/booking/showBooking.vue?vue&type=template&id=229841b7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/booking/showBooking.vue?vue&type=template&id=229841b7&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/booking/showBooking.vue?vue&type=template&id=229841b7& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    {
      staticStyle: {
        display: "flex",
        "flex-direction": "column",
        height: "90vh",
        "justify-content": "center",
        "text-align": "center",
      },
    },
    [
      _c("h2", [_vm._v("Detalle de Agenda")]),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "mx-auto", attrs: { "max-width": "400", width: "400" } },
        [
          _c("v-card-text", { staticStyle: { "text-align": "initial" } }, [
            _c("div", [_vm._v("FOLIO: " + _vm._s(this.token_id))]),
            _vm._v(" "),
            _c("p", { staticClass: "text-h5 text--primary" }, [
              _vm._v("\n              AVENGERS\n          "),
            ]),
            _vm._v(" "),
            _c("div", [_vm._v("HORARIO: " + _vm._s(this.tiket.schedule_name))]),
            _vm._v(" "),
            _c("p", [_vm._v("A NOMBRE DE: " + _vm._s(this.tiket.email))]),
            _vm._v(" "),
            _c("div", { staticClass: "text--primary" }, [
              _vm._v(
                "\n              SALA: " +
                  _vm._s(this.tiket.auditorium_name) +
                  " \n          "
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text--primary" },
              [
                _vm._v("\n              ASIENTOS: \n              "),
                _vm._l(this.tiket.seats_names, function (seat) {
                  return _c("label", { key: seat }, [
                    _vm._v(_vm._s(seat + ", ")),
                  ])
                }),
              ],
              2
            ),
          ]),
          _vm._v(" "),
          _c("v-card-actions"),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticStyle: {
            display: "flex",
            "justify-content": "center",
            "margin-top": "34px",
          },
        },
        [
          _c(
            "v-btn",
            {
              staticClass: "mt-5",
              attrs: { color: "primary", elevation: "2" },
              on: { click: _vm.goToAuditoriums },
            },
            [_vm._v("VOLVER A CARTELERA")]
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