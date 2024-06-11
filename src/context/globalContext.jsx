import { createContext, useContext, useState } from "react";
const BASE_URL = "http://localhost:5000/api/v1/";
const GlobalContext = createContext();
import axios from 'axios'
export const GlobalProvider = ({children})=>{
    const[incomes,setIncomes] = useState([]);
    const[expenses,setExpenses] = useState([]);
    const[error,setError] = useState(null);


    const addIncome = async(income) =>{
        try {
            const response = await axios.post(`${BASE_URL}/add-income`,income);
        } catch (error) {
            setError(error.message);
            console.log(error.message)
        }
    }
    return(
        <GlobalContext.Provider value={{
            addIncome
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(GlobalContext)
}