
import React from "react"
import { useEffect } from "react";
import { useState } from "react";

export const Agenda=()=>{
  const [data,setData]=useState([])
  const [titulo, setTitulo]=useState('');
  const [descricao, setDescricao]=useState('');


  const enviar=async(e)=>{
    e.preventDefault();
   // console.log("oi");
   const agenda={titulo, descricao, data}
const res=await fetch('http://localhost:2000/agenda? ',{
method: "POST",
headers: { "Content-Type":"application/json"},
body: JSON.stringify(agenda)
})

//console.log(agenda)
  }
  const getAgenda=async()=>{
    fetch('http://localhost:2000/agenda')
    .then((resp)=> resp.json())
    .then((respJson)=>(
      setData(respJson)
    ))
  }
useEffect(()=>{
  getAgenda()
})
  return(

  <>
  <h1>Vou te mostrar o que você agendou.</h1>
  <h2>Agenda</h2>
  <form>

  <input 
  type="text"
  name="titulo"
  placeholder="Informe o titulo"
  value={titulo}
onChange={(e)=>setTitulo(e.target.value)}
  />

 <input 
  type="text"
  placeholder="Inform uma descrição"
  value={descricao}
  name="descricao"
  onChange={(e)=>setDescricao(e.target.value)}
  />

  <input 
   name="data"
  type="date"
  placeholder="Inform uma data"
  value={data}
  onChange={(e)=>setData(e.target.value)}
  />

  <button onClick={enviar}>Agenda</button>
  </form>
  <h3>Todos as tarefas cadastradas</h3>
<p></p>
  </>
)
}
