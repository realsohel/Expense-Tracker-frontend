import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext'
import Form from '../Form/Form'
import "./Income.css"
import IncomeItem from '../IncomeItem/IncomeItem'
import { rupees } from '../../utils/Icons'
const Incomes = () => {
    const {getIncomes,incomes,deleteIncomes,totalIncome,error} = useGlobalContext();
    
    useEffect(()=>{
        getIncomes()

    },[])
    return (
        <>
        
        {(
            <div className='no-scrollbar p-4  '>
            <h1 className='text-3xl p-2'>Incomes</h1>
            <h2 className='total-income'>Total Income : <span>{rupees}{totalIncome()}</span> </h2>
            <div className="income-container flex overflow-auto gap-2">
                <div className="form-container relative">
                    <Form/>
                </div>
                <div className="incomes flex-1">
                    {
                        Array.isArray(incomes) && incomes.map((income)=>{
                            const {_id,amount,category,date,description,title,type} = income
                            return <IncomeItem
                                    key={_id} 
                                    id={_id}
                                    amount={amount} 
                                    category={category} 
                                    date={date} 
                                    description={description} 
                                    title={title} 
                                    type={type}
                                    indicatorColor={"#42AD00"}
                                    deleteItem={deleteIncomes}
                                />
                        })
                    }
                </div>
            </div>
            </div>
        )}
        </>
            
        
    )
}

export default Incomes
