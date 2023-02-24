/**
* get the opposite of a boolean value
* @param { boolean } expression the boolean value
* @returns { boolean } the opposite of the value
*/
export function not(expression: boolean): boolean {
    if (expression == true) {
        return false
    }
    else if (expression == false) {
        return true
    }
    else {
        throw new TypeError("Invalid Expression!")
    }
}