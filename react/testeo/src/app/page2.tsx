'use client'
import { useState } from "react";


interface Persona{ //interfaz persona
  nombre: string,
  apellido: string,
  edad: number
}

let initialStatePersona:Persona = { //informa el valor inicial del estado persona
  nombre:"",
  apellido:"",
  edad: 0
}

export default function Home() {

  const [persona, setPersona] = useState(initialStatePersona) //genera un useState para el objeto persona
  const [eNombre, setENombre] = useState("")
  const handlePersona = (name:string,value:string)=>{

    setPersona(
      {...persona,[name]:value} //...persona recupera lo que se tenia anteriormente
    )
    //validaciones
    if(persona.nombre.length <= 3){
      setENombre("Debe tener mas de 3 caracteres")
    }
    else{
      setENombre("")
    }

  }
  return (
    <form>
      <h1>Hola {persona.nombre}</h1>
      <h1>{persona.apellido}</h1>
      <h1>{persona.edad}</h1>

      <label>Nombre</label>
      <br></br>
      <input 
      name="nombre"
      type="text" 
      placeholder="Nombre"
      onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}
      />
      <br></br>
      <span>{eNombre}</span>
      <br></br>

      <label>Apellido</label>
      <br></br>
      <input 
      name="apellido"
      type="text" 
      placeholder="Apellido"
      onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}
      />
      <br></br>
      <span></span>
      <br></br>

      <label>Edad</label>
      <br></br>
      <input
      name="edad"
      type="number"
      placeholder="Edad"
      onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}
      />
      <br></br>

      <button>Registrar</button>
    </form>
  );
}
