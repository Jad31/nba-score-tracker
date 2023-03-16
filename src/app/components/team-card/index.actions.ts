import { createAction, props } from '@ngrx/store';
import { TeamCardRemoveButtonClickedCfgs } from './index.actions.types';

export const µTeamCardRemoveButtonClicked = createAction(
  '[TeamCardComponent] remove button clicked',
  props<{ cfgs: TeamCardRemoveButtonClickedCfgs }>()
);
