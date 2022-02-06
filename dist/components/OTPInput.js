"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.regexp.test.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.regexp.to-string.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const OTPInput = _ref => {
  let {
    onChange = () => {},
    value,
    numInputs = 4,
    inputStyle = {},
    containerStyle = {},
    seperator = "",
    required = true
  } = _ref;
  const [inputArray, setInputArray] = (0, _react.useState)([]);

  const handleChange = e => {
    const {
      maxLength,
      name
    } = e.target;
    let inputValue = e.target.value;
    const [fieldName, fieldIndex] = name.split("-");
    let pattern = /[0-9]/g;

    if (inputValue.length >= maxLength) {
      if (pattern.test(inputValue)) {
        // Check if it's not the last input field
        if (parseInt(fieldIndex) < numInputs) {
          // Get the next input field
          const nextSibling = document.querySelector("input[name=".concat(fieldName, "-").concat(parseInt(fieldIndex, 10) + 1, "]")); // If found, focus the next field

          if (nextSibling !== null) {
            nextSibling.focus();
          }
        }

        onChange((value === null || value === void 0 ? void 0 : value.toString().substring(0, fieldIndex - 1)) + inputValue + (value === null || value === void 0 ? void 0 : value.toString().substring(fieldIndex, numInputs)));
      } else {
        e.target.value = "";
      }
    }
  };

  const handleFocus = e => {
    e.target.select();
  };

  const handleKeyPress = e => {
    const {
      name
    } = e.target;
    let inputValue = e.target.value;
    const [fieldName, fieldIndex] = name.split("-");

    if (e.keyCode === 8) {
      if (parseInt(fieldIndex) === numInputs) {
        onChange(value === null || value === void 0 ? void 0 : value.toString().substring(0, numInputs - 1));
      }

      if (inputValue === "") {
        // Get the previous input field
        const previousSibling = document.querySelector("input[name=".concat(fieldName, "-").concat(parseInt(fieldIndex, 10) - 1, "]")); // If found, focus the previous field

        if (previousSibling !== null) {
          onChange((value === null || value === void 0 ? void 0 : value.toString().substring(0, fieldIndex - 2)) + inputValue + (value === null || value === void 0 ? void 0 : value.toString().substring(fieldIndex, numInputs)));
          previousSibling.focus();
        }
      }
    }
  };

  (0, _react.useLayoutEffect)(() => {
    let temp = [];

    for (let i = 1; i <= numInputs; i++) {
      temp.push({
        name: "otp-".concat(i)
      });
    }

    setInputArray(temp);
  }, [numInputs]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread({
      display: "flex",
      alignItems: "center"
    }, containerStyle)
  }, inputArray.map((input, index) => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
    key: input.name
  }, /*#__PURE__*/_react.default.createElement("input", {
    style: _objectSpread({
      width: "40px",
      height: "40px",
      fontSize: "20px",
      margin: "0px 5px",
      textAlign: "center"
    }, inputStyle),
    maxLength: 1,
    name: input.name,
    onKeyDown: handleKeyPress,
    onFocus: handleFocus,
    onChange: handleChange,
    autoFocus: index === 0,
    required: required
  }), index < numInputs - 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, seperator))));
};

var _default = OTPInput;
exports.default = _default;