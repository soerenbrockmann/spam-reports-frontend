import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from './Button';

describe('<Button>', () => {
    it('renders correctly', () => {
        const buttonProps = {
            id: 'dummyId',
            name: 'dummyName',
            clickHandler: jest.fn,
        };
        const component = renderer.create(<Button {...buttonProps} />);
        expect(component).toMatchSnapshot();
    });
});
