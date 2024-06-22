import React, { useEffect, useState } from 'react'
import './Chart.css'
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js'

import {Line} from 'react-chartjs-2';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
)
const Chart = () => {
    const {incomes, expenses,getIncomes,getExpenses} = useGlobalContext();

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, []);
    // console.log(date)   

    const data1 = {
        labels: incomes.map((d) =>{
            return dateFormat(d.date);
        }),

        datasets: [
        {
            label: 'Incomes',
            data: [
                ...incomes.map((income) => {
                    const {amount} = income
                    return amount
                })
            ],
            backgroundColor: 'green'
        },
    ]
    }

    const data2 = {
        labels: expenses.map((d) =>{
            return dateFormat(d.date);
        }),

        datasets: [
        {
            label: 'Expenses',
            data: [
                ...expenses.map((income) => {
                    const {amount} = income
                    return amount
                })
            ],
            backgroundColor: 'red'
        },]
    }
    return (
        <div className='chart flex flex-col space-y-8'>
            <div className=''>
                <Line data={data1}/>
            </div>
            <div className=''>
                <Line data={data2}/>
            </div>
        </div>
    )
}

export default Chart
