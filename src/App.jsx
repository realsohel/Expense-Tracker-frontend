import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Orb from './components/orb/Orb'
import Dashboard from './components/Dashboard/Dashboard';
import Incomes from './components/Incomes/Incomes';
import Expenses from './components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';

function App() {
  const[active,setActive] = useState(1);

  const context = useGlobalContext();
  // console.log(context)
  const displayData = ()=>{
    switch (active) {
      case 1:
        return <Dashboard/>;
      case 2:
        return <Dashboard/>;
      case 3:
        return <Incomes/>;
      case 4:
        return <Expenses/>;
    
      default:
        return <Dashboard/>
    }
  }
  return (
    <>
      <div className="h-[100vh] relative font-bold text-xl">
        <Orb/>
        <main className='p-8 h-[100%] flex gap-8'>
          <Navigation active={active} setActive={setActive}/>
          <main className='no-scrollbar main'>
            {displayData()}
          </main>
        </main>
      </div>
    </>
  )
}

export default App
