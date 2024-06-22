import React from 'react'
import { useGlobalContext } from '../../context/globalContext'

function History() {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()
    const updateHistory = history.slice(0, 5)
    return (
        <div className='flex flex-col'>
            <h3 className='my-2'>Recent History</h3>
            {updateHistory.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item 
                        bg-[#FCF6F9] border-2 border-[#FFFFFF] shadow-[0px 1px 15px rgba(0, 0, 0, 0.06)] 
                        p-4 rounded-[20px] flex justify-between items-center
                        my-2
                    ">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

// const HistoryStyled = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     .history-item{
//         background: #FCF6F9;
//         border: 2px solid #FFFFFF;
//         box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
//         padding: 1rem;
//         border-radius: 20px;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//     }
// `;

export default History