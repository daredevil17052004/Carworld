import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listAction, listSelectors, listCount } from '../redux/reducers'
import { Link } from 'react-router-dom'
import style from './side.module.css'


const SideBar = () => {

    const displayList = useSelector(listSelectors)

    const dispatch = useDispatch();

    function handleRemove(index){
        dispatch(listAction.remove(index))
    }

  return (
    <div>
        <div className={style.top}>
            Your Cart<img src="../../public/shopping-cart.svg" alt="" />
        </div>

        <div className={style.faltuLine}>
            <div className={style.fa}>
                The Cars in your list are :-
            </div>
            <div className={style.l}>
                <Link to='/'>
                    <button>Back</button>
                </Link>
            </div>
        </div>

        {
            displayList.map((item,index)=>{
                return(
                    <div key={index} className={style.car}>
                        <div className={style.carItem}>
                            <img src={item.img} />
                        </div>
                        <div className={style.carItem}>
                            <div className={style.des}>
                                <div>
                                    {item.name}
                                </div>
                                <div>
                                    {item.horsepower}hp
                                </div>
                            </div>
                        </div>
                        <div className={style.carItem}>
                            <div>
                                ${item.price}
                            </div>
                        </div>
                        <div className={style.right}>
                            <img src='../../public/angle-right.png' alt="" />
                        </div>
                    </div>  
                )
            })
        }
    </div>
  )
}

export default SideBar