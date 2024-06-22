import React from 'react'
import avatar from '/images/avatar.webp'
import { menuItem } from '../../utils/menuItems'
import { signout } from '../../utils/Icons'
import "./Navigation.css"
const Navigation = ({active, setActive}) => {
  
  return (
    <div className='nav-con'>
      <div className="user-con flex gap-8">
        <img src={avatar} alt="" className='
          w-[100px] h-[100px] rounded-full object-cover border-2 border-white shadow-lg p-[0.2rem]' 
        />
        <div className="text-center my-auto">
          <h1>Mohd Sohel</h1>
          <p className='primary-color2 text-lg'>Your money</p>
        </div>
      </div>

      <ul className="menu-items">
        {menuItem.map((item)=>{
          return <li
          key={item.id}
          onClick={()=>{setActive(item.id)}}
          className={active === item.id ? "active ": ""}
          >
            {item.icon} <span className='mx-2'>{item.title}</span>
          </li>
        })}
      </ul>
      <div className="bottom-nav">
        <li>
        {signout} <span className='mx-2'>Sign Out</span>
        </li>
      </div>
    </div>
  )
}

export default Navigation
