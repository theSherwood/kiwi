import { Expression } from './expression.js';
/**
 * The primary user constraint variable.
 *
 * @class
 * @param {String} [name=""] The name to associated with the variable.
 */
export class Variable {
    constructor(name = '') {
        this.name = name;
    }
    /**
     * Creates a new Expression by adding a number, variable or expression
     * to the variable.
     *
     * @param {Number|Variable|Expression} value Value to add.
     * @return {Expression} expression
     */
    plus(value) {
        return new Expression(this, value);
    }
    /**
     * Creates a new Expression by substracting a number, variable or expression
     * from the variable.
     *
     * @param {Number|Variable|Expression} value Value to substract.
     * @return {Expression} expression
     */
    minus(value) {
        return new Expression(this, typeof value === 'number' ? -value : [-1, value]);
    }
    /**
     * Creates a new Expression by multiplying with a fixed number.
     *
     * @param {Number} coefficient Coefficient to multiply with.
     * @return {Expression} expression
     */
    multiply(coefficient) {
        return new Expression([coefficient, this]);
    }
    /**
     * Creates a new Expression by dividing with a fixed number.
     *
     * @param {Number} coefficient Coefficient to divide by.
     * @return {Expression} expression
     */
    divide(coefficient) {
        return new Expression([1 / coefficient, this]);
    }
    /**
     * Returns the JSON representation of the variable.
     * @private
     */
    toJSON() {
        return {
            name: this.name,
            value: this.value,
        };
    }
    toString() {
        return this.context + '[' + this.name + ':' + this.value + ']';
    }
    name;
    value = 0.0;
    context = null;
    id = VarId++;
}
/**
 * The internal variable id counter.
 * @private
 */
let VarId = 0;
