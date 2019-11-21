import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Report {
    size: number;
    nextOffset: string;
    elements: Element[];
}

export interface Element {
    id: string;
    source: string;
    sourceIdentityId: string;
    reference: {
        referenceId: string;
        referenceType: string;
    };
    state: string;
    payload: {
        source: string;
        reportType: string;
        message: string;
        reportId: string;
        referenceResourceId: string;
        referenceResourceType: string;
    };
    created: string;
}

export interface FetchReportsAction {
    type: ActionTypes.fetchReports;
    payload: Report;
}

export interface BlockMessageAction {
    type: ActionTypes.blockMessage;
    payload: string;
}

export interface ResolveMessageAction {
    type: ActionTypes.resolveMessage;
    payload: string;
}

enum States {
    CLOSED = 'CLOSED',
}

export const url = 'http://localhost:3001/reports';

export const fetchReports = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Report>(url);
        dispatch<FetchReportsAction>({
            type: ActionTypes.fetchReports,
            payload: response.data,
        });
    };
};

export const blockMessage = (id: string) => {
    return async (dispatch: Dispatch) => {
        try {
            await axios.delete<string>(`${url}/${id}`);
            dispatch<BlockMessageAction>({
                type: ActionTypes.blockMessage,
                payload: id,
            });
        } catch (error) {
            throw new Error(error);
        }
    };
};

export const resolveMessage = (id: string) => {
    return async (dispatch: Dispatch) => {
        try {
            await axios.put<string>(`${url}/${id}`, {
                ticketState: States.CLOSED,
            });
            dispatch<ResolveMessageAction>({
                type: ActionTypes.resolveMessage,
                payload: id,
            });
        } catch (error) {
            throw new Error(error);
        }
    };
};
