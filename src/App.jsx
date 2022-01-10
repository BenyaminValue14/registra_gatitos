import { useState,useEffect } from 'react'
import Formulario from './Components/Formulario'
import './App.css'
import ListadoGatitos from './Components/ListadoGatitos'

function App() {
  
  const [datos, setDatos] = useState([]);
  const [paciente, setPaciente] = useState({});
  // aqui traes del localstorage
  useEffect( ()=>{
    const obtenerLS = ()=>{
      const gatitosLS = JSON.parse(localStorage.getItem('datos_gatitos')) ?? [];
      setDatos(gatitosLS);
    }
    obtenerLS();
  },[])
  //aqui mandas al  localstorage
  useEffect( ()=>{
    localStorage.setItem('datos_gatitos', JSON.stringify(datos));
  },[datos])

  const eliminarPaciente = (id) =>{
    const gatitosNoEliminados = datos.filter( element => element.id !== id )
    setDatos(gatitosNoEliminados);
  }

  const fotos={
    gatitoFondo: "https://storage.cloud.google.com/first_images/cat_2_1.png",
    catTitle:"https://storage.cloud.google.com/first_images/cat_sticker_2.png",
  }

  return (
    <div className="App">
      <div className='box_title'>
      <h2 className='title text_white'>Registra a tu Gatito</h2>
      <img className='cat_title' src={fotos.catTitle} alt="" />
      </div>
      <div className='container'>
        <div className="section">
                <Formulario
                datos = {datos}
                setDatos={setDatos}
                paciente={paciente}
                setPaciente={setPaciente}
                />
        </div>
        <div className='section'>
            <ListadoGatitos
            datos={datos}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            paciente={paciente}

            />
        </div>
        <div className='kitty_background'>
          <img className='gatitoFondo' src={fotos.gatitoFondo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
