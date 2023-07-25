import { useState } from "react";
import { Link } from "react-router-dom";

const ExpenseTransaction = () => {
  const [expense, setExpense] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(expense);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex justify-between mb-5">
        <Link to="/">
          <button className="btn btn-info btn-sm mr-5">Home</button>{" "}
        </Link>
        <Link to="/income">
          <button className="btn btn-success btn-sm">Income</button>{" "}
        </Link>
      </div>
      <form className="card" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your expense"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
          className="input input-bordered w-full max-w-xs placeholder:italic placeholder:text-sm"
          required
        />
        <button type="submit" className="my-4 btn btn-warning items-center">
          ADD TRANSACTION
        </button>
      </form>
    </div>
  );
};

export default ExpenseTransaction;
