import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, mapTo, switchMap, take, tap } from 'rxjs/operators';
import { Tag, Task } from 'app/modules/admin/apps/tasks/tasks.type';

@Injectable({
    providedIn: 'root'
})
export class TasksService
{
    // Private
    private _tags: BehaviorSubject<Tag[] | null>;
    private _task: BehaviorSubject<Task | null>;
    private _tasks: BehaviorSubject<Task[] | null>;

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
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for tags
     */
    get tags$(): Observable<Tag[]>
    {
        return this._tags.asObservable();
    }

    /**
     * Getter for task
     */
    get task$(): Observable<Task>
    {
        return this._task.asObservable();
    }

    /**
     * Getter for tasks
     */
    get tasks$(): Observable<Task[]>
    {
        return this._tasks.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get tags
     */
    getTags(): Observable<Tag[]>
    {
        return this._httpClient.get<Tag[]>('api/apps/tasks/tags').pipe(
            tap((response: any) => {
                this._tags.next(response);
            })
        );
    }

    /**
     * Crate tag
     *
     * @param tag
     */
    createTag(tag): Observable<Tag>
    {
        return this.tags$.pipe(
            take(1),
            switchMap(tags => this._httpClient.put<Tag>('api/apps/tasks/tag', {tag}).pipe(
                map((newTag) => {

                    // Update the tags with the new tag
                    this._tags.next([...tags, newTag]);

                    // Return new tag from observable
                    return newTag;
                })
            ))
        );
    }

    /**
     * Update tag
     *
     * @param id
     * @param tag
     */
    updateTag(id, tag): Observable<Tag>
    {
        return this._httpClient.patch<Tag>('api/apps/tasks/tag', {
            id,
            tag
        }).pipe(switchMap((response) => {
            return this.getTags().pipe(mapTo(response));
        }));
    }

    /**
     * Get tasks
     */
    getTasks(): Observable<Task[]>
    {
        return this._httpClient.get<Task[]>('api/apps/tasks/all').pipe(
            tap((response: any) => {
                this._tasks.next(response);
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
        return this._httpClient.patch<Task[]>('api/apps/tasks/order', {tasks});
    }

    /**
     * Search tasks with given query
     *
     * @param query
     */
    searchTasks(query): Observable<Task[] | null>
    {
        return this._httpClient.get<Task[] | null>('api/apps/tasks/search', {params: {query}});
    }

    /**
     * Get task by id from tasks
     */
    getTaskById(id): Observable<Task>
    {
        // Get the task from tasks
        const taskItem = this._tasks.getValue().find(item => item.id === id);

        // Update the task
        this._task.next(taskItem);

        // Return the task
        return of(taskItem);
    }

    /**
     * Create task
     *
     * @param task
     */
    createTask(task): Observable<Task>
    {
        return this._httpClient
                   .put<Task>('api/apps/tasks', {task})
                   .pipe(
                       map((id) => {
                           this.getTasks().subscribe();
                           return id;
                       }),
                       switchMap((id) => {
                           return this.getTaskById(id);
                       })
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
        return this.tasks$.pipe(
            take(1),
            switchMap(tasks => this._httpClient.patch<Task>('api/apps/tasks/task', {
                id,
                task
            }).pipe(
                map((updatedTask) => {

                    // Find the index of the updated task within the labels
                    const index = tasks.findIndex(item => item.id === id);

                    // Update the task
                    tasks[index] = updatedTask;

                    // Update the tasks
                    this._tasks.next(tasks);

                    // Update the task if it's selected
                    if ( this._task.getValue() && this._task.getValue().id === task.id )
                    {
                        this._task.next(updatedTask);
                    }

                    // Return the updated task
                    return updatedTask;
                })
            ))
        );
    }

    /**
     * Delete the task
     *
     * @param id
     */
    deleteTask(id): Observable<boolean>
    {
        return this.tasks$.pipe(
            take(1),
            switchMap(tasks => this._httpClient.delete('api/apps/tasks/task', {params: {id}}).pipe(
                map((isDeleted: boolean) => {

                    // Find the index of the deleted task within the tasks
                    const index = tasks.findIndex(item => item.id === id);

                    // Delete the task
                    tasks.splice(index, 1);

                    // Update the tasks
                    this._tasks.next(tasks);

                    // Return the deleted status
                    return isDeleted;
                })
            ))
        );
    }

    /**
     * Reset the selected task
     */
    resetSelectedTask(): void
    {
        this._task.next(null);
    }
}
