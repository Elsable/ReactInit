import React,{useState} from "react";
import {Link} from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

    



function  HeaderPresenter(props){
  const [valor, setValor] = useState(false);

  return(

    
  <>
   <Navbar  style={{background:"#341f97"}}  expand="md">
   <Link to="/"><NavbarBrand ><img style={{width:150,height:32}} src='https://www.credifiel.com.mx/hs-fs/hubfs/WebSite/img/logo-blanco.png' alt="Logo" /></NavbarBrand>
   </Link>
          {valor ? (
                  <NavbarToggler onClick={() => setValor(false)} />

        
      ) : (
        <NavbarToggler onClick={() => setValor(true)} />)
      }

          

          <Collapse isOpen={valor} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              
              <Link to="/SignIn"><NavLink>
              Iniciar Sesión
                </NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
  
</>
  )
}


export default HeaderPresenter;