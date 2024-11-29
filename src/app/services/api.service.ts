import { inject, Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable, of } from 'rxjs';

import { GET_TASKS } from '../shared/queries/get-tasks.query';
import { TasksApiResponse } from '../shared/models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apollo: Apollo = inject(Apollo);

  getTasks(): Observable<TasksApiResponse> {
    return of({} as TasksApiResponse);
    // return this.apollo
    //   .query<TasksApiResponse>({
    //     query: GET_TASKS,
    //   })
    //   .pipe(map((response) => response.data));
  }
}
