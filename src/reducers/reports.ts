import { Report, Action, ActionTypes } from '../actions';
import { Element } from '../actions/reports';

export const initialState: Report = {
    size: 0,
    elements: [],
    nextOffset: '',
};

enum Filter {
    SPAM = 'SPAM',
}

enum State {
    OPEN = 'OPEN',
}

export const reportsReducer = (state = initialState, action: Action) => {
    const filterById = () =>
        state.elements.filter(
            (report: Element) => report.id !== action.payload
        );
    const reduceSize = () => state.size - 1;

    switch (action.type) {
        case ActionTypes.fetchReports: {
            const elements = action.payload.elements.filter(
                (element: Element) =>
                    element.payload.reportType === Filter.SPAM &&
                    element.state === State.OPEN
            );
            const size = elements.length;
            return {
                ...state,
                elements,
                size,
            };
        }
        case ActionTypes.blockMessage:
            return {
                ...state,
                size: reduceSize(),
                elements: filterById(),
            };
        case ActionTypes.resolveMessage:
            return {
                ...state,
                size: reduceSize(),
                elements: filterById(),
            };
        default:
            return state;
    }
};
