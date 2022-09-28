import React, { useEffect, useRef, useState } from 'react';
import './Timer.css'

const Timer = () => {

  const toggle = () => {
    setActivo(!activo);
  };

  const reset = () => {
    setSegundos(0);
    setActivo(false);
  };
  
  const myRef = useRef(null);
  const agregaSegundos = () => {
    // `current` apunta al elemento de entrada de texto montado
    let ref = myRef.current.value;
    setSegundos(ref);
  }



  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');

  const cambioTipo = () => {
    if (tipo === 'Contador') setTipo('Cuenta Regresiva');
    if (tipo === 'Cuenta Regresiva') setTipo('Contador');
  }

  useEffect(() => {
    let intervalo = null;
    if(activo && tipo === 'Contador') {
      intervalo = setInterval( () => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }
    if(activo && tipo === 'Cuenta Regresiva') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }
    if(!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(intervalo);
    }
    if(segundos === 0 && tipo === 'Cuenta Regresiva') {
      reset();
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [activo, segundos, tipo]);


  return (
    <div className="app">
      <div className="time">
        {segundos}seg
      </div>
      <div className="row">
        
        <button 
          className={`button button-primary button-primary-{activo ? 'active' : 'inactive'}`}
          onClick={toggle}
        >
          {activo ? 'Pausa' : 'Inicio'}
        </button>

        <button className="button-secondary" onClick={reset}>
          Reset
        </button>

      </div>

      <button className="button" onClick={cambioTipo}>
          {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' && <input type="number"  ref={myRef} onChange={agregaSegundos} placeholder="Ingresa Segundos" autoComplete="off"/>}
    </div>
  );
};

export default Timer;
