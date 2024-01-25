import { Expression } from './expression.js';
/**
 * The primary user constraint variable.
 *
 * @class
 * @param {String} [name=""] The name to associated with the variable.
 */
export declare class Variable {
    constructor(name?: string);
    /**
     * Creates a new Expression by adding a number, variable or expression
     * to the variable.
     *
     * @param {Number|Variable|Expression} value Value to add.
     * @return {Expression} expression
     */
    plus(value: number | Variable | Expression): Expression;
    /**
     * Creates a new Expression by substracting a number, variable or expression
     * from the variable.
     *
     * @param {Number|Variable|Expression} value Value to substract.
     * @return {Expression} expression
     */
    minus(value: number | Variable | Expression): Expression;
    /**
     * Creates a new Expression by multiplying with a fixed number.
     *
     * @param {Number} coefficient Coefficient to multiply with.
     * @return {Expression} expression
     */
    multiply(coefficient: number): Expression;
    /**
     * Creates a new Expression by dividing with a fixed number.
     *
     * @param {Number} coefficient Coefficient to divide by.
     * @return {Expression} expression
     */
    divide(coefficient: number): Expression;
    /**
     * Returns the JSON representation of the variable.
     * @private
     */
    toJSON(): any;
    toString(): string;
    name: string;
    value: number;
    context: any;
    id: number;
}
//# sourceMappingURL=variable.d.ts.map