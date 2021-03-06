import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

// import ajax from './utils/ajax';
import secrets from './utils/secrets';

import Navbar from './components/Navbar';
import AsideNav from './components/AsideNav';
import ChannelSection from './components/ChannelSection';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: [],
      streams: []
    };
  }
  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'https://api.twitch.tv/kraken/channels/freecodecamp',
      headers: {
        'Client-ID': secrets.id.CLIENT_ID
      },
      success: (data) => {
        console.log(data);
        this.setState({channel: data});
        console.log('after state: ', this.state);
      }
     });

     $.ajax({
      type: 'GET',
      url: 'https://api.twitch.tv/kraken/streams',
      headers: {
        'Client-ID': secrets.id.CLIENT_ID
      },
      success: (data) => {
        console.log(data);
        this.setState({streams: data.streams});
        console.log('after state streams: ', this.state);
      }
     });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="columns">
          <AsideNav />
          <ChannelSection info={this.state.channel}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
