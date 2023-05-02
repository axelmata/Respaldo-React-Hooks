import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { MainApp } from './9-useContext/MainApp'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import { TodoApp } from './8-useReducer/TodoApp'
//import { CallbackHook } from './6-memos/CallbackHook'
//import { Padre } from './7-tarea-memo/Padre'
//import { MemoHook } from './6-memos/MemoHook'
//import { Memorize } from './6-memos/Memorize'
//import { Layout } from './5-useLayoutEffect/Layout'
//import { MultipleCustomHook } from './3-examples/MultipleCustomHook'
//mport { SimpleForm } from './2-useEffect/SimpleForm'
//import { FormWhitCustomHook } from './2-useEffect/FormWhitCustomHook'
//import { CounterWhiteCustomHook } from './1-useState/CounterWhiteCustomHook'
//import { CounterApp } from './useState/CounterApp'
//import { HooksApp } from './HooksApp'


//import './8-useReducer/intro-reducer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/*React.StrictMode*/}
    <MainApp />
    {/*/React.StrictMode,*/}
  </BrowserRouter>
)
