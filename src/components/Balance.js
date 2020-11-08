import React from 'react'

export default function Balance({expenses}) {
    const amounts=expenses.map(expense=>expense.amt);
    const total=amounts.reduce((acc,item)=>(acc+=parseInt(item)),0)
    return (
        <div>
            <h2>Your Balance is</h2>
            <p>
             
                $ {total}
            </p>
        </div>
    )
}
