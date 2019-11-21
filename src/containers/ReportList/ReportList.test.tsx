import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { ReportList } from './ReportList';
import { store } from '../../utils/mockStore';

describe('<ReportList>', () => {
    it('renders without crashing', () => {
        const component = renderer.create(
            <Provider store={store}>
                <ReportList />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
});
