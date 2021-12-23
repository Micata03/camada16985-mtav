import React from 'react'
import CartWidget from './CartWidget/CartWidget'
import {Link} from 'react-router-dom'
import {useGlobalContext} from './Context/SideCartContext'




function NavBar() {

  const { openSidebar } = useGlobalContext();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand">MiTienda</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/nosotros" className="nav-link">Nosotros</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-link">Contacto</Link>
        </li>
        
        
            <li  className="nav-item"><CartWidget boton={openSidebar}/></li>  
        
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavBar
