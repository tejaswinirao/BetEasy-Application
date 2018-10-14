import React, { Component } from 'react';
import './App.css';

const Header = ({ title }) => (<header>{title}</header>);
const Main = ({ title }) => (<main>{title}</main>);
const Footer = ({ title }) => (<footer>{title}</footer>);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('https://s3-ap-southeast-2.amazonaws.com/bet-easy-code-challenge/next-to-jump')
      .then(result => result.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading</div>
    }
    else {
      return (
        <div className="App">
          <ul>	        {
            items.result.map(item => (
              <li >
                <b>Event Name:</b> {item.EventName} |
                <b>Event Venue:</b> {item.Venue.Venue} |
                <b>Time of Event Start:</b> {item.AdvertisedStartTime}
              </li>
            ))};
	      </ul>

        </div>
      );
    }
  }
}

export default App;
