import { Component } from '@angular/core';
import { AsmVerticalMenuItem } from '@assembly';

@Component({
    selector   : 'asm-demo-sidebar-content',
    templateUrl: './demo-sidebar-content.component.html',
    styleUrls  : ['./demo-sidebar-content.component.scss']
})
export class AsmDemoSidebarContentComponent
{
    menuData: AsmVerticalMenuItem[];

    constructor()
    {
        // Set the defaults
        this.menuData = [
            {
                title   : 'Actions',
                subtitle: 'Task, project & team',
                type    : 'subheader'
            },
            {
                title: 'Create task',
                type : 'basic',
                icon : 'add_circle_outline'
            },
            {
                title: 'Create team',
                type : 'basic',
                icon : 'people_outline'
            },
            {
                title: 'Create project',
                type : 'basic',
                icon : 'work_outline'
            },
            {
                title: 'Create user',
                type : 'basic',
                icon : 'person'
            },
            {
                title   : 'Assign user or team',
                subtitle: 'Assign to a task or a project',
                type    : 'basic',
                icon    : 'assignment_ind'
            },
            {
                title: 'Tasks',
                type : 'subheader'
            },
            {
                title: 'All tasks',
                type : 'basic',
                icon : 'format_list_bulleted',
                badge: {
                    title     : '49',
                    background: '#E91E63',
                    color     : '#FFFFFF'
                }
            },
            {
                title: 'Ongoing tasks',
                type : 'basic',
                icon : 'play_circle_outline'
            },
            {
                title: 'Completed tasks',
                type : 'basic',
                icon : 'check_circle'
            },
            {
                title: 'Abandoned tasks',
                type : 'basic',
                icon : 'remove_circle_outline'
            },
            {
                title: 'Assigned to me',
                type : 'basic',
                icon : 'person'
            },
            {
                title: 'Assigned to my team',
                type : 'basic',
                icon : 'people_outline'
            },
            {
                title: 'Settings',
                type : 'subheader'
            },
            {
                title   : 'General',
                type    : 'collapsable',
                icon    : 'settings',
                children: [
                    {
                        title: 'Tasks',
                        type : 'basic'
                    },
                    {
                        title: 'Users',
                        type : 'basic'
                    },
                    {
                        title: 'Teams',
                        type : 'basic'
                    }
                ]
            },
            {
                title   : 'Account',
                type    : 'collapsable',
                icon    : 'settings',
                children: [
                    {
                        title: 'Personal',
                        type : 'basic'
                    },
                    {
                        title: 'Payment',
                        type : 'basic'
                    },
                    {
                        title: 'Security',
                        type : 'basic'
                    }
                ]
            },
            {
                type: 'divider'
            }
        ];

    }
}
