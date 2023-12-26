import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import { Provider } from 'react-redux'
import { myStore } from './redux/store'
import { Routes,Route } from 'react-router'
import SideBar from './components/SideBar'

function App() {

  return (
    <div>
      <Provider store={myStore}>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/cart' element={<SideBar/>}></Route>
        </Routes>
      </Provider>

    </div>

  )
}



export default App
