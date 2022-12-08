import { useNavigate } from 'react-router-dom'
import Formulario from '../components/Formulario'
const NuevoCliente = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1 className="text-4xl text-blue-900 font-black">Nuevo Cliente</h1>
      <p className="mt-3">Completa todos los campos para registrar un nuevo cliente</p>
      <div className="flex justify-end">
        <button 
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase mt-5"
          onClick={() => navigate('/')}
        >
          Volver
        </button>
      </div>
      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
        <Formulario/>
        <input 
          type={'submit'} 
          className='mt-5 w-full bg-blue-800 uppercase p-3 font-bold text-white text-lg ' 
          value={'Registrar Cliente'}
        />
      </div>
    </>
  )
}

export default NuevoCliente