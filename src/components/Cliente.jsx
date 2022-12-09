function Cliente ({cliente}) {
    const {nombre, empresa, email, telefono, id} = cliente
  return (
    <tr className="border-b">
        <td className='p-6 space-y-2'>
            <p className="text-2xl text-gray-800">{nombre}</p>
            <p>{empresa}</p>
        </td>
        <td className="p-6">
            <p className="text-gray-600"><span className="font-bold text-gray-800 uppercase">Email: </span>{email}</p>
            <p className="text-gray-600"><span className="font-bold text-gray-800 uppercase">Tel: </span>{telefono}</p>
        </td>
        <td className="p-6 flex gap-3">
            <button type="buttom" className="uppercase font-bold text-blue-600 hover:text-blue-700 text-xs">Editar</button>
            <button type="buttom" className="uppercase font-bold text-red-600 hover:text-red-700 text-xs">Eliminar</button>
        </td>
    </tr>
  )
}

export default Cliente