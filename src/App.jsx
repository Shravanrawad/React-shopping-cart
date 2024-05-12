import { useState } from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import Navbar from './componants/navbar'
import {Provider} from 'react-redux'
import store from './store/store'

function App() {

  return (
     <>
     <Provider store={store}>
     <Navbar/>
     <Outlet/>
     </Provider>
     </>
  )
}

export default App
