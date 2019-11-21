import {
    FetchReportsAction,
    BlockMessageAction,
    ResolveMessageAction,
} from './reports';

export enum ActionTypes {
    fetchReports,
    blockMessage,
    resolveMessage,
}

export type Action =
    | FetchReportsAction
    | BlockMessageAction
    | ResolveMessageAction;
