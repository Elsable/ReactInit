import React,{useState} from "react";
import Store from "store";
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';    

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const getUnseen = notifications => {
  let unseen = [];
  Object.keys(notifications).map(key => {
    if (!notifications[key].seen) {
      return unseen.push(notifications[key]);
    }
  });
  return unseen.length;
};


    



function  HeaderPresenter(props){
  const [valor, setValor] = useState(false);

  return(

    
  <>
   <Navbar color="" style={{background:"#2f9e59"}} light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          {valor ? (
                  <NavbarToggler onClick={() => setValor(false)} />

        
      ) : (
        <NavbarToggler onClick={() => setValor(true)} />)
      }

          

          <Collapse isOpen={valor} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
  
</>
  )
}


export default HeaderPresenter;