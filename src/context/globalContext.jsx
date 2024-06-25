import { createContext, useContext, useState } from "react";

// import { BASE } from "../../config";
// const BASE_URL = "http://localhost:5000/api/v1";

const BASE_URL = "https://expense-tracker-backend-sohel.onrender.com/api/v1/";
const GlobalContext = createContext();
import axios from 'axios'
export const GlobalProvider = ({children})=>{
    const[incomes,setIncomes] = useState([]);
    const[expenses,setExpenses] = useState([]);
    const[error,setError] = useState(null);


    const addIncome = async(income) =>{
        
        try {
            const response = await axios.post(`${BASE_URL}/add-income`,income);
            getIncomes();
            console.log(response)
            if (response.status !== 200 || response.data.status !== 200) {
                const errorMessage = response.data.message || 'An error occurred';
                console.log(errorMessage);
                setError(errorMessage);
                return { error: errorMessage };
            }
            return response.data;
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || 'An unexpected error occurred';
            setError(errorMessage);
            console.log(errorMessage);
            return { error: errorMessage };
        }
    }

    const getIncomes = async() =>{
        try {
            const response = await axios.get(`${BASE_URL}/get-incomes`);
            setIncomes(response.data);
            // return response.data;
        } catch (error) {
            setError(error.message);
            console.log(error.message)
        }
    }

    const deleteIncomes = async(id) =>{
        try {
            const response = await axios.delete(`${BASE_URL}/delete-income/${id}`);
            setIncomes(response.data);
            getIncomes();
            // return response.data;
        } catch (error) {
            setError(error.message);
            console.log(error.message)
        }
    }

    const totalIncome = ()=>{
        let total =0;
        Array.isArray(incomes) && incomes.forEach((income)=>{
            total+=income.amount;
        })
        return total;
    }

    const addExpense = async(expense) =>{
        try {
            const response = await axios.post(`${BASE_URL}/add-expense`,expense);
            getExpenses();
            return response.data;
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || 'An unexpected error occurred';
            setError(errorMessage);
            console.log(errorMessage);
            return { error: errorMessage };
        }
    }

    const getExpenses = async() =>{
        try {
            const response = await axios.get(`${BASE_URL}/get-expenses`);
            setExpenses(response.data);
            // return response.data;
        } catch (error) {
            setError(error.message);
            console.log(error.message)
        }
    }

    const deleteExpense = async(id) =>{
        try {
            const response = await axios.delete(`${BASE_URL}/delete-expense/${id}`);
            setExpenses(response.data);
            getExpenses();
            // return response.data;
        } catch (error) {
            setError(error.message);
            console.log(error.message)
        }
    }

    const totalExpenses = ()=>{
        let total =0;
        Array.isArray(expenses) && expenses.forEach((expense)=>{
            total+=expense.amount;
        })
        return total;
    }

    const totalBalance =()=>{
        return (totalIncome() - totalExpenses())
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history
    }

    return(
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            deleteIncomes,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            incomes,
            expenses,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(GlobalContext)
}