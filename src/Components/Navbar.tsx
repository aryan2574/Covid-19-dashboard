// Import React Stuff
import * as React from 'react';

// Import React UI Components
import { Navbar, NavbarBrand } from 'reactstrap';

// Import Props
interface NavbarProps {
    darkMode: boolean;
}

// Import States
interface NavbarState {}

export default class DashboardNavbar extends React.Component<
    NavbarProps,
    NavbarState
    > {
    constructor(props: NavbarProps) {
        super(props);
    }
    render() {
        const { darkMode } = this.props;
        return (
            <div>
                <Navbar color={darkMode ? 'black' : 'light'} expand="md">
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
