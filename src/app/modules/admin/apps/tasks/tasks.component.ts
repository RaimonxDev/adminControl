import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'tasks',
    templateUrl    : './tasks.component.html',
    styleUrls      : ['./tasks.component.scss'],
    encapsulation  : ViewEncapsulation.None
})
export class TasksComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}