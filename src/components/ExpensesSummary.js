
import React from 'react';
import getExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses'
import { connect } from 'react-redux';
import numeral from 'numeral';
// total here: {getExpensesTotal()}

export class ExpensesSummary extends React.Component {
    render() {
        const expenseWord = this.props.expenseCount ===1 ? 'expense':'expenses';
        const formattedTotal = numeral(this.props.expensesTotal / 100).format('$0,0.00')
        return(
            <div>
                <h3>Total: {formattedTotal} {expenseWord}</h3>

            </div>
        )
    }
}
//expenses: selectExpenses(state.expenses, state.filters)
const mapStateToProps = (state)=>{
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expensesTotal: getExpensesTotal(visibleExpenses),
        expenseCount: visibleExpenses.length
    }
}

export default connect(mapStateToProps)(ExpensesSummary);