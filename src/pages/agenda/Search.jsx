import React from 'react';


import { useSearchParams,Link } from 'react-router-dom';

const Search = () => {
    //só quero pegar
    const [ searchParamas ] = useSearchParams();
//enviando perguntas
    const url = "http://localhost:5000/agenda?" + searchParamas;
//hook


    return (
        <>
           
            <p>Resultados encontrados</p>

            {error &&
    <p>{error}</p>
    }
<ul className="products">
  {items && 
    items.map((item)=>(
  <li key ={item.id}>
    <h2>{item.titulo}</h2>
    
    <p> {item.descricao}</p>
    {/*4 - rota dinamica*/}
    <Link to={`/agenda/${item.id}`}>Detalhes</Link>
    
  </li>
  ))}
</ul>

        </>
    )
}

export default Search;