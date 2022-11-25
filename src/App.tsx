// Import React Stuff
import * as React from 'react';
// @ts-ignore
import { Helmet } from 'react-helmet';
import { Button } from 'reactstrap';

// Import Components
import DashboardNavbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';

// Props
interface AppProps {}

// States
interface AppStates {
  data: [''];
  dataFetched: boolean;
  darkMode: boolean;
  error: string | undefined;
}

export default class App extends React.Component<AppProps, AppStates> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      data: [''],
      dataFetched: false,
      darkMode: false,
      error: undefined,
    };

    this.darkModeToggle = this.darkModeToggle.bind(this);
  }

  componentDidMount() {
    // Fetching JSON data from local file
    try {
      fetch('https://data.covid19india.org/v4/min/data.min.json')
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              data: json,
              dataFetched: true,
              error: undefined,
            });
          });
    } catch (error) {
      console.error(error);
      this.setState({
        data: [''],
        dataFetched: false,
        error: 'error',
      });
    }
  }

  darkModeToggle() {
    const { darkMode } = this.state;
    this.setState({
      darkMode: !darkMode,
    });
  }

  render() {
    const { data, dataFetched, darkMode, error } = this.state;

    return (
        <div>
          {/* If data is fetched, render the Navbar and SearchBar components*/}

          {error && <p> There is an error while fetching data </p>}

          {!dataFetched && <p> Loading... </p>}

          {dataFetched && (
              <div>
                <Helmet>
                  <style>
                    {darkMode
                        ? 'body { background-color: black}'
                        : 'body { background-color: white}'}
                  </style>
                </Helmet>
                <DashboardNavbar darkMode={darkMode} />
                <Button
                    color={darkMode ? 'light' : 'dark'}
                    onClick={this.darkModeToggle}
                    style={{
                      position: 'absolute',
                      top: '5px',
                      right: '10px',
                      padding: '3px',
                      borderRadius: '3px',
                      fontSize: '12px',
                    }}
                >
                  {!darkMode ? 'Dark Mode' : 'Light Mode'}
                </Button>
                <SearchBar data={data} darkMode={darkMode} />
              </div>
          )}
        </div>
    );
  }
}
