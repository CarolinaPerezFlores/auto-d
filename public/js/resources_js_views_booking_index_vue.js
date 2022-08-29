"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_booking_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/booking/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/booking/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  props: {
    idAuditorium: Number,
    nameAuditorium: String,
    scheduleName: String,
    scheduleId: Number
  },
  data: function data() {
    return {
      loading: false,
      seats: [],
      activeClass: 'selectedColor',
      seatClass: 'seatColor',
      seatsSelected: [],
      bookerEmail: '',
      email: '',
      alert: false,
      messageAlert: '',
      typeAlert: 'error',
      token_id: ''
    };
  },
  mounted: function mounted() {
    this.getAuditorium();
  },
  methods: {
    /**
     * Get auditoriums with yours seats and schedules.
     */
    getAuditorium: function getAuditorium() {
      var _this = this;

      if (this.idAuditorium) {
        this.loading = true;
        axios.get("/api/show-auditorium/".concat(this.idAuditorium)).then(function (res) {
          _this.seats = res.data.auditorium.seats;
        })["catch"](function (er) {
          console.warn(er.response);
        }).then(function () {
          return _this.loading = false;
        });
      }
    },

    /**
     * Save new Booking.
     */
    saveBooking: function saveBooking() {
      var _this2 = this;

      if (this.validations()) {
        var data = {
          auditorium_id: this.idAuditorium,
          seats_ids: this.seatsSelected,
          schedule_id: this.scheduleId,
          email: this.email
        };
        axios.post('/api/save-booking', data).then(function (res) {
          _this2.token_id = res.data.token_id;
          _this2.alert = true;
          _this2.messageAlert = 'Boletos agendados';
          _this2.typeAlert = 'success';
          setTimeout(function () {
            _this2.goToShowBooking();
          }, 600);
        })["catch"](this.handleError);
      }
    },

    /**
     * Change status and color of scuare seats.
     */
    changeStatus: function changeStatus(indexArr) {
      this.seats[indexArr].status = !this.seats[indexArr].status;
    },

    /**
     * Add Ids of seats selected.
     */
    addSeatToArray: function addSeatToArray(indexArr) {
      this.changeStatus(indexArr);

      if (!this.seatsSelected.includes(this.seats[indexArr].id) && !this.seats[indexArr].status) {
        this.seatsSelected.push(this.seats[indexArr].id);
      }

      if (this.seatsSelected.includes(this.seats[indexArr].id) && this.seats[indexArr].status) {
        var indexInSelected = this.seatsSelected.indexOf(this.seats[indexArr].id);
        this.seatsSelected.splice(indexInSelected, 1);
      }
    },

    /**
     * Validate that fiels requireds.
     */
    validations: function validations() {
      var isComplete = true;
      this.alert = false;

      if (!this.email && this.seatsSelected.length < 1) {
        this.messageAlert = 'Seleciona un asiento y agrega un correo electrónico';
        this.alert = true;
        isComplete = false;
      } else {
        if (this.seatsSelected.length < 1) {
          this.messageAlert = 'Seleciona un asiento';
          this.alert = true;
          isComplete = false;
        }

        if (!this.email) {
          this.messageAlert = 'Incresa un correo electrónico';
          this.alert = true;
          isComplete = false;
        }
      }

      return isComplete;
    },

    /**
     * Goto detail booking.
     */
    goToShowBooking: function goToShowBooking() {
      if (this.token_id) {
        var dataUrl = _objectSpread(_objectSpread({}, {
          name: 'booking-detail'
        }), {
          params: {
            token_id: this.token_id
          }
        });

        this.$router.push(dataUrl);
      }
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/booking/index.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/booking/index.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.selectedColor{\r\n  background-color: #3F51B5;\n}\n.seatColor{\r\n  background-color: darkgray;\n}\n.selectedColor:hover{\r\n  cursor: pointer;\n}\n.seatColor:hover{\r\n  cursor: pointer;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/booking/index.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/booking/index.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/booking/index.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/booking/index.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/booking/index.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_3b175f2d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3b175f2d& */ "./resources/js/views/booking/index.vue?vue&type=template&id=3b175f2d&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/booking/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/booking/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3b175f2d___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_3b175f2d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/booking/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/booking/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/booking/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/booking/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/booking/index.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/booking/index.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/booking/index.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/booking/index.vue?vue&type=template&id=3b175f2d&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/booking/index.vue?vue&type=template&id=3b175f2d& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3b175f2d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3b175f2d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3b175f2d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=3b175f2d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/booking/index.vue?vue&type=template&id=3b175f2d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/booking/index.vue?vue&type=template&id=3b175f2d&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/booking/index.vue?vue&type=template&id=3b175f2d& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-alert",
        {
          staticStyle: {
            margin: "auto",
            "text-align": "center",
            "margin-top": "20px",
          },
          attrs: {
            border: "bottom",
            "colored-border": "",
            type: _vm.typeAlert,
          },
          model: {
            value: _vm.alert,
            callback: function ($$v) {
              _vm.alert = $$v
            },
            expression: "alert",
          },
        },
        [_vm._v(_vm._s(_vm.messageAlert))]
      ),
      _vm._v(" "),
      _vm.nameAuditorium
        ? _c(
            "h3",
            { staticStyle: { "text-align": "center", "margin-top": "20px" } },
            [_vm._v("Sala " + _vm._s(_vm.nameAuditorium))]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.scheduleName
        ? _c(
            "h5",
            { staticStyle: { "text-align": "center", "margin-top": "20px" } },
            [_vm._v(_vm._s(_vm.scheduleName))]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticStyle: {
            margin: "auto",
            "max-width": "800px",
            display: "flex",
            "justify-content": "center",
            "flex-wrap": "wrap",
            height: "auto",
          },
        },
        _vm._l(_vm.seats, function (seat, index) {
          return _c(
            "div",
            {
              key: index,
              staticStyle: {
                height: "35px",
                width: "35px",
                "text-align": "center",
                display: "flex",
                "justify-content": "center",
                "align-items": "center",
                margin: "20px",
              },
            },
            [
              _c(
                "div",
                {
                  class: [
                    seat.status == false ? _vm.activeClass : _vm.seatClass,
                  ],
                  staticStyle: { height: "100%", width: "100%" },
                  on: {
                    click: function ($event) {
                      return _vm.addSeatToArray(index)
                    },
                  },
                },
                [
                  _c("p", { staticStyle: { color: "white" } }, [
                    _vm._v(_vm._s(seat.name)),
                  ]),
                ]
              ),
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticStyle: {
            margin: "auto",
            "max-width": "200px",
            display: "flex",
            "justify-content": "center",
            "flex-direction": "column",
          },
        },
        [
          _c("v-text-field", {
            attrs: { label: "Correo", outlined: "", dense: "" },
            model: {
              value: _vm.email,
              callback: function ($$v) {
                _vm.email = $$v
              },
              expression: "email",
            },
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mt-5",
              attrs: { color: "primary", elevation: "2" },
              on: { click: _vm.saveBooking },
            },
            [_vm._v("AGENDAR")]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticStyle: {
          margin: "auto",
          "max-width": "800px",
          width: "800px",
          display: "flex",
          height: "30px",
          "background-color": "black",
          "text-align": "center",
          "justify-content": "center",
        },
      },
      [
        _c("p", { staticStyle: { color: "white" } }, [
          _vm._v("P A N T A L L A"),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);