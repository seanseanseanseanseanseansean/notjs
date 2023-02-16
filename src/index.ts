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