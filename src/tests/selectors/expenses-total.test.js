import selectTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 when not given an argument(expense)',()=>{
    expect(selectTotal()).toBe(0);
})
test('should return 0 when passed empty array',()=>{
    expect(selectTotal([])).toBe(0);
})
test('should add when passed one expense',()=>{
    expect(selectTotal([expenses[0]])).toBe(195);
})

test('should take in array and add the amounts',()=>{
    expect(selectTotal(expenses)).toBe(114195);
})