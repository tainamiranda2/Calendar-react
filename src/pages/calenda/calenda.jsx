import React, {useState} from "react";
import Calendar from 'react-calendar'
import {useNavigate} from "react-router-dom"

import 'react-calendar/dist/Calendar.css';

import {Agenda} from "../agenda/agenda"


export const Calenda=()=>{
  const [value,setValue]=useState(new Date())
  
  //const navigate =Navigate()
  const vijar = useNavigate()
  console.log(value)


  return (
    <>
      <Calendar
        onChange={setValue}
        value={value}
        />
    </>
  )
}