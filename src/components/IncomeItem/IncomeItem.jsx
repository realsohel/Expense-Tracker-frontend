import React from 'react'
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, rupees, stocks, takeaway, trash, tv, users } from '../../utils/Icons'
import Button from '../Button/Button'
import "./IncomeItem.css"
import { dateFormat, firstLetterCapital } from '../../utils/dateFormat'
function IncomeItem({
    key,
    id,
    amount,
    category,
    date,
    description,
    indicatorColor,
    title,type,
    deleteItem
}){
    
    const categoryIcon = ()=>{
        switch (category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance;
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'other':
                return piggy;
                        
            default:
                return '';
        }
    }

    const expenseCatIcon = ()=>{
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscription':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            
            default:
                return '';
        }
    }
    
    return (
        <div className='income-item'>
            <div className="icon">
                {type==='expense'?expenseCatIcon():categoryIcon()}
            </div>
            <div className="content">
                <h2 className={`${type==='expense'?'before:bg-red-500':'before:bg-[#42AD00]'}`}>{firstLetterCapital(title)}</h2>
                <div className="inner-content ">
                    <div className="texts">
                        <div className='flex justify-between'>
                            <p className='w-full mr-8'>{rupees} {amount}</p>
                            <p className='w-full'> {firstLetterCapital(category)}</p>
                        </div>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>{comment} {firstLetterCapital(description)}</p>
                    </div>
                    {deleteItem && 
                    <div className="btn-con">
                        <Button
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default IncomeItem
