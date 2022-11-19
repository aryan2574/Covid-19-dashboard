// Import React Stuff
import * as React from 'react';

// Import React UI Components
import { Table } from 'reactstrap';

// Props
interface DataPageProps {
    data: [''];
    state: string;
    district: string;
}

// States
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

        return (
            <React.Fragment>
                {dataToDisplay ? (
                    <div>
                        <h4 className="pt-5" style={{ color: 'blue' }}>
                            {' '}
                            All Variants{' '}
                        </h4>
                        <br />
                        <Table striped hover bordered responsive>
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
                            {dataToDisplay.total ? (
                                <tr>
                                    <td>{state ? state : 'Data Not Available'}</td>
                                    <td>{district ? district : 'Data Not Available'}</td>
                                    <td>
                                        {dataToDisplay.total.confirmed
                                            ? dataToDisplay.total.confirmed
                                            : 'Data Not Available'}
                                    </td>
                                    <td>
                                        {dataToDisplay.total.deceased
                                            ? dataToDisplay.total.deceased
                                            : 'Data Not Available'}
                                    </td>
                                    <td>
                                        {dataToDisplay.total.recovered
                                            ? dataToDisplay.total.recovered
                                            : 'Data Not Available'}
                                    </td>
                                    <td>
                                        {dataToDisplay.total.tested
                                            ? dataToDisplay.total.tested
                                            : 'Data Not Available'}
                                    </td>
                                    <td>
                                        {dataToDisplay.total.vaccinated1
                                            ? dataToDisplay.total.vaccinated1
                                            : 'Data Not Available'}
                                    </td>
                                    <td>
                                        {dataToDisplay.total.vaccinated2
                                            ? dataToDisplay.total.vaccinated2
                                            : 'Data Not Available'}
                                    </td>
                                </tr>
                            ) : (
                                <tr>
                                    <td>{state ? state : 'Data Not Available'}</td>
                                    <td>{district ? district : 'Data Not Available'}</td>
                                    <td>'Data Not Available'</td>
                                    <td>'Data Not Available'</td>
                                    <td>'Data Not Available'</td>
                                    <td>'Data Not Available'</td>
                                    <td>'Data Not Available'</td>
                                    <td>'Data Not Available'</td>
                                </tr>
                            )}
                            </tbody>
                        </Table>

                        <h4 className="pt-5" style={{ color: 'blue' }}>
                            {' '}
                            Delta 7{' '}
                        </h4>
                        <br />
                        <Table striped hover bordered responsive>
                            <thead>
                            <tr>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Vaccinated 1</th>
                                <th>Vaccinated 2</th>
                            </tr>
                            </thead>
                            <tbody>
                            {dataToDisplay.delta7 ? (
                                <tr>
                                    <td>
                                        {dataToDisplay.delta7.confirmed
                                            ? dataToDisplay.delta7.confirmed
                                            : 'Data Not Available'}
                                    </td>
                                    <td>
                                        {dataToDisplay.delta7.recovered
                                            ? dataToDisplay.delta7.recovered
                                            : 'Data Not Available'}
                                    </td>
                                    <td>
                                        {dataToDisplay.delta7.vaccinated1
                                            ? dataToDisplay.delta7.vaccinated1
                                            : 'Data Not Available'}
                                    </td>
                                    <td>
                                        {dataToDisplay.delta7.vaccinated2
                                            ? dataToDisplay.delta7.vaccinated2
                                            : 'Data Not Available'}
                                    </td>
                                </tr>
                            ) : (
                                <tr>
                                    <td>Data Not Available</td>
                                    <td>Data Not Available</td>
                                    <td>Data Not Available</td>
                                    <td>Data Not Available</td>
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </div>
                ) : null}
            </React.Fragment>
        );
    }
}
