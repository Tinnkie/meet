import React, { Component } from "react";

class Event extends Component {
  render() {
    const { event } = this.props;
    return (
        <div className='event'>
        <h2 className='summary'>{event.summary}</h2>
        <p className="event-start">
            {new Date(event.start.dateTime).toString()}
        </p>
        <p className="event-location">
            {`@${event.summary} | ${event.location}`}
        </p>

        </div>
    
    );
  }
}
export default Event;