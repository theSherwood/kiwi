import {Expression} from './expression.js'
import {Strength} from './strength.js'
import {Variable} from './variable.js'

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
export enum Operator {
	Le, // <=
	Ge, // >=
	Eq, // ==
}

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
	constructor(
		expression: Expression | Variable,
		operator: Operator,
		rhs?: Expression | Variable | number,
		strength: number = Strength.required,
	) {
		this.op = operator
		this.strength = Strength.clip(strength)
		if (rhs === undefined && expression instanceof Expression) {
			this.expression = expression
		} else {
			this.expression = expression.minus(rhs)
		}
	}

	public toString(): string {
		return this.expression.toString() + ' ' + ['<=', '>=', '='][this.op] + ' 0 (' + this.strength.toString() + ')'
	}

	public expression: Expression
	public op: Operator
	public strength: number
	public id: number = CnId++
}

/**
 * The internal constraint id counter.
 * @private
 */
let CnId = 0
