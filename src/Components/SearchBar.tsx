// Import React Stuff
import * as React from 'react';

// Import React UI Components
import { Form, FormGroup, Label, Input } from 'reactstrap';

// Import Components
import DataPage from './DataPage';

// Props
interface SearchBarProps {
    data: [''];
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

    //  State Selection Function
    stateSelectHandler(event: any) {
        this.setState({
            state: event.target.value,
            district: '',
        });
    }

    // District Selection Function
    districtSelectHandler(event: any) {
        this.setState({
            district: event.target.value,
        });
    }

    render() {
        const { data } = this.props;
        const { state, district } = this.state;
        const states = Object.keys(data);

        // @ts-ignore
        // @ts-ignore
        return (
            <div className="container-fluid">
                <Form className="row" style={{ background: 'aqua' }}>
                    <FormGroup
                        className="col-sm-5 align-baseline"
                        style={{ fontWeight: 'bold' }}
                    >
                        <Label for="state">State</Label>
                        <Input
                            type="select"
                            name="state"
                            id="state"
                            onChange={this.stateSelectHandler}
                        >
                            <option>{state === '' ? 'Select' : state}</option>
                            {states.map((state: string, index: number) => (
                                <option key={index}>{state}</option>
                            ))}
                        </Input>
                    </FormGroup>

                    <FormGroup className="col-sm-5 align-baseline">
                        <Label for="district" style={{ fontWeight: 'bold' }}>
                            City
                        </Label>
                        <Input
                            type="select"
                            name="district"
                            id="district"
                            onChange={this.districtSelectHandler}
                        >
                            <option> {district === '' ? 'Select' : district} </option>
                            {
                                // @ts-ignore
                                state !== '' &&
                                // @ts-ignore
                                Object.keys(data[state].districts).map(
                                    (district: string, index: number) => (
                                        <option key={index}>{district}</option>
                                    )
                                )
                            }
                        </Input>
                    </FormGroup>
                </Form>

                {/* Rendering of DataPage component only when data is available */}
                {state !== '' && district !== '' && (
                    <DataPage data={data} state={state} district={district} />
                )}
            </div>
        );
    }
}
