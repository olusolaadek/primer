export function multiply(values) {
    return values.reduce((total, item) =>
        total *= item, 1);
}
export function subtract2(first, second) {
    return first - second;
}

export function subtract(amount, values) {
    return values.reduce((total, item) => total - item, amount);
}
export function divide(first, second) {
    return first / second;
}