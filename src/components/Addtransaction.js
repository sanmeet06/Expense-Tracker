import React,{useState} from 'react'
import Transactionllist from "./Transactionllist"

export default function Addtransaction({name,amt,addtra,addamt,handleSubmit}) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h3>Add transaction</h3>
            <h5>Text</h5>
            <input onChange={addtra} value={name} type="text" placeholder="Enter text"/>
                  <h5>Amount</h5>
                  <input onChange={addamt} value={amt}type="number" placeholder="Enter cash"/>
                  <button className="btn">Add Transaction</button>
                  </form> 

                  </div>  
    )
}
