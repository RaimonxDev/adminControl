import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { Tag, Task, TasksCount } from 'app/modules/admin/apps/tasks/tasks.type';

@Injectable({
    providedIn: 'root'
})
export class TasksService
{
    // Observables
    private _tags: BehaviorSubject<Tag[] | null>;
    private _task: BehaviorSubject<Task | null>;
    private _tasks: BehaviorSubject<Task[] | null>;
    private _tasksCount: BehaviorSubject<TasksCount | null>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the private defaults
        this._tags = new BehaviorSubject(null);
        this._task = new BehaviorSubject(null);
        this._tasks = new BehaviorSubject(null);
        this._tasksCount = new BehaviorSubject(null);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for tags
     */
    get tags$(): Observable<any>
    {
        return this._tags.asObservable();
    }

    /**
     * Getter for task
     */
    get task$(): Observable<any>
    {
        return this._task.asObservable();
    }

    /**
     * Getter for tasks
     */
    get tasks$(): Observable<any>
    {
        return this._tasks.asObservable();
    }

    /**
     * Getter for tasks count
     */
    get tasksCount$(): Observable<any>
    {
        return this._tasksCount.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get tags
     */
    getTags(): Observable<Tag[]>
    {
        return this._httpClient
                   .get<Tag[]>('api/apps/tasks/tags')
                   .pipe(tap((response: any) => {
                       this._tags.next(response);
                   }));
    }

    /**
     * Crate tag
     *
     * @param tag
     */
    createTag(tag): Observable<Tag>
    {
        return this._httpClient
                   .put<Tag>('api/apps/tasks/tag', {tag})
                   .pipe(map((response) => {
                       this.getTags().subscribe();
                       return response;
                   }));
    }

    /**
     * Update tag
     *
     * @param id
     * @param tag
     */
    updateTag(id, tag): Observable<Tag>
    {
        return this._httpClient
                   .patch<Tag>('api/apps/tasks/tag', {
                       id,
                       tag
                   })
                   .pipe(map((response) => {
                       this.getTags().subscribe();
                       return response;
                   }));
    }

    /**
     * Get tasks
     */
    getTasks(): Observable<Task[]>
    {
        return this._httpClient
                   .get<Task[]>('api/apps/tasks/all')
                   .pipe(tap((response: any) => {
                       this._tasks.next(response);
                   }));
    }

    /**
     * Get tasks count
     */
    getTasksCount(): Observable<TasksCount>
    {
        return this._httpClient
                   .get<TasksCount>('api/apps/tasks/count')
                   .pipe(tap((response: any) => {
                       this._tasksCount.next(response);
                   }));
    }

    /**
     * Get task by id
     */
    getTaskById(id): Observable<Task>
    {
        // Get the task from tasks
        const taskItem = this._tasks.getValue().find(item => item.id === id);

        // If the task is already loaded...
        if ( taskItem.loadedCompletely )
        {
            // Update the task
            this._task.next(taskItem);

            // Return the task
            return of(taskItem);
        }

        // If the task is not loaded...
        return this._httpClient
                   .get<Task>('api/apps/tasks/task', {params: {id}})
                   .pipe(
                       map((response: any) => {

                           // Get the tasks
                           const tasks = this._tasks.getValue();

                           // Iterate through the tasks
                           tasks.forEach((task, index, array) => {

                               // Update the task
                               if ( task.id === response.id )
                               {
                                   array[index] = response;
                               }
                           });

                           // Execute the observable
                           this._tasks.next(tasks);
                       }),
                       switchMap(() => {
                           return this._tasks;
                       }),
                       map((tasks) => {

                           // Find the task
                           const task = tasks.find(item => item.id === id);

                           if ( task )
                           {
                               this._task.next(task);
                           }
                           else
                           {
                               this._task.next(null);
                           }

                           return task;
                       }),
                       switchMap((task) => {

                           if ( !task )
                           {
                               return throwError('Could not found task with id of ' + id + '!');
                           }

                           return of(task);
                       }),
                       take(1)
                   );
    }

    /**
     * Update task
     *
     * @param id
     * @param task
     */
    updateTask(id, task): Observable<Task>
    {
        return this._httpClient
                   .patch<Task>('api/apps/tasks/task', {
                       id,
                       task
                   })
                   .pipe(
                       tap((response: any) => {

                           // Get the tasks
                           const tasks = this._tasks.getValue();

                           // Iterate through the tasks
                           tasks.forEach((item, index, array) => {

                               // Update the task
                               if ( item.id === response.id )
                               {
                                   array[index] = response;
                               }
                           });

                           // Execute the observables
                           this._tasks.next(tasks);
                       }),
                       switchMap(() => {

                           // Get the updated task
                           return this.getTaskById(id);
                       })
                   );
    }

    /**
     * Update tasks orders
     *
     * @param tasks
     */
    updateTasksOrders(tasks): Observable<Task[]>
    {
        return this._httpClient
                   .patch<Task[]>('api/apps/tasks/order', {
                       tasks
                   });
    }
}
