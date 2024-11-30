import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { TaskResponse, TasksApiResponse } from '../../shared/models/api-response.model';
import { computed, inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { pipe, switchMap, tap } from 'rxjs';
import { GET_TASKS } from '../../shared/queries/get-tasks.query';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { Status } from '../../shared/models/types';
import { Task } from '../../shared/models/task.model';

type TasksState = {
  tasks: TaskResponse[];
  tasksByStatus?: { title: string; items: TaskResponse[] }[];
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

const setErrors = (errors: string[]): Partial<TasksState> => {
  return { errors };
};

interface Error {
  message: string;
}

export const TasksStore = signalStore(
  withState(initialState),
  withComputed(({ tasks }) => ({
    tasksByStatus: computed(() => {
      const foundLanes: Record<Status, TaskResponse[]> = {
        BACKLOG: [],
        TODO: [],
        IN_PROGRESS: [],
        DONE: [],
        CANCELLED: [],
      };

      tasks().forEach((task) => {
        foundLanes[task.status] = [...foundLanes[task.status], task];
      });

      return Object.entries(foundLanes)
        .map(([key, value]) => {
          return { title: key, items: value };
        })
        .filter((lane) => lane.items.length);
    }),
  })),
  withMethods((store) => {
    const apollo = inject(Apollo);
    return {
      loadAll: rxMethod<void>(
        pipe(
          tap(() => patchState(store, setLoading())),
          switchMap(() => apollo.query<TasksApiResponse>({ query: GET_TASKS })),
          tapResponse({
            next: ({ data }) => patchState(store, { tasks: data.tasks, isLoading: false }),
            error: (errors: Error | Error[]) => {
              let errorList: Error[];
              if (Array.isArray(errors)) {
                errorList = errors;
              } else {
                errorList = [errors];
              }
              return patchState(store, setErrors(errorList.map((e) => e.message)));
            },
          })
        )
      ),
      saveTask: rxMethod<{ task: Partial<Task> }>(
        pipe(
          tap(() => patchState(store, setLoading())),
          switchMap(({ task }) => apollo.mutate({ mutation: GET_TASKS, variables: { task } })),
          tapResponse({
            next: () => patchState(store, { ...store.tasks(), isLoading: false }),
            error: (errors: Error | Error[]) => {
              let errorList: Error[];
              if (Array.isArray(errors)) {
                errorList = errors;
              } else {
                errorList = [errors];
              }
              return patchState(store, setErrors(errorList.map((e) => e.message)));
            },
          })
        )
      ),
    };
  }),
  withHooks(({ loadAll }) => ({
    onInit: () => loadAll(),
  }))
);
