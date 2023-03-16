import { createFeatureSelector } from '@ngrx/store';
import { TeamCardState } from './index.state';

export const $teamCard = createFeatureSelector<TeamCardState>('teamCard');
