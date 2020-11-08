import React, {useState}from 'react';
import Header from "./components/Header";
import Balance from "./components/Balance"
import './App.css';
import Incomeexp from "./components/Incomexp"
import Transactionllist from "./components/Transactionllist"
import Addtransaction from "./components/Addtransaction"

function App() {
  const initExpense=[
    {name:"payment",amt:+100},
    {name:"payment",amt:-100}
  ]
  const[expenses,setExpenses]=useState(initExpense)
  const[name,setName]=useState("");
  const[amt,setAmt]=useState("");
  const addtra=(e)=>{
    setName(e.target.value);
  }
  const addamt=(e)=>{
    setAmt(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const singleExpense={name,amt};
    setExpenses([...expenses,singleExpense]);
    setAmt("");
    setName("");
  }

  return (
    <div className="App">
      <Header/>
      <div className="container">
      <Balance expenses={expenses}/>
      <Incomeexp expenses={expenses}/>
      <Transactionllist expenses={expenses} />
      <Addtransaction name={name} amt={amt} addamt={addamt}  addtra={addtra} handleSubmit={handleSubmit}  />
      </div>
    </div>
  );
}

export default App;
