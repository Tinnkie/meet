import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> component', () => {
    
    test('renders the component', () => {
        const EventWrapper = shallow(<Event events={mockData} />);
        expect(EventWrapper).toBeDefined();
      });


});