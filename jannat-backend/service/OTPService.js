const OTPService = require('request');


module.exports.getOTP = () => {

    OTPService({
        url:'https://2factor.in/API/V1/c5db2602-72a3-11e6-a584-00163ef91450/SMS/+918805288200/AUTOGEN'
    },(error,res,body) => {
        if(error){
            console.log(error);
        }
    });

}

module.exports.authenticateOTP = (otp,sessionID) => {

    OTPService({
        url:'https://2factor.in/API/V1/c5db2602-72a3-11e6-a584-00163ef91450/SMS/VERIFY/sessionID/otp'
    },(error,res,body) => {
        if(error){
            console.log(error);
        }
    });

    
}
