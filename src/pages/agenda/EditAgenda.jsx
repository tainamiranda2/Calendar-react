import React from "react";

export const editar=()=>{
  const [titulo, setTitulo]=useState('');
  const [descricao, setDescricao]=useState('');
  const [data, setData]=useState('');

  const editar=async e=>{
    e.preventDefault()
    await fetch("http://localhost:2000/agenda", {
        method: "PUT",
        //headers: { "Content-Type":"application/json" },
        body:JSON.stringify({ titulo, descricao})
      })
  }
  
    return(
        <>
        
        </>
    )
}