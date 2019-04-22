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
                title   : 'Subheader',
                subtitle: 'Subheader subtitle',
                type    : 'subheader',
                icon    : 'apps'
            },
            {
                title     : 'Menu Item 1',
                type      : 'basic',
                icon      : 'dashboards',
                exactMatch: true
            },
            {
                title   : 'Menu Item 2',
                subtitle: 'Item subtitle',
                type    : 'basic',
                icon    : 'today'
            },
            {
                title: 'Menu Item 3',
                type : 'basic',
                icon : 'email',
                badge: {
                    title     : '9',
                    background: '#E91E63',
                    color     : '#FFFFFF'
                }
            },
            {
                title: 'Menu Item 4',
                type : 'basic',
                icon : 'check_box'
            },
            {
                title: 'Menu Item 5',
                type : 'basic',
                icon : 'note'
            },
            {
                title: 'Menu Item 6',
                type : 'basic',
                icon : 'account_box'
            },
            {
                title: 'Subheader',
                type : 'subheader'
            },
            {
                title   : 'Menu Item 1',
                type    : 'collapsable',
                icon    : 'lock',
                children: [
                    {
                        title: 'Menu Item Children 1',
                        type : 'basic'
                    },
                    {
                        title: 'Menu Item Children 2',
                        type : 'basic'
                    },
                    {
                        title: 'Menu Item Children 3',
                        type : 'basic'
                    },
                    {
                        title: 'Menu Item Children 4',
                        type : 'basic'
                    }
                ]
            },
            {
                title: 'Menu Item 2',
                type : 'basic',
                icon : 'hourglass_empty'
            },
            {
                title: 'Menu Item 3',
                type : 'basic',
                icon : 'build'
            },
            {
                title: 'Menu Item 4',
                type : 'basic',
                icon : 'person'
            }
        ];

    }
}
