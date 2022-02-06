# Getting Started Simple OTP Input

## Installation

In the project directory, you can run:<br/>

    npm i simple-otp-input

### Import

    import OTPInput from "simple-otp-input";

### Example

    <OTPInput
        onChange={setOTP}
        value={otp}
        numInputs={6}
        seperator="-"
    />

## Props

onChange: onChange function return a value<br />
value: input value<br />
numInputs: Number of inputs <br />
inputStyle: style for input field eg: inputStyle={{ borderRadius: "25%", width: "50px", height: "50px", fontSize: "32px" }} <br />
containerStyle: style for container eg: containerStyle={{ display: "flex", justifyContent: "center" }} <br />
seperator: field seperator <br />
