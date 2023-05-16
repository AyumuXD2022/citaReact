import { useState } from "react";

export const Formulario = ({pacientes, setPacientes}) => {

  const [nombre,setNombre] = useState('');
  const [propetario,setPropetario] = useState('');
  const [email,setEmail] = useState('');
  const [fecha,setFecha] = useState('');
  const [sintomas,setSintomas] = useState('');
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if( [nombre, propetario,email,fecha,sintomas].includes('') ){
      setError(true)
      return;
    }
    setError(false)

    const objetoPaciente = {
      nombre, 
      propetario,
      email,
      fecha,
      sintomas
    }

    setPacientes([...pacientes,objetoPaciente]);

    

  }

  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Añade Paciente y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
        <div className="mb-5">
          { error && <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded">
            <p>Todos los campos son obligatorios</p>
          </div> }
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input type="text" id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Nombre de la mascota" 
          value={nombre}
          onChange={ (e) => setNombre(e.target.value) }/>
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propetario</label>
          <input type="text" id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Nombre del propietario"
          value={propetario}
          onChange={ (e) => setPropetario(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input type="email" id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Email Contacto propietario" 
          value={email}
          onChange={ (e) => setEmail(e.target.value) }

          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input type="date" id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={fecha}
          onChange={ (e) => setFecha(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los sintomas" 
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

      <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value={"Agregar Paciente"}/>
      </form>
    </div>
    
  )
}
