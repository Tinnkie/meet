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

    test('summary is rendered correctly in a h2 tag', () => {
        const summary = EventWrapper.find('h2.summary');
        expect(summary).toHaveLength(1);
        expect(summary.text()).toBe(event.summary);
    });


});