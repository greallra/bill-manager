
import React from 'react';
import getExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses'
import { connect } from 'react-redux';
import numeral from 'numeral';
import { NavLink } from 'react-router-dom';

export class ExpensesSummary extends React.Component {
    render() {
        const expenseWord = this.props.expenseCount === 1 ? 'expense':'expenses';
        const formattedTotal = numeral(this.props.expensesTotal / 100).format('$0,0.00')
        return(
            <div className="summary-cont">
                <h3>You have <b>{this.props.expenseCount}</b> {expenseWord}, with a total of : <b>{formattedTotal}</b> </h3>
                <NavLink to="/create" activeClassName="is-active" className="button">Create Expense</NavLink>
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