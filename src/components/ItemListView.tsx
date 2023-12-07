import React from "react";
import Budget from "../classes/BudgetClass";
function ItemListView({ budget }: Budget) {
  return (
    <div className="item-list-view-wrapper w-full text-left">
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {budget.items?.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ItemListView;
