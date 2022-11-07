import React from 'react'

import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Calenda} from './pages/calenda/calenda'

import {Agenda} from './pages/agenda/agenda'

export const Router=()=>{
  return(
    <BrowserRouter>
    <Routes>


    <Route path="/" element={<Calenda/>}/>

<Route path="/agenda" element={<Agenda/>}/>

    </Routes>
    </BrowserRouter>
  )
}