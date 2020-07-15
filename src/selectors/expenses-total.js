import expenses from '../tests/fixtures/expenses';

export default (arr)=>{

    if(!arr || arr.length === 0)return 0;

    return arr.map(exp=>exp.amount)
            .reduce((sum,val) => sum + val)
}