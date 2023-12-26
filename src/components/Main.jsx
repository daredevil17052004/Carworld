import React, { useState } from 'react'
import { carList } from './carList'
import { useSelector,useDispatch } from 'react-redux'
import { listAction,listSelectors,listCount } from '../redux/reducers'
import NavBar from './NavBar'
import TopBar from './TopBar'
import style from './style.module.css'

const Main = () => {

    
    const dispatch = useDispatch();


    const ogList = useSelector(listSelectors)
    console.log(ogList);

    function handleClick(index){
        dispatch(listAction.add(index))
    }

    function handleRemove(index){
        dispatch(listAction.remove(index))
    }

  return (
    <div>
        <TopBar/>
        <NavBar/>   
 
        {
            carList.map((item,index)=>{
                return(
                    <div key={index} className={style.main}>
                        <div  className={style.car}>
                            <div className={style.it}>
                                <img src={item.img}  alt={item.name}/>
                            </div>
                            <div className={style.ite}>
                                <div>
                                    {item.name}
                                </div>
                                <div className={style.des}>
                                    {item.engine} <br />
                                    {item.horsepower}hp <br />
                                </div>
                                <div>
                                    ${item.price}
                                </div>
                                <div>
                                    <button onClick={()=>handleClick(index)}>Add</button>
                                    <button onClick={()=>handleRemove(index)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Main