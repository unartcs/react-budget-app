import React, { useState } from "react";

function BudgetForm({ budgetList, setBudgetList }) {
  const [name, setName] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const formHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="budget-form-wrapper flex">
      <div className="budget-form-container flex flex-col bg-slate-600 py-2 px-10 gap-2">
        <h1 className="text-2xl">Create a new budget</h1>
        <form onSubmit={formHandler} className="flex flex-col gap-2 items-center">
          <fieldset className="flex flex-col w-full">
            <label htmlFor="name" className="font-bold">Name: </label>
            <input
              type="text"
              name="name"
              placeholder="Groceries, Vacation.."
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="p-2 bg-slate-200"
            />
          </fieldset>
          <fieldset className="flex flex-col  w-full">
            <label htmlFor="number" className="font-bold">Amount: </label>
            <input
              type="number"
              name="number"
              placeholder="500, 1000..."
              required
              onChange={(e) => setTotal(parseInt(e.target.value))}
              value={total}
              min={0}
              className="p-2 bg-slate-200"
            />
          </fieldset>
          <fieldset className="flex bg-slate-300 p-2 my-2">
            <button type="submit">Add</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default BudgetForm;
