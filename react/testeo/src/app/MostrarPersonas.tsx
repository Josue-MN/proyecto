import React, {useEffect, useState} from 'react'
import { Persona } from './Interfaces/IPersona'

interface Props{
    saludo:string,
    traerPersona: (p:Persona, index:number) => void
}

export const MostrarPersonas = (props:Props) =>{
    const miStorage = window.localStorage
    const [personas, setPersonas] = useState<Persona[]>([])

    useEffect(()=>{
        let listadoStr = miStorage.getItem("personas")
        if(listadoStr != null){
            let listado = JSON.parse(listadoStr)
            setPersonas(listado)
        }
    },[])

    const queEditar = (persona:Persona,index:number) =>{
        alert("Le diste a "+index)
        props.traerPersona(persona,index)
    }

    const handleEliminar = (index:number) =>{
      const nuevoListadoPersonas = [...personas]
      nuevoListadoPersonas.splice(index,1)
      setPersonas(nuevoListadoPersonas)
      miStorage.setItem("personas",JSON.stringify(nuevoListadoPersonas))
    }

    return(
        <>
        <h1>{props.saludo}</h1>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {personas.map((p,index)=>{
                    return(
                        <tr>
                            <td>{p.nombre}</td>
                            <td>{p.apellido}</td>
                            <td>{p.edad}</td>
                            <td>
                                <button
                                onClick={()=>queEditar(p,index)}>
                                    Editar
                                </button>
                                <button
                                onClick={()=>handleEliminar(index)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default MostrarPersonas