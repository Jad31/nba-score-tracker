import { createReducer } from '@ngrx/store';
import { dashboardState } from './index.state';

export const dashboardReducer = createReducer(dashboardState.initial);
