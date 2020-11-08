import React from 'react'

export default function Transactionllist({expenses}) {
    const sign=expenses.amt<0?"-":"+";
    // const filteredRes=expenses.filter(exp=>return)
    return (
        <div className="Translist">
            <h3>History</h3>
            <ul className="list">
                {expenses.map(exp=>(
                    <li>{exp.name}<span>${parseInt(exp.amt)}</span>delete</li>
                ))
    
                }
            </ul>
        </div>
    )
}
