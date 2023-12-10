"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.id = id;
        this.createdAt = new Date();
        this.status = PaymentStatus.Holded;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() {
        if (this.status === PaymentStatus.Processed) {
            throw new Error('Платёж не может быть возвращён!');
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}
const payment1 = new Payment(1);
setTimeout(() => {
    console.log(payment1.getPaymentLifeTime());
}, 1000);
