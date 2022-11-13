// Import React Stuff
import * as React from 'react';

// Import React UI Components
import { Table } from 'reactstrap';

// Import Props
interface DataPageProps {
    data: [''],
    state: string,
    district: string,
}

// Import States
interface DataPageStates {}

export default class DataPage extends React.Component<
    DataPageProps,
    DataPageStates
    > {
    constructor(props: DataPageProps) {
        super(props);
    }

    componentDidMount() {
        console.log('DataPage Component Mounted');
    }

    render() {
        const { data, state, district } = this.props;
        // @ts-ignore
        const dataToDisplay = data[state].districts[district];

        return <div>
            {
                dataToDisplay
                &&
                <Table striped hover>
                    <thead>
                    <tr>
                        <th>State</th>
                        <th>District</th>
                        <th>Confirmed</th>
                        <th>Deceased</th>
                        <th>Recovered</th>
                        <th>Tested</th>
                        <th>Vaccinated 1</th>
                        <th>Vaccinated 2</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{state}</td>
                        <td>{district}</td>
                        <td>{dataToDisplay.total.confirmed}</td>
                        <td>{dataToDisplay.total.deceased}</td>
                        <td>{dataToDisplay.total.recovered}</td>
                        <td>{dataToDisplay.total.tested}</td>
                        <td>{dataToDisplay.total.vaccinated1}</td>
                        <td>{dataToDisplay.total.vaccinated2}</td>
                    </tr>
                    </tbody>
                </Table>
            }
        </div>
    }
}
