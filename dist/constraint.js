import { Expression } from './expression.js';
import { Strength } from './strength.js';
/**
 * An enum defining the linear constraint operators.
 *
 * |Value|Operator|Description|
 * |----|-----|-----|
 * |`Le`|<=|Less than equal|
 * |`Ge`|>=|Greater than equal|
 * |`Eq`|==|Equal|
 *
 * @enum {Number}
 */
export var Operator;
(function (Operator) {
    Operator[Operator["Le"] = 0] = "Le";
    Operator[Operator["Ge"] = 1] = "Ge";
    Operator[Operator["Eq"] = 2] = "Eq";
})(Operator || (Operator = {}));
/**
 * A linear constraint equation.
 *
 * A constraint equation is composed of an expression, an operator,
 * and a strength. The RHS of the equation is implicitly zero.
 *
 * @class
 * @param {Expression} expression The constraint expression (LHS).
 * @param {Operator} operator The equation operator.
 * @param {Expression} [rhs] Right hand side of the expression.
 * @param {Number} [strength=Strength.required] The strength of the constraint.
 */
export class Constraint {
    constructor(expression, operator, rhs, strength = Strength.required) {
        this.op = operator;
        this.strength = Strength.clip(strength);
        if (rhs === undefined && expression instanceof Expression) {
            this.expression = expression;
        }
        else {
            this.expression = expression.minus(rhs);
        }
    }
    /**
     * Returns the unique id number of the constraint.
     * @private
     */
    id() {
        return this._id;
    }
    toString() {
        return this.expression.toString() + ' ' + ['<=', '>=', '='][this.op] + ' 0 (' + this.strength.toString() + ')';
    }
    expression;
    op;
    strength;
    _id = CnId++;
}
/**
 * The internal constraint id counter.
 * @private
 */
let CnId = 0;
