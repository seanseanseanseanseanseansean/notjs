"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.not = void 0;
/**
* get the opposite of a boolean value
* @param { boolean } expression the boolean value
* @returns { boolean } the opposite of the value
*/
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
