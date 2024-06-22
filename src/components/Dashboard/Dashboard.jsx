
import React, { useEffect } from 'react'
import Chart from '../Chart/Chart'
import { useGlobalContext } from '../../context/globalContext'
import { dollar, rupees } from '../../utils/Icons'
import History from '../History/History'
import "./Dashboard.css"

const Dashboard = () => {
    const {incomes, expenses, totalIncome,totalExpenses,totalBalance, getIncomes, getExpenses} = useGlobalContext();

    useEffect(()=>{
        getIncomes();
        getExpenses();
    },[])
    let bal = totalBalance();
    return (
        <div className='p-4'>   
            <h1 className='text-3xl '>
                All Transactions
            </h1>
            <div className="stats-con my-4">
                <div className="chart-con">
                    <Chart/>
                    <div className="amount-con">
                        <div className="income space-y-2">
                            <h2>Total Incomes : </h2>
                            <p>{rupees} {totalIncome()}</p>
                        </div>
                        <div className="expense space-y-2">
                            <h2>Total Expenses : </h2>
                            <p>{rupees} {totalExpenses()}</p>
                        </div>
                        <div className="balance space-y-2 ">
                            <h2>Total Balance : </h2>
                            <p style={{
                            color: bal > 0 ? 'var(--color-green)' : 'red'
                        }}>{rupees} {totalBalance()}</p>
                        </div>
                    </div>
                </div>

                <div className="history-con">
                    <History/>
                    <h2 className="salary-title ">Min <span>Salary</span>Max</h2>
                    <div className="salary-item">
                        <p>
                            {rupees } {" "}{incomes.length >0 ?Math.min(...incomes.map(item => item.amount)):0}
                        </p>
                        <p>
                            {rupees}{" "}{incomes.length >0 ?Math.max(...incomes.map(item => item.amount)):0}
                        </p>
                    </div>
                    <h2 className="salary-title my-2">Min <span>Expense</span>Max</h2>
                    <div className="salary-item ">
                        <p>
                            {rupees } {" "}{expenses.length >0 ?Math.min(...expenses.map(item => item.amount)):0}
                        </p>
                        <p>
                            {rupees}{" "}{expenses.length >0 ?Math.max(...expenses.map(item => item.amount)):0}
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard
