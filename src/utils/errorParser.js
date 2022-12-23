exports.errorParser = function (error) {
    const firstError = Object.keys(error.errors)[0];
    const errorMsg = error.errors[firstError].message;
    
    return errorMsg;
}