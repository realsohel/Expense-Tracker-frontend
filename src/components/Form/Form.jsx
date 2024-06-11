import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import './Form.css'
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';
const Form = () => {
    const {addIncome} = useGlobalContext(); 
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
        addIncome(inputState)
        console.log(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    return (
        <div onSubmit={handleSubmit} className='no-scrollbar mt-2 flex flex-col gap-6'>
            <div className="input-control">
                <input 
                    type="text"
                    name='title'
                    value={title}
                    placeholder='Income Title'
                    onChange={onChange}
                    required
                />
            </div>
            <div className="input-control">
                <input 
                    type='number'
                    name='amount'
                    value={amount}
                    placeholder='Income amount'
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
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>  
                    <option value="other">Other</option>  
                </select>
            </div>

            <div className="input-control">
                <textarea name="description" value={description} onChange={onChange} placeholder='Add A Reference' 
                    id="description" cols="30" rows="4"  required className='p-[5px]'/>
            </div>
            <div className="submit-btn mb-4" onClick={handleSubmit}>
                <Button
                    name={'Add Income'}
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

export default Form
