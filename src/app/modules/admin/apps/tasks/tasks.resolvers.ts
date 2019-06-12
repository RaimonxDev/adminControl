import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TasksService } from 'app/modules/admin/apps/tasks/tasks.service';
import { Tag, Task } from 'app/modules/admin/apps/tasks/tasks.type';

@Injectable({
    providedIn: 'root'
})
export class TasksTagsResolver implements Resolve<any>
{
    /**
     * Constructor
     *
     * @param {TasksService} _tasksService
     */
    constructor(
        private _tasksService: TasksService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tag[]> | Promise<Tag[]> | Tag[]
    {
        return this._tasksService.getTags();
    }
}

@Injectable({
    providedIn: 'root'
})
export class TasksResolver implements Resolve<any>
{
    /**
     * Constructor
     *
     * @param {TasksService} _tasksService
     */
    constructor(
        private _tasksService: TasksService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task[]> | Promise<Task[]> | Task[]
    {
        return this._tasksService.getTasks();
    }
}

@Injectable({
    providedIn: 'root'
})
export class TasksTaskResolver implements Resolve<any>
{
    /**
     * Constructor
     *
     * @param {Router} _router
     * @param {TasksService} _tasksService
     */
    constructor(
        private _router: Router,
        private _tasksService: TasksService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task> | Promise<Task> | Task
    {
        return this._tasksService.getTaskById(route.paramMap.get('id'))
                   .pipe(
                       // Error here means the requested task is not available
                       catchError((error) => {

                           // Log the error
                           console.error(error);

                           // Get the parent url
                           const parentUrl = state.url.split('/').slice(0, -1).join('/');

                           // Navigate to there
                           this._router.navigateByUrl(parentUrl);

                           // Throw an error
                           return throwError(error);
                       })
                   );
    }
}
