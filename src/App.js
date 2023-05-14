import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    selectedLocation: 'all',
    numberOfEvents: 32,
    showWelcomeScreen: undefined
  };

  render() {
    return (
      <div className='App'>
        <CitySearch locations={this.state.locations} />
        <EventList events={this.state.events} />
        <NumberOfEvents />
      </div>
    );
  }
}

updateEvents = (location) => {
  getEvents().then((events) => {
    const locationEvents = events.filter((event) => event.location === location);
    this.setState({
      events: locationEvents
    });
  });
}

export default App;
