import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import IncomeTransaction from "./pages/IncomeTransaction";
import ExpenseTransaction from "./pages/ExpenseTransaction";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/income" element={<IncomeTransaction />} />
          <Route path="/expense" element={<ExpenseTransaction />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
