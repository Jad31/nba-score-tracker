import { createReducer } from '@ngrx/store';
import { teamCardState } from './index.state';

export const teamCardReducer = createReducer(teamCardState.initial);
