const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{' '}
          <span className="font-normal normal-case">Hook</span></p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{' '}
          <span className="font-normal normal-case">Gerardo</span></p>
        
        <p className="font-bold mb-3 text-gray-700 uppercase">Email:{' '}
          <span className="font-normal normal-case">correo@mail.com</span></p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta:{' '}
          <span className="font-normal normal-case">15 dMayo de 2023</span></p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:{' '}
          <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati quidem maiores vitae minus culpa asperiores illum quo dolor ad. Facere nemo aut placeat fugit eius exercitationem ea corrupti repellendus!</span></p>
    </div>
  )
}

export default Paciente