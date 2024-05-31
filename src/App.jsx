import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Orb from './components/orb/Orb'

function App() {
  const[active,setActive] = useState(1);
  return (
    <>
      <div className="h-[100vh] relative font-bold text-xl">
        <Orb/>
        <main className='p-8 h-[100%] flex gap-8'>
          <Navigation active={active} setActive={setActive}/>
        </main>
      </div>
    </>
  )
}

export default App
