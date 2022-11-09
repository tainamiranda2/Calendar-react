import React from 'react'

import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Calenda} from './pages/calenda/calenda'

import {Agenda} from './pages/agenda/agenda'
import { Editar } from './pages/agenda/EditAgenda';
import Search from './pages/agenda/Search';

export const Router=()=>{
  return(
    <BrowserRouter>
    <Routes>


    <Route path="/" element={<Agenda/>}/>
    <Route path="/editar/{id}" element={<Editar/>}/>
    <Route path="/search" element={<Search/> } />
    </Routes>
    </BrowserRouter>
  )
}