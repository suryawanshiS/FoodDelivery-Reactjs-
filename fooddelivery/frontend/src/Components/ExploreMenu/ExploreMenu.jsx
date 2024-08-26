import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore_menu' id='explore_menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a declarible array of dishes. Our mission is to satisfy your craving and elavate your dining experience, one delicious meal at one time</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                return(
                    <div key={index} className='explore-menu-list-items'>
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>

                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu