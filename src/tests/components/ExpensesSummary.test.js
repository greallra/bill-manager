import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
  expect(wrapper).toMatchSnapshot();
});
test('should render ExpensesSummary correctly many expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235555}/>);
  expect(wrapper).toMatchSnapshot();
});
