'use client'
import { useEffect, useState } from "react";


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

  const miStorage = window.localStorage //creacion de estado

  const [persona, setPersona] = useState(initialStatePersona) //genera un useState para el objeto persona
  const [personas,setPersonas] = useState<Persona[]>([]) // es una lista de personas str
  const [eNombre, setENombre] = useState("")

  useEffect(()=>{           //cualquier cosa que pase sobre | const [personas,setPersonaa] = useState<Persona[]>([]) | muestra una actualizacion al estar pendiente de una ejecucion
    //console.log("HOLAA")
    let listadoStr = miStorage.getItem("personas")
    if(listadoStr != null){
      let listado = JSON.parse(listadoStr)
      setPersonas(listado)
    }
  },[])

  const handlePersona = (name:string,value:string)=>{

    setPersona(
      {...persona,[name]:value} //...persona recupera lo que se tenia anteriormente en persona
    )

    //validaciones
    if(persona.nombre.length <= 3){
      setENombre("Debe tener mas de 3 caracteres")
    }
    else{
      setENombre("")
    }
  };
  const handleRegistrar = ()=>{
    miStorage.setItem("personas",JSON.stringify([...personas,persona])) // los corchetes crean una lista y los ... recuperan la lista persona y el ultimo recupera la ultima lista de persona, creando un nuevo listado mas la ultima persona agregada
    

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

      <button onClick={()=>handleRegistrar()} >
      Registrar
      </button>
    </form>
  );
}
