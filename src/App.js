import React, { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import InputForm from "./components/InputForm";
import TableResult from "./components/TableResult";
function App() {
  const [yearlyData, setYearlyData] = useState([]);
  const [currentSavings, setCurrentSavings] = useState();


  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <InputForm onSaveYearlyData= {setYearlyData} savings ={setCurrentSavings}></InputForm>
       <TableResult yearlyArray={yearlyData} initialInvestment ={currentSavings}></TableResult> 
    </div>
  );
}

export default App;
