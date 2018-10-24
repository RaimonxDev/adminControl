import { Component, ElementRef, HostBinding, HostListener, Input, OnDestroy, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { AsmDrawerService } from '@assembly/components/drawer/drawer.service';

@Component({
    selector     : 'asm-notifications',
    templateUrl  : './notifications.component.html',
    styleUrls    : ['./notifications.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AsmNotificationsComponent
{
    /**
     * Constructor
     */
    constructor(
    )
    {
    }

}
