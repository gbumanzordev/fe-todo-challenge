import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { TaskResponse, TasksApiResponse } from '../../shared/models/api-response.model';
import { inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { pipe, switchMap, tap } from 'rxjs';
import { GET_TASKS } from '../../shared/queries/get-tasks.query';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';

type TasksState = {
  tasks: TaskResponse[];
  isLoading: boolean;
  errors: string[];
};

const initialState: TasksState = {
  tasks: [],
  isLoading: false,
  errors: [],
};

const setLoading = (): Partial<TasksState> => {
  return { isLoading: true };
};

const setLoaded = (): Partial<TasksState> => {
  return { isLoading: false };
};

const setErrors = (errors: string[]): Partial<TasksState> => {
  return { errors };
};

export const TasksStore = signalStore(
  withState(initialState),
  withMethods((store) => {
    const apollo = inject(Apollo);
    return {
      loadAll: rxMethod<void>(
        pipe(
          tap(() => patchState(store, setLoading())),
          switchMap(() => apollo.query<TasksApiResponse>({ query: GET_TASKS })),
          tapResponse({
            next: ({ data }) => patchState(store, { tasks: data.tasks }),
            error: (errors: any[]) => patchState(store, setErrors(errors.map((e) => e.message))),
            finalize: () => patchState(store, setLoaded()),
          })
        )
      ),
    };
  }),
  withHooks(({ loadAll }) => ({
    onInit: () => loadAll(),
  }))
);
