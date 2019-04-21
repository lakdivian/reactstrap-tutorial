import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ReactstrapNavbar extends Component{

    state = {
        components: [
            {
                text: 'Button',
                route: '/button'
            },
            {
                text:'Alert',
                route: '/alerts'
            },
            {
                text:'Carousel',
                route: '/carousel'
            }            
        ]
    }

    render(){

        const { components } = this.state;
        return(
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">ReactStrap Course</NavbarBrand>
                    <Nav navbar className="ml-auto">
                        {/* <NavItem>
                            <NavLink href="/">link</NavLink>
                        </NavItem> */}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Components
                            </DropdownToggle>
                            <DropdownMenu right>
                                {components.map((component,index) => (
                                    <DropdownItem key={ index }>
                                        <Link to = {component.route} className="drop-link">{ component.text }</Link>
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default ReactstrapNavbar;