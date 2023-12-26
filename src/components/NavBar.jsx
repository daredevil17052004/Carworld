import React from 'react'
import nav from './nav.module.css'
import { Link } from 'react-router-dom'
import { listCount } from '../redux/reducers'
import { useSelector } from 'react-redux'

const NavBar = () => {

    const count = useSelector(listCount)

  return (
    <div className={nav.main}>
        <div className={nav.headerLeft}>
            <div className={nav.item}>
                About
            </div>
            <div className={nav.item}>
                Manufactureres
            </div>
            <div className={nav.item}>
                TopGear List
            </div>
        </div>
        <div className={nav.center}>
            CarWorld
        </div>
        <div className={nav.headerRight}>
            <div className={nav.icons}>
                <img src="../../public/search (1).svg" alt="" />
            </div>  
            <div className={nav.icons}>
                <Link to='/cart'><pre><img src="../../public/shopping-cart.svg" alt="" /> ({count})</pre></Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar