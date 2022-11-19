// Import React Stuff
import * as React from 'react';

// Import React UI Components
import { Navbar, NavbarBrand } from 'reactstrap';

// Import Props
interface NavbarProps {}

// Import States
interface NavbarState {}

export default class DashboardNavbar extends React.Component<
    NavbarProps,
    NavbarState
    > {
    constructor(props: NavbarProps) {
        super(props);
    }

    componentDidMount() {
        console.log('Navbar Component Mounted');
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">
                        <p
                            style={{
                                color: 'blue',
                                fontSize: '20px',
                                textAlign: 'center',
                                fontWeight: '700',
                            }}
                        >
                            CORONA Dashboard{' '}
                        </p>
                    </NavbarBrand>
                </Navbar>
            </div>
        );
    }
}
