import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavItem,  MDBCollapse, MDBDropdown, MDBDropdownItem,
MDBHamburgerToggler } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Mobilemenu extends Component {
state = {
  collapse1: false,
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

toggleSingleCollapse = collapseId => {
  this.setState({
    ...this.state,
    [collapseId]: !this.state[collapseId]
  });
}

render() {
  return (
    <Router>
        <MDBNavbar>
            <MDBHamburgerToggler id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
              <MDBCollapse isOpen={this.state.collapse1} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBDropdown>
                        <MDBDropdownItem href={process.env.PUBLIC_URL + '/'}>
                            <span >D-SAP</span>
                        </MDBDropdownItem>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownItem href={process.env.PUBLIC_URL + '/data_structuring'}>
                            <span>Nos Services</span>
                        </MDBDropdownItem>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownItem href={process.env.PUBLIC_URL + '/single_style2'}>
                            <span>Nos Réalisations</span>
                        </MDBDropdownItem>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownItem href={process.env.PUBLIC_URL + '/blog_grid'}>
                            <span>Actualités</span>
                        </MDBDropdownItem>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownItem href={process.env.PUBLIC_URL + '/faq'}>
                            <span>FAQs</span>
                        </MDBDropdownItem>
                    </MDBDropdown>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
          </MDBNavbar>
    </Router>
    );
  }
}

export default Mobilemenu;