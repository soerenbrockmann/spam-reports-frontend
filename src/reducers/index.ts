import { combineReducers } from 'redux';
import { reportsReducer } from './reports';
import { Report } from '../actions';

export interface StoreState {
    reports: Report;
}

export const reducers = combineReducers<StoreState>({
    reports: reportsReducer,
});
