import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch("Cairns")
    }}>
      <input type="text" placeholder='Buscar ciudad...' />
      <input type="submit" value="Agregar" />
    </form>  
  )
};