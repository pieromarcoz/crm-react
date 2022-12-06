import {Outlet} from 'react-router-dom'

const Layout = () => { 
  return (
    <>
        <h2 className='font-bold text-6xl'>CRM - React</h2>
        <Outlet />
    </>
  )
}

export default Layout