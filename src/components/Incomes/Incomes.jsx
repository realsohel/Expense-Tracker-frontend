import React from 'react'
import { useGlobalContext } from '../../context/globalContext'
import Form from '../Form/Form'
import "./Income.css"
const Incomes = () => {
    
    return (
        <div className='no-scrollbar p-8 h-[100%] '>   
            <h2 className='text-2xl'>Incomes</h2>

            <div className="income-container">
                <div className="form-container">
                    <Form/>
                </div>
                <div className="incomes">

                </div>
            </div>
        
        </div>
    )
}

export default Incomes
