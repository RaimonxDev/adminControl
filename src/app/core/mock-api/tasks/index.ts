import { Injectable } from '@angular/core';
import { AsmMockApiService } from '@assembly';
import * as _ from 'lodash';

import { mockWithAuth } from 'app/core/mock-api/with-auth';
import { members as membersData, tags as tagsData, tasks as tasksData } from 'app/core/mock-api/tasks/data';

@Injectable({
    providedIn: 'root'
})
export class MockTasksApi
{
    // Private Readonly
    private _members: any;
    private _tags: any;
    private _tasks: any[];

    /**
     * Constructor
     *
     * @param {AsmMockApiService} _asmMockApiService
     */
    constructor(
        private _asmMockApiService: AsmMockApiService
    )
    {
        // Set the data
        this._members = membersData;
        this._tags = tagsData;
        this._tasks = tasksData;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     */
    init(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Members - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/tasks/members')
            .reply(() => {

                return [
                    200,
                    _.cloneDeep(this._members)
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Tags - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/tasks/tags')
            .reply(() => {

                return [
                    200,
                    _.cloneDeep(this._tags)
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Tasks - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/tasks/all')
            .reply(() => {

                // Clone the tasks
                const tasks = _.cloneDeep(this._tasks);

                // Iterate over tasks...
                tasks.forEach((task) => {

                    // Make the task lighter
                    delete task.description;
                    delete task.assignedTo;
                    delete task.subtasks;

                    // Add the loaded completely status
                    task.loadedCompletely = false;
                });

                return [
                    200,
                    tasks
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Task - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/tasks/task')
            .reply((request) => {

                // Get the id from the params
                const id = request.params.get('id');

                // Clone the tasks data to prevent accidental data updates
                const tasks = _.cloneDeep(this._tasks);

                // Find the task
                const task = tasks.find((item) => {
                    return item.id === id;
                });

                // Add the loaded completely status
                task.loadedCompletely = true;

                return [
                    200,
                    task
                ];
            });
    }
}
