import { RootState } from '../root-state';
import { actionLogger } from '../../util/action-logger';
import { environment } from '../../../environments/environment';
import { ActionReducer } from '@ngrx/store/src/models';

export const actionLoggerReducer = (
  reducer: ActionReducer<any, any>,
): ActionReducer<any, any> => {
  return (state: RootState, action: any) => {
    if (environment.production) {
      console.log(action.type, (action as any)?.payload || action);
    }
    actionLogger(action);
    return reducer(state, action);
  };
};
