//new code 
import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'


const Home = () => {

  const [category,setcategory] = useState("ALL");
  return (
    <div>
        <Header />
        <ExploreMenu category={category} setcategory={setcategory}/>
    </div>
  )
}

export default Home