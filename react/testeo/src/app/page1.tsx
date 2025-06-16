'use client'
import { useState } from "react";

export default function Home() {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  return (
    <form>
      <h1>Hola {nombre}</h1>
      <h1>{apellido}</h1>

      <label>Nombre</label>
      <br></br>
      <input type="text" 
      placeholder="Nombre"
      onChange={(e)=>setNombre(e.currentTarget.value)}
      />
      <br></br>
      <span></span><br></br>

      <label>Apellido</label>
      <br></br>
      <input type="text" 
      placeholder="Apellido"
      onChange={(e)=>setApellido(e.currentTarget.value)}
      />
      <br></br>
      <span></span><br></br>
      <button>Registrar</button>
    </form>
  );
}
