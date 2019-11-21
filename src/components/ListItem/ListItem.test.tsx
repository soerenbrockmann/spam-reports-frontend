import React from 'react';
import renderer from 'react-test-renderer';
import { ListItem } from './ListItem';

describe('<ListItem>', () => {
    it('renders correctly', () => {
        const listItemProps = {
            id: 'dummyId',
            state: 'dummyState',
            reportType: 'dummyReportType',
            message: 'dummyMessage',
            onBlockClick: jest.fn,
            onResolveClick: jest.fn,
        };
        const component = renderer.create(<ListItem {...listItemProps} />);
        expect(component).toMatchSnapshot();
    });
});
