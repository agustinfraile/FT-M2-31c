import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <>
      <input type="text" placeholder='Buscar ciudad...' />
      <button
        onClick={()=>onSearch('Buscando...')}
      >
        Agregar
      </button>
    </>  
  )
};