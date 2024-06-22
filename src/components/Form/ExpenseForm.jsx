import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import './Form.css'
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';
const ExpenseForm = () => {
    const {addExpense} = useGlobalContext(); 
    const[inputState, setInputState] = useState({
        title:"",
        amount:"",
        date:"",
        category:"",
        description:"",
    });

    const {title, amount ,date,category,description} = inputState;

    const onChange = (e)=>{
        setInputState({...inputState , [e.target.name]:e.target.value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addExpense(inputState)
        // console.log(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    return (
        <div onSubmit={handleSubmit} className=' no-scrollbar mt-2 flex flex-col gap-6'>
            <div className="input-control">
                <input 
                    type="text"
                    name='title'
                    value={title}
                    placeholder='Expense Title'
                    onChange={onChange}
                    required
                />
            </div>
            <div className="input-control">
                <input 
                    type='number'
                    name='amount'
                    value={amount}
                    placeholder='Expense amount'
                    onChange={onChange}
                    required
                />
            </div>
            <div className="input-control">
                <DatePicker
                    id='date'
                    placeholderText='Enter a Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date)=>{
                        setInputState({...inputState,date:date});
                    }}
                    required
                />
            </div>
            <div className="selects input-control flex justify-end">
                <select required value={category} name="category" id="category" onChange={onChange} 
                    className='text-[rgba(34,34,96,0.4)] focus:text-[rgba(34,34,96,1)] active:text-[rgba(34,34,96,1)]'
                >
                    <option value=""  disabled >Select Option</option>
                    <option value="education">Education</option>
                    <option value="groceries">Groceries</option>
                    <option value="health">Health</option>
                    <option value="subscription">Subscription</option>
                    <option value="takeaways">Takeaways</option>
                    <option value="clothing">Clothing</option>  
                    <option value="travelling">Travelling</option>  
                    <option value="other">Other</option>  
                </select>
            </div>

            <div className="input-control">
                <textarea name="description" value={description} onChange={onChange} placeholder='Add A Reference' 
                    id="description" cols="30" rows="4"  required className='p-[5px]'/>
            </div>
            <div className="submit-btn mb-4" onClick={handleSubmit}>
                <Button
                    name={'Add Expense'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>
        </div>
    )
}

export default ExpenseForm;
