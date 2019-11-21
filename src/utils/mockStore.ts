import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

export const store = mockStore({
    reports: { size: 25, nextOffset: '', elements: [] },
});
