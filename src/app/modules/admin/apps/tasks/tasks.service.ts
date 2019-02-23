import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TasksService
{
    // Observables
    private _members: BehaviorSubject<any>;
    private _tags: BehaviorSubject<any>;
    private _task: BehaviorSubject<any>;
    private _tasks: BehaviorSubject<any>;
    private _tasksCount: BehaviorSubject<any>;

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
        this._members = new BehaviorSubject(null);
        this._tags = new BehaviorSubject(null);
        this._task = new BehaviorSubject(null);
        this._tasks = new BehaviorSubject(null);
        this._tasksCount = new BehaviorSubject(null);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for members
     */
    get members$(): Observable<any>
    {
        return this._members.asObservable();
    }

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
     * Get members
     */
    getMembers(): Observable<any>
    {
        return this._httpClient
                   .get('api/apps/tasks/members')
                   .pipe(tap((response: any) => {
                       this._members.next(response);
                   }));
    }

    /**
     * Get tags
     */
    getTags(): Observable<any>
    {
        return this._httpClient
                   .get('api/apps/tasks/tags')
                   .pipe(tap((response: any) => {
                       this._tags.next(response);
                   }));
    }

    /**
     * Crate tag
     *
     * @param tag
     */
    createTag(tag): Observable<any>
    {
        return this._httpClient
                   .put('api/apps/tasks/tag', {tag})
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
    updateTag(id, tag): Observable<any>
    {
        return this._httpClient
                   .patch('api/apps/tasks/tag', {
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
    getTasks(): Observable<any>
    {
        return this._httpClient
                   .get('api/apps/tasks/all')
                   .pipe(tap((response: any) => {
                       this._tasks.next(response);
                   }));
    }

    /**
     * Get tasks count
     */
    getTasksCount(): Observable<any>
    {
        return this._httpClient
                   .get('api/apps/tasks/count')
                   .pipe(tap((response: any) => {
                       this._tasksCount.next(response);
                   }));
    }

    /**
     * Get task by id
     */
    getTaskById(id): Observable<any>
    {
        // Get the task from tasks
        const taskItem = this._tasks.getValue().find(item => item.id === id);

        // If the task is already loaded...
        if ( taskItem.loadedCompletely )
        {
            // Update the task
            this._task.next(taskItem);

            return of(true);
        }

        // If the task is not loaded...
        return this._httpClient
                   .get('api/apps/tasks/task', {params: {id}})
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
    updateTask(id, task): Observable<any>
    {
        return this._httpClient
                   .patch('api/apps/tasks/task', {
                       id,
                       task
                   });
    }
}
