
import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"

export const Agenda=()=>{
  const [data,setData]=useState([])
  const [titulo, setTitulo]=useState('');
  const [descricao, setDescricao]=useState('');
  
    //console.log(idProduto)
 const getAgenda=async()=>{
fetch("http://localhost:5000/agenda")
   .then((Response) => Response.json())
     .then((ResponseJson) => (
        setData(ResponseJson)          
     ));
 } 
  
//função de postare
  const enviar=async(e)=>{
    e.preventDefault();
   // console.log("oi");
   const agenda={
    titulo, descricao, data
  }

const res=await fetch('http://localhost:5000/agenda',{
method: "POST",
headers: { "Content-Type":"application/json"},
body: JSON.stringify(agenda)
})
getAgenda()
  }
  //função de delete
  const apagar =async (idProduto) => {
    await fetch(`http://localhost:5000/agenda/`+ idProduto,{
      method: "DELETE",
       headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    getAgenda()
  }  
  
 useEffect(()=>{
  getAgenda()
},[])

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


  <button onClick={enviar}>Agenda</button>
  </form>

  <h3>Todos as tarefas cadastradas</h3>

{data && data.map((dados)=>(
  <div className="get">
    
    
  <h4 key={dados.id}>{dados.titulo}</h4>
  <p>{dados.descricao}</p>
  <button className="apagar" 
      onClick={()=>apagar(dados.id)}>Apagar
    </button>
    <Link className="editar" to={"/editar/" +dados.id}>
      Editar
    </Link>
  </div>
))}

  </>
)
  }
