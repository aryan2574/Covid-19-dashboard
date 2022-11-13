// Import React Stuff
import * as React from 'react';

// Import React UI Components
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import DataPage from "./DataPage";

// Props
interface SearchBarProps {
    data: [''];
}

// States
interface SearchBarState {
    state: string,
    district : string,
    formSubmitted: boolean,
}

export default class SearchBar extends React.Component<
    SearchBarProps,
    SearchBarState
    > {
    constructor(props: SearchBarProps) {
        super(props);

        this.state = {
            state: "AN",
            district: "",
            formSubmitted: false,
        }

        this.submitHandler = this.submitHandler.bind(this);
        this.stateSelectHandler = this.stateSelectHandler.bind(this);
        this.districtSelectHandler = this.districtSelectHandler.bind(this);
    }

    componentDidMount() {
        console.log('SearchBar Component Mounted');
    }

    submitHandler(event: any) {
        event.preventDefault();
        this.setState({
            formSubmitted: true,
        });
    }

    stateSelectHandler(event: any) {
        this.setState({
            state: event.target.value,
            formSubmitted: false,
        });
    }

    districtSelectHandler(event: any) {
        this.setState({
            district: event.target.value,
            formSubmitted: false,
        });
    }

    render() {
        const { data } = this.props;
        const { state, district, formSubmitted } = this.state;
        const states = Object.keys(data);

        return (
            <div className="container-fluid">
                <Form onSubmit={this.submitHandler}>
                    <div className="row">
                        <FormGroup className="col-6 align-baseline">
                            <Label for="state">
                                Select a state
                            </Label>
                            <Input type = "select" name = "state" id = "state" onChange={this.stateSelectHandler}>
                                <option>{state}</option>
                                {
                                    states.map((state: string) => (
                                        <option key={Math.random()}>{state}</option>
                                    ))}
                            </Input>
                        </FormGroup>
                        <FormGroup className="col-6 align-baseline">
                            <Label for="district">
                                Select a district
                            </Label>
                            <Input type = "select" name = "district" id = "district" onChange={this.districtSelectHandler}>
                                <option> {district === "" ? "Select" : district} </option>
                                {
                                    // @ts-ignore
                                    Object.keys(data[state].districts).map((district: string) => (
                                        <option key={Math.random()}>{district}</option>
                                    ))
                                }
                            </Input>
                        </FormGroup>
                    </div>
                    <div className="row">
                        <FormGroup className="col-5">
                            <Button>Submit</Button>
                        </FormGroup>
                    </div>
                </Form>
                {
                    formSubmitted ? <DataPage data={data} state={state} district={district}/> : null
                }
            </div>
        );
    }
}
