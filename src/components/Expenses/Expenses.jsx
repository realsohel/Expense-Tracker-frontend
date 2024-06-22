import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext'
import "./Expense.css"
import IncomeItem from '../IncomeItem/IncomeItem'
import ExpenseForm from '../Form/ExpenseForm'
import { rupees } from '../../utils/Icons'
const Expenses = () => {
    const {
        
        getExpenses,
        deleteExpense,
        totalExpenses,
        expenses} = useGlobalContext();
    
    useEffect(()=>{
        getExpenses()
    },[])
    // console.log(incomes)
    return (
        <div className='no-scrollbar p-4  '>   
            <h1 className='text-3xl p-2'>Expenses</h1>
            <h2 className='total-expense'>Total Expense : <span className='text-red-400'>{rupees}{totalExpenses()}</span> </h2>
            <div className="income-container flex overflow-auto gap-2">
                <div className="form-container relative">
                    <ExpenseForm/>
                </div>
                <div className="incomes flex-1">
                    {
                        Array.isArray(expenses) && expenses.map((expense)=>{
                            const {_id,amount,category,date,description,title,type} = expense
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
                                    deleteItem={deleteExpense}
                                />
                        })
                    }
                </div>
            </div>
        
        </div>
    )
}

export default Expenses
