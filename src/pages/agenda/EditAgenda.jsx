import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const Editar=()=>{
  const [titulo, setTitulo]=useState('');
  const [descricao, setDescricao]=useState('');
  const [data, setData]=useState('');

  const getAgenda=async()=>{
    fetch("http://localhost:5000/agenda")
       .then((Response) => Response.json())
         .then((ResponseJson) => (
            setData(ResponseJson)          
         ));
     } 

  const editar=async e=>{
    e.preventDefault()
    await fetch("http://localhost:2000/agenda", {
        method: "PUT",
        headers: { "Content-Type":"application/json" },
        body:JSON.stringify({ titulo, descricao})
      })
  }
   useEffect(()=>{
  getAgenda()
},[])
    return(
        <>
        
        </>
    )
}