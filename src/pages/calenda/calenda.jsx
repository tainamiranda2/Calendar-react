import React, {useState} from "react";
import Calendar from 'react-calendar'
import {useNavigate} from "react-router-dom"

import 'react-calendar/dist/Calendar.css';

import {Agenda} from "../agenda/agenda"


export const Calenda=()=>{
  const [value,setValue]=useState(new Date())
  
  //const navigate =Navigate()
  const viajar = useNavigate()
  console.log("Oii",value)


  return (
    <>
    <h1>Agende uma tarefa</h1>
      <Calendar
        onChange={setValue}
        value={value}
        />
    </>
  )
}