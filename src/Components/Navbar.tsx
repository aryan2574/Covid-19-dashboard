// Import React Stuff
import * as React from 'react';

// Import React UI Components
import {
    Navbar,
    NavbarBrand
 } from 'reactstrap';

// Import Props
interface NavbarProps {}

// Import States
interface NavbarState {}

export default class DashboardNavbar extends React.Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md" >
                    <NavbarBrand href="/">
                        <p style={{color: "red", fontSize : "20px", textAlign: "center", fontWeight: "700"}}>Covid-19 Dashboard (IND) </p>
                    </NavbarBrand>
                </Navbar>
            </div>
        );
    }
}
