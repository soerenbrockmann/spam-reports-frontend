import { reportsReducer, initialState } from './reports';
import { ActionTypes } from '../actions';

describe('reports reducer', () => {
    const mockElement = {
        id: '1',
        source: '',
        sourceIdentityId: '',
        reference: {
            referenceId: '',
            referenceType: '',
        },
        state: 'OPEN',
        payload: {
            source: '',
            reportType: 'SPAM',
            message: '',
            reportId: '',
            referenceResourceId: '',
            referenceResourceType: '',
        },
        created: '',
    };

    const mockReports = {
        size: 1,
        elements: [mockElement],
        nextOffset: '',
    };
    it('should return the initial state', () => {
        expect(
            reportsReducer(undefined, {
                type: 3,
                payload: '',
            })
        ).toEqual(initialState);
    });

    it('should handle fetchReports', () => {
        const state = { ...initialState };
        expect(
            reportsReducer(state, {
                type: ActionTypes.fetchReports,
                payload: mockReports,
            })
        ).toEqual({ ...mockReports });
    });

    it('should handle block message', () => {
        const state = { ...initialState };
        state.size = 1;
        state.elements.push(mockElement);
        expect(
            reportsReducer(state, {
                type: ActionTypes.blockMessage,
                payload: '1',
            })
        ).toEqual({ ...state, size: state.size - 1, elements: [] });
    });

    it('should handle resolve message', () => {
        const state = { ...initialState };
        state.size = 1;
        state.elements.push(mockElement);
        expect(
            reportsReducer(state, {
                type: ActionTypes.resolveMessage,
                payload: '1',
            })
        ).toEqual({ ...state, size: state.size - 1, elements: [] });
    });
});
