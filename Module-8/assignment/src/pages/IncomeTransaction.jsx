import { useState } from "react";
import { Link } from "react-router-dom";

const IncomeTransaction = () => {
  const [income, setIncome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(income);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex justify-between mb-5">
        <Link to="/">
          <button className="btn btn-info btn-sm mr-5">Home</button>{" "}
        </Link>
        <Link to="/expense">
          <button className="btn btn-warning btn-sm">Expense</button>{" "}
        </Link>
      </div>
      <form className="card" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="input input-bordered w-full max-w-xs placeholder:italic placeholder:text-sm"
          required
        />
        <button type="submit" className="my-4 btn btn-success items-center">
          ADD TRANSACTION
        </button>
      </form>
    </div>
  );
};

export default IncomeTransaction;
