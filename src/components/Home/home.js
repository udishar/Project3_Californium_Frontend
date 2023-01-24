
import React from 'react'
import Left from '../LeftSide/left'
import homeStyle from '../Home/home.module.css'
 import Middle from '../Middle/middle'
import Right from '../Right/right'
import Profile from '../UserProfile/userprofile'
import { useRecoilValue } from 'recoil'
import { profileAtom } from '../../atom'

function Home() {
  const isProfile = useRecoilValue(profileAtom)
  return (
<div  className={homeStyle.wrapper}>
      <Left/>
      {/* <Middle/> */}
      {/* <Profile/> */}
      {isProfile.isProfileOpen ? <Profile/> :<Middle/>}
      {/* {console.log(isProfile.isProfileOpen,"on condition")} */}
      <Right/>
    </div>
  )
}

export default Home
