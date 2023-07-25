import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <Link to="/income">
        <button className="btn btn-success mr-5">Income</button>
      </Link>
      <Link to="/expense">
        <button className="btn btn-warning">Expense</button>
      </Link>
    </div>
  );
};

export default Homepage;
