import React from 'react'
import ItemListView from './ItemListView'

function BudgetBox({budget}) {
  return (
    <div className='budget-box-wrapper'>
        <div className='budget-box-info flex flex-col'>
            <h1>{budget.name}</h1>
            <h2>{budget.current} / {budget.total}</h2>
            <progress value={parseInt(budget.current)} max={parseInt(budget.total)}></progress>
            <h3>More Details...</h3>
            <h3>Items:</h3>
            <ItemListView budget={budget}/>
        </div>
    </div>
  )
}

export default BudgetBox