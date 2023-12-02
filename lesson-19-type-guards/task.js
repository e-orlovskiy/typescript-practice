"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["SUCCESS"] = "success";
    PaymentStatus["FAILED"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function isResponseSuccess(response) {
    return response.status === PaymentStatus.SUCCESS;
}
function getIdFromData(response) {
    if (isResponseSuccess(response)) {
        return response.data.databaseId;
    }
    else {
        throw new Error(response.data.errorMessage + response.data.errorCode);
    }
}
