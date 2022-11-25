// Import React Stuff
import * as React from 'react';

// Import React UI Components
import {  Form, FormGroup, Label, Input } from 'reactstrap';
import DataPage from './DataPage';

// Props
interface SearchBarProps {
    data: [''];
    darkMode: boolean;
}

// States
interface SearchBarState {
    state: string;
    district: string;
}

export default class SearchBar extends React.Component<
    SearchBarProps,
    SearchBarState
    > {
    constructor(props: SearchBarProps) {
        super(props);

        this.state = {
            state: '',
            district: '',
        };

        this.stateSelectHandler = this.stateSelectHandler.bind(this);
        this.districtSelectHandler = this.districtSelectHandler.bind(this);
    }

    componentDidMount() {
        console.log('SearchBar Component Mounted');
    }

    stateSelectHandler(event: any) {
        this.setState({
            state: event.target.value,
            district: '',
        });
    }

    districtSelectHandler(event: any) {
        this.setState({
            district: event.target.value,
        });
    }

    render() {
        const { data, darkMode } = this.props;
        const { state, district } = this.state;
        const states = Object.keys(data);

        // @ts-ignore
        return (
            <div className="container-fluid">
                <Form
                    className="row"
                    style={
                        darkMode ? { background: '#800000' } : { background: '#ffb6c1' }
                    }
                >
                    <FormGroup
                        className="col-sm-5 align-baseline"
                        style={
                            darkMode
                                ? { color: 'white', fontWeight: 'bold' }
                                : { color: 'black', fontWeight: 'bold' }
                        }
                    >
                        <Label for="state">State</Label>
                        <Input
                            type="select"
                            name="state"
                            id="state"
                            onChange={this.stateSelectHandler}
                        >
                            {!state && <option>Select</option>}
                            {states.map((state: string, index: number) => (
                                <option key={index} value={state}>
                                    {state}
                                </option>
                            ))}
                        </Input>
                    </FormGroup>

                    <FormGroup className="col-sm-5 align-baseline">
                        <Label
                            for="district"
                            style={
                                darkMode
                                    ? { color: 'white', fontWeight: 'bold' }
                                    : { color: 'black', fontWeight: 'bold' }
                            }
                        >
                            City
                        </Label>
                        <Input
                            type="select"
                            name="district"
                            id="district"
                            onChange={this.districtSelectHandler}
                        >
                            {!district && (
                                <option>{district === '' ? 'Select' : district}</option>
                            )}
                            {
                                state !== '' &&
                                // @ts-ignore
                                Object.keys(data[state].districts).map(
                                    (district: string, index: number) => (
                                        <option key={index} value={district}>
                                            {district}
                                        </option>
                                    )
                                )
                            }
                        </Input>
                    </FormGroup>
                </Form>

                {state !== '' && district !== '' && (
                    <DataPage
                        data={data}
                        state={state}
                        district={district}
                        darkMode={darkMode}
                    />
                )}
            </div>
        );
    }
}
