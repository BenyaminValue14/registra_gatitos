import React, { useState,useEffect } from 'react'


const Formulario = ({datos, setDatos, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error,setError] = useState(false);
    
    useEffect(() => {
       if(Object.keys(paciente).length > 0){
        setNombre(paciente.nombre);
        setPropietario(paciente.propietario);
        setAlta(paciente.alta);
        setSintomas(paciente.sintomas);

       }
       
    }, [paciente])
    //submit form
    const enviarDatos = (e) =>{
        e.preventDefault();
        
        if([nombre,propietario, alta, sintomas].includes('')){
            setError(true);

            setTimeout(() => {
                setError(false)
            }, 3000);
            return;
        }
        console.log('todo enviado');
        console.log('datos');
        console.log(datos);
        
        //objeto de gatitos
        const datosGatito = {
            nombre,
            propietario,
            alta,
            sintomas,
        }
        //con esto reescribe
        // setDatos(datosGatito);

        if (paciente.id) {
            datosGatito.id = paciente.id;
            console.log(datosGatito);
            console.log(paciente);

            const gatitosActualizados = datos.map( pacienteState => pacienteState.id === paciente.id ? datosGatito : pacienteState)
            console.log(gatitosActualizados);
            setDatos(gatitosActualizados)
            //limpiando la variable temporal de paciente
            setPaciente({});

        }else{
            console.log('agregando');
            datosGatito.id=generarId();
            setDatos([...datos,datosGatito])
        }

        //reseteando datos
        setNombre('');
        setPropietario('');
        setAlta('');
        setSintomas('');

        localStorage.setItem('gatitos',JSON.stringify(datos));

    }
    

    function generarId(){
        let random = Math.random().toString().slice(2);
        let ahora = Date.now();
        let id = random*ahora
        return id
    }   
    // console.log(generarId());

    return (
        <div className='box_form'>
            <h3 className='text_white'>Formulario</h3>
            {error && <div className='box_error'>Todos los campos obligatorios</div>}
            <form className='form' action="" onSubmit={enviarDatos}>
                <div className='section_form_datos'>
                    <label htmlFor="nombreForm">Nombre de gato</label>
                    <input 
                    type="text"
                    id='nombreForm'
                    placeholder='Ejm: Michi'
                    value={nombre}
                    onChange = {e => setNombre(e.target.value)}
                    />
                </div>
                <div className='section_form_datos'>
                    <label htmlFor="propietarioForm">Nombre de propietario</label>
                    <input 
                    type="text"
                    id='propietarioForm'
                    placeholder='Escribe aqui...'
                    value={propietario}
                    onChange = {e => setPropietario(e.target.value)}
                    />
                </div>
                <div className='section_form_datos'>
                    <label htmlFor="altaForm">Fecha de cumpleaños</label>
                    <input 
                    type="date"
                    id='altaForm'
                    value={alta}
                    onChange = {e => setAlta(e.target.value)}
                    />
                </div>
                <div className='section_form_datos'>
                    <label htmlFor="sintomasForm">Descripción</label>
                    <textarea 
                    name="" 
                    placeholder='Escribe aqui...'
                    id="sintomasForm" 
                    value={sintomas}
                    onChange = {e => setSintomas(e.target.value)}
                     />
                </div>
            <input 
            className='btn_submit'
            type="submit" 
            value={paciente.id ? 'Editar' : 'Agregar'}
            />
            </form>
        </div>
    )
}

export default Formulario
