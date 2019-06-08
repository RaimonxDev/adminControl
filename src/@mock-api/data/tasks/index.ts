import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApiUtils } from '@mock-api/mock-api.utils';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { tags as tagsData, tasks as tasksData } from '@mock-api/data/tasks/data';

@Injectable({
    providedIn: 'root'
})
export class MockTasksApi
{
    // Private Readonly
    private _tags: any[];
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
        // @ Tags - PUT
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPut('api/apps/tasks/tag')
            .reply((request) => {

                // Get the tag
                const newTag = _.cloneDeep(request.body.tag);

                // Generate a new GUID
                newTag.id = AsmMockApiUtils.guid();

                // Unshift the new tag
                this._tags.unshift(newTag);

                return [
                    200,
                    newTag
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Tags - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPatch('api/apps/tasks/tag')
            .reply((request) => {

                // Get the id and tag
                const id = request.body.id;
                const tag = _.cloneDeep(request.body.tag);

                // Prepare the updated tag
                let updatedTag = null;

                // Find the tag and update it
                this._tags.forEach((item, index, tags) => {

                    if ( item.id === id )
                    {
                        // Update the tag
                        tags[index] = _.assign({}, tags[index], tag);

                        // Store the updated tag
                        updatedTag = tags[index];
                    }
                });

                return [
                    200,
                    updatedTag
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Tasks Count - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/tasks/count')
            .reply(() => {

                // Clone the tasks
                const tasks = _.cloneDeep(this._tasks);

                // Start the counters
                let completed = 0;
                let notCompleted = 0;

                // Iterate the tasks and count them
                tasks.forEach((task) => {

                    // Only count actual tasks
                    if ( task.type !== 'task' )
                    {
                        return;
                    }

                    // Increase the counter
                    task.completed ? completed++ : notCompleted++;
                });

                return [
                    200,
                    {
                        completed,
                        notCompleted
                    }
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

                // Sort the tasks by order
                tasks.sort((a, b) => {
                    return a.order - b.order;
                });

                // Iterate over tasks...
                tasks.forEach((task) => {

                    // Make the task lighter
                    delete task.notes;

                    // Add the loaded completely status
                    task.loadedCompletely = false;
                });

                return [
                    200,
                    tasks
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Tasks Orders - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPatch('api/apps/tasks/order')
            .reply((request) => {

                // Get the tasks
                const tasks = request.body.tasks;

                // Go through the tasks
                this._tasks.forEach((task) => {

                    // Find this task's index within the tasks array that comes with the request
                    // and assign that index as the new order number for the task
                    task.order = tasks.findIndex(item => item.id === task.id);
                });

                // Clone the tasks
                const updatedTasks = _.cloneDeep(this._tasks);

                return [
                    200,
                    updatedTasks
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

        // -----------------------------------------------------------------------------------------------------
        // @ Task - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPatch('api/apps/tasks/task')
            .reply((request) => {

                // Get the id and task
                const id = request.body.id;
                const task = _.cloneDeep(request.body.task);

                // Prepare the updated task
                let updatedTask = null;

                // Find the task and update it
                this._tasks.forEach((item, index, tasks) => {

                    if ( item.id === id )
                    {
                        // Update the task
                        tasks[index] = _.assign({}, tasks[index], task);

                        // Store the updated task
                        updatedTask = tasks[index];
                    }
                });

                return [
                    200,
                    updatedTask
                ];
            });
    }
}
