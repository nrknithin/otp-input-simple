import React, { Fragment, useLayoutEffect, useState } from "react";
const OTPInput = ({ onOTPChange = () => {}, otpValue, numInputs = 4, inputStyle = {}, containerStyle = {}, seperator = "-" }) => {
  const [inputArray, setInputArray] = useState([]);
  const handleChange = e => {
    const { maxLength, value, name } = e.target;
    let inputValue = value;
    const [fieldName, fieldIndex] = name.split("-");
    let pattern = /[0-9]/g;
    if (inputValue.length >= maxLength) {
      if (pattern.test(inputValue)) {
        // Check if it's not the last input field
        if (parseInt(fieldIndex) < numInputs) {
          // Get the next input field
          const nextSibling = document.querySelector(`input[name=${fieldName}-${parseInt(fieldIndex, 10) + 1}]`);
          // If found, focus the next field
          if (nextSibling !== null) {
            nextSibling.focus();
          }
        }
        onOTPChange(otpValue?.toString().substring(0, fieldIndex - 1) + inputValue + otpValue?.toString().substring(fieldIndex, numInputs));
      } else {
        e.target.value = "";
      }
    }
  };
  const handleFocus = e => {
    e.target.select();
  };

  const handleKeyPress = e => {
    const { value, name } = e.target;
    let inputValue = value;
    const [fieldName, fieldIndex] = name.split("-");
    if (e.keyCode === 8) {
      if (inputValue === "") {
        // Get the previous input field
        const previousSibling = document.querySelector(`input[name=${fieldName}-${parseInt(fieldIndex, 10) - 1}]`);
        // If found, focus the previous field
        if (previousSibling !== null) {
          onOTPChange(otpValue?.toString().substring(0, fieldIndex - 1) + inputValue + otpValue?.toString().substring(fieldIndex, numInputs));
          previousSibling.focus();
        }
      }
    }
  };

  useLayoutEffect(() => {
    let temp = [];
    for (let i = 1; i <= numInputs; i++) {
      temp.push({ name: `otp-${i}` });
    }
    setInputArray(temp);
  }, [numInputs]);
  return (
    <div style={{ display: "flex", alignItems: "center", ...containerStyle }}>
      {inputArray.map((input, index) => (
        <Fragment key={input.name}>
          <input
            style={{ width: "40px", height: "40px", fontSize: "20px", margin: "0px 5px", textAlign: "center", ...inputStyle }}
            maxLength={1}
            name={input.name}
            onKeyDown={handleKeyPress}
            onFocus={handleFocus}
            onChange={handleChange}
            autoFocus={index === 0}
          />
          {index < numInputs - 1 && <>{seperator}</>}
        </Fragment>
      ))}
    </div>
  );
};

export default OTPInput;
