"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.not = void 0;
function not(expression) {
    if (expression == true) {
        return false;
    }
    else if (expression == false) {
        return true;
    }
    else {
        throw new TypeError("Invalid Expression!");
    }
}
exports.not = not;
