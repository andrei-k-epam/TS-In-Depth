"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            console.log(maxBooksAllowed(1));
            return daysLate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
})(Utility = exports.Utility || (exports.Utility = {}));
