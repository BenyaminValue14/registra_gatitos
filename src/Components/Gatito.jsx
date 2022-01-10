import React, {useEffect} from 'react'

const Gatito = ({nombre, propietario, alta, sintomas,eliminarPaciente,id, setPaciente, paciente}) => {


    return (
        <div className='box-gatito'>
            <p><span className='f-bold'>Nombre:</span> {nombre}</p>
            <p><span className='f-bold'>Propietario:</span> {propietario}</p>
            <p><span className='f-bold'>Fecha de cumpleaños:</span> {alta}</p>
            <p>
            <span className='f-bold'>Descripción:</span> {sintomas}
            </p>
            <div className='box-buttons'>
                <button className='btn_editar' onClick={() => setPaciente({nombre, propietario, alta, sintomas, id})}>Editar</button>
                <button className='btn_eliminar'  onClick={() => eliminarPaciente(id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default Gatito
