
import React from 'react'
import Left from '../LeftSide/left'
import homeStyle from '../Home/home.module.css'
import Middle from '../Middle/middle'
import Right from '../Right/right'

function Home() {
  return (
<div  className={homeStyle.wrapper}>
      <Left/>
      <Middle/>
      <Right/>
    </div>
  )
}

export default Home
