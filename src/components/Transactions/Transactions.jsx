import React from 'react'
import { useGlobalContext } from '../../context/globalContext'
import IncomeItem from '../IncomeItem/IncomeItem';

const Transactions = () => {
    const {transactionHistory} = useGlobalContext();
    const [...history] = transactionHistory()
    return (
        <div className='p-4  '>   
            <h1 className='text-3xl p-2'>All Transactions</h1>
            {
            history.length===0 ? <div className=' absolute  top-1/2 items-center w-full text-center'>
                    OOps!! Nothing to Show...
                </div> : <div className="incomes grid grid-cols-2 gap-4">
                    {
                        Array.isArray(history) && history.map((hist)=>{
                            const {_id,amount,category,date,description,title,type} = hist
                            return <IncomeItem
                                    id={_id}
                                    amount={amount} 
                                    category={category} 
                                    date={date} 
                                    description={description} 
                                    title={title} 
                                    type={type}
                                    indicatorColor={"#42AD00"}
                                />
                        })
                    }
                </div>
            }

            
        </div>
    )
}

export default Transactions

