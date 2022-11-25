// Import React Stuff
import * as React from 'react';

// Import UI Component
import { Button } from 'reactstrap';

// Import CSS
import './DataPage.css';

// Import Props
interface DataPageProps {
    data: [''];
    state: string;
    district: string;
    darkMode: boolean;
}

// Import States
interface DataPageStates {
    showDelta7Data: boolean;
    showDelta21Data: boolean;
}

export default class DataPage extends React.Component<
    DataPageProps,
    DataPageStates
    > {
    constructor(props: DataPageProps) {
        super(props);

        this.state = {
            showDelta7Data: false,
            showDelta21Data: false,
        };

        this.showDelta7DataClickHandler =
            this.showDelta7DataClickHandler.bind(this);

        this.showDelta21DataClickHandler =
            this.showDelta21DataClickHandler.bind(this);
    }

    componentDidMount() {
        console.log('DataPage Component Mounted');
    }

    showDelta7DataClickHandler() {
        this.setState({
            showDelta7Data: true,
            showDelta21Data: false,
        });
    }

    showDelta21DataClickHandler() {
        this.setState({
            showDelta7Data: false,
            showDelta21Data: true,
        });
    }

    render() {
        const { data, state, district } = this.props;
        const { showDelta7Data, showDelta21Data } = this.state;

        // @ts-ignore
        const dataToDisplay = data[state].districts[district];

        return (
            <div className="DataPage">
                {dataToDisplay ? (
                    <div>
                        <h4> All Variants </h4>
                        {dataToDisplay.total ? (
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    paddingTop: '10px',
                                    flexFlow: 'wrap',
                                    backgroundColor: 'white',
                                }}
                            >
                                {dataToDisplay.total.confirmed && (
                                    <div className="childDiv">
                                        <h3 style={{ color: 'orange' }}>
                                            {dataToDisplay.total.confirmed.toLocaleString()}
                                        </h3>
                                        <label>Confirmed</label>
                                    </div>
                                )}
                                {dataToDisplay.total.deceased && (
                                    <div className="childDiv">
                                        <h3 style={{ color: 'green' }}>
                                            {dataToDisplay.total.deceased.toLocaleString()}
                                        </h3>
                                        <label>Deceased</label>
                                    </div>
                                )}
                                {dataToDisplay.total.recovered && (
                                    <div className="childDiv">
                                        <h3 style={{ color: 'darkgreen' }}>
                                            {dataToDisplay.total.recovered.toLocaleString()}
                                        </h3>
                                        <label>Recovered</label>
                                    </div>
                                )}
                                {dataToDisplay.total.tested && (
                                    <div className="childDiv">
                                        <h3 style={{ color: 'blue' }}>
                                            {dataToDisplay.total.tested.toLocaleString()}
                                        </h3>
                                        <label>Tested</label>
                                    </div>
                                )}
                                {dataToDisplay.total.vaccinated1 && (
                                    <div className="childDiv">
                                        <h3 style={{ color: 'darkgreen' }}>
                                            {dataToDisplay.total.vaccinated1.toLocaleString()}
                                        </h3>
                                        <label>Vaccinated Dose 1</label>
                                    </div>
                                )}
                                {dataToDisplay.total.vaccinated2 && (
                                    <div className="childDiv">
                                        <h3 style={{ color: 'darkgreen' }}>
                                            {dataToDisplay.total.vaccinated2.toLocaleString()}
                                        </h3>
                                        <label>Vaccinated Dose 2</label>
                                    </div>
                                )}
                            </div>
                        ) : null}

                        <hr style={{ color: 'grey' }} />

                        <div style={{ display: 'block', paddingTop: '10px' }}>
                            <Button
                                color="link"
                                style={{ margin: '5px', color: 'blue' }}
                                onClick={this.showDelta7DataClickHandler}
                            >
                                {' '}
                                Delta 7{' '}
                            </Button>
                            <Button
                                color="link"
                                style={{ margin: '5px', color: 'blue' }}
                                onClick={this.showDelta21DataClickHandler}
                            >
                                {' '}
                                Delta 21{' '}
                            </Button>
                        </div>

                        {dataToDisplay.delta7 && showDelta7Data && (
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    padding: '10px',
                                    flexFlow: 'wrap',
                                    backgroundColor: 'white',
                                }}
                            >
                                {dataToDisplay.delta7.confirmed && (
                                    <div className="childDiv">
                                        <h3 style={{ color: 'orange' }}>
                                            {dataToDisplay.delta7.confirmed.toLocaleString()}
                                        </h3>
                                        <label>Confirmed</label>
                                    </div>
                                )}
                                {dataToDisplay.delta7.recovered && (
                                    <div className="childDiv">
                                        <h3 style={{ color: 'darkgreen' }}>
                                            {dataToDisplay.delta7.recovered.toLocaleString()}
                                        </h3>
                                        <label>Recovered</label>
                                    </div>
                                )}
                                {dataToDisplay.delta7.vaccinated1 && (
                                    <div className="childDiv">
                                        <h3 style={{ color: 'darkgreen' }}>
                                            {dataToDisplay.delta7.vaccinated1.toLocaleString()}
                                        </h3>
                                        <label>Vaccinated Dose 1</label>
                                    </div>
                                )}
                                {dataToDisplay.delta7.vaccinated2 && (
                                    <div className="childDiv">
                                        <h3 style={{ color: 'darkgreen' }}>
                                            {dataToDisplay.delta7.vaccinated2.toLocaleString()}
                                        </h3>
                                        <label>Vaccinated Dose 2</label>
                                    </div>
                                )}
                            </div>
                        )}

                        {!dataToDisplay.delta7 && showDelta7Data && (
                            <div className="childDiv">
                                <p
                                    style={{
                                        textAlign: 'center',
                                        fontSize: '15px',
                                        color: 'red',
                                    }}
                                >
                                    No Data Present{' '}
                                </p>
                            </div>
                        )}

                        {dataToDisplay.delta21_14 && showDelta21Data && (
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'start',
                                    paddingTop: '10px',
                                    paddingLeft: '20px',
                                    flexFlow: 'wrap',
                                    backgroundColor: 'white',
                                }}
                            >
                                {dataToDisplay.delta21_14.confirmed && (
                                    <div className="childDiv">
                                        <h3 style={{ color: 'orange' }}>
                                            {dataToDisplay.delta21_14.confirmed.toLocaleString()}
                                        </h3>
                                        <label>Confirmed</label>
                                    </div>
                                )}
                            </div>
                        )}

                        {!dataToDisplay.delta21_14 && showDelta21Data && (
                            <div className="childDiv">
                                <p
                                    style={{
                                        textAlign: 'center',
                                        fontSize: '15px',
                                        color: 'red',
                                    }}
                                >
                                    No Data Present{' '}
                                </p>
                            </div>
                        )}
                        <hr style={{ color: 'grey' }} />
                    </div>
                ) : null}
            </div>
        );
    }
}
