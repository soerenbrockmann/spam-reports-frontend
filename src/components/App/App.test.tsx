import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { App } from './App';
import { store } from '../../utils/mockStore';

describe('<App>', () => {
    it.only('renders correctly', () => {
        const component = renderer.create(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
});
