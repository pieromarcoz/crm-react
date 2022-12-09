import { obtenerCliente, actualizarCliente } from "../data/clientes";
import { useNavigate, Form, useLoaderData, redirect, useActionData } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'

export async function loader({params}){
    const cliente = await obtenerCliente(params.clienteId)
    if (Object.values(cliente).length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'No se encontro el cliente'
        })
    }
    return cliente
}

export async function action({request, params}){
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    const email = formData.get('email')
    
    // Validacion
    const errores = []
    if(Object.values(datos).includes('')){
        errores.push('Todos los campos son obligatorios')
    }
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if(!regex.test(email)){
        errores.push('El email no es válido')
    }
    // Retornar si hay errores
    if(Object.keys(errores).length){
        return errores
    }
    
    await actualizarCliente(params.clienteId, datos)
    return redirect('/')
}

function EditarCliente() {
    const navigate = useNavigate()
    const cliente = useLoaderData()
    const errores = useActionData()
    return (
        <>
            <h1 className="text-4xl text-blue-900 font-black">Editar Cliente</h1>
            <p className="mt-3">A continuacion podras modificar los datos de un cliente</p>
            <div className="flex justify-end">
                <button 
                className="bg-blue-800 text-white px-3 py-1 font-bold uppercase mt-5"
                onClick={() => navigate(-1)}
                >
                Volver
                </button>
            </div>
            <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
                <Form method='post' noValidate>
                <Formulario cliente={cliente}/>
                <input 
                    type='submit'
                    className='mt-5 w-full bg-blue-800 uppercase p-3 font-bold text-white text-lg ' 
                    value='Guardar Cambios'
                    action={'/'}
                />
                </Form>
            </div>
        </>
    )
}

export default EditarCliente