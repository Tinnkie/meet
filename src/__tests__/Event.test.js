import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> component', () => {
    let EventWrapper;
    const event = mockData[0];
    beforeAll(() => {
        EventWrapper = shallow(<Event event={event} />);
    })

    test('renders the component', () => {
        expect(EventWrapper).toBeDefined();
      });


});