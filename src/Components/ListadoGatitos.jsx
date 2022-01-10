import React from 'react'
import Gatito from './Gatito'
import { useEffect } from 'react'



const ListadoGatitos = ({datos, setPaciente, paciente,eliminarPaciente}) => {

    return (
        <div>
            <h3 className='text_white'>Lista de tus Gatitos</h3>
            {datos.length > 0 ? "" : <p className='text_white'>Aún no tienes gatitos registrados</p>}
            {datos.map( element=> (<Gatito 
                                    nombre={element.nombre}
                                    propietario={element.propietario}
                                    alta={element.alta}
                                    sintomas={element.sintomas}
                                    key={element.id}
                                    eliminarPaciente={eliminarPaciente}
                                    setPaciente={setPaciente}
                                    paciente={paciente}
                                    id={element.id}
                                    />
                                    ))}
        </div>
    )
}

export default ListadoGatitos
