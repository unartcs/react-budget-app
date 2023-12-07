import React from 'react'
import BudgetBox from './BudgetBox'
import Budget from '../classes/BudgetClass'

function BudgetListView({budgets}:Budget[]) {
  return (
    <div className='budget-list-view-wrapper'>
        <div className='budget-list-title'>
            <h1 className='text-2xl'>Your Budgets</h1>
        </div>
        <div className="budget-list-content flex gap-5 flex-wrap">
            {budgets.map((budget)=> {
                return (
                    <BudgetBox budget={budget}/>
                )
            })}
        </div>
    </div>
  )
}

export default BudgetListView