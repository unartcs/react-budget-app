import { useState } from 'react'
import './App.css'
import Budget from './classes/BudgetClass'
import BudgetForm from './components/BudgetForm'
import budgetData from './data/BudgetsData.tsx'
import BudgetListView from './components/BudgetListView'

function App() {
  const [budgetList, setBudgetList] = useState<Budget[]>(budgetData)
  
  return (
    <div className='app-wrapper dark:bg-slate-800 bg-slate-500 h-screen'>
      <BudgetForm budgetList={budgetList} setBudgetList={setBudgetList}/>
      <BudgetListView budgets={budgetList}/>
    </div>
  )
}

export default App
