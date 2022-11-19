// Import React Stuff
import * as React from 'react';

// Import Components
import DashboardNavbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';

// Props
interface AppProps {}

// States
interface AppStates {
  data: [''];
  dataFetched: boolean;
  error: string | undefined;
}

export default class App extends React.Component<AppProps, AppStates> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      data: [''],
      dataFetched: false,
      error: undefined,
    };
  }

  componentDidMount() {
    // Fetching JSON data from API
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

    console.log('App Component Mounted');
  }

  render() {
    const { data, dataFetched, error } = this.state;

    return (
        <div>
          {/* If there is an error, show error text */}
          {error && <p> There is an error while fetching data </p>}

          {/* If data is being fetched, show loading text */}
          {!dataFetched && <p> Loading... </p>}

          {/* If data is fetched, render the Navbar and SearchBar components*/}
          {dataFetched && (
              <div>
                <DashboardNavbar />
                <SearchBar data={data} />
              </div>
          )}
        </div>
    );
  }
}
