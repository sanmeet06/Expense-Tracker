import React from 'react'

export default function Incomexp({expenses}) {
    const amount=expenses.map(exp=>exp.amt);
    const inc=amount.filter(item=>item>0).reduce((acc,item)=>(acc+=parseInt(item)),0)
    const expc=amount.filter(item=>item<0).reduce((acc,item)=>(acc+=parseInt(item)),0)
    return (
        <div className="inc-cont">
            <div className="inc">
                <p>Income</p>
                <p>${inc}</p>
            </div>
            <div className="exp">
            <p>Expense</p>
    <p>${expc}</p>
            </div>
        </div>
    )
}
