import { fetchReports, resolveMessage, blockMessage } from './reports';
import { ActionTypes } from './types';
import moxios from 'moxios';
import { store } from '../utils/mockStore';

describe('reports async actions', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('creates fetchReports when fetching reports has been done', () => {
        const mockResponse = {
            size: 25,
            nextOffset: '',
            elements: [],
        };

        const expectedActions = [
            {
                type: ActionTypes.fetchReports,
                payload: mockResponse,
            },
        ];

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: mockResponse,
            });
        });

        return store.dispatch<any>(fetchReports()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates blockMessage when blocking a message has been done', () => {
        const mockResponse = {
            size: 25,
            nextOffset: '',
            elements: [],
        };
        const mockId = '1';

        const expectedActions = [
            {
                type: ActionTypes.fetchReports,
                payload: mockResponse,
            },
            {
                type: ActionTypes.blockMessage,
                payload: mockId,
            },
        ];
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
            });
        });

        return store.dispatch<any>(blockMessage(mockId)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it('creates resolveMessage when resolving a message has been done', () => {
        const mockResponse = {
            size: 25,
            nextOffset: '',
            elements: [],
        };
        const mockId = '1';

        const expectedActions = [
            {
                type: ActionTypes.fetchReports,
                payload: mockResponse,
            },
            {
                type: ActionTypes.blockMessage,
                payload: mockId,
            },
            {
                type: ActionTypes.resolveMessage,
                payload: mockId,
            },
        ];
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
            });
        });

        return store.dispatch<any>(resolveMessage(mockId)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
