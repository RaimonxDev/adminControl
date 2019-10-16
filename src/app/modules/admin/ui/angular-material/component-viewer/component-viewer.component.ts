import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DocItem, DocumentationItems } from 'app/modules/admin/ui/angular-material/doc-items';

@Component({
    selector     : 'angular-material-component-viewer',
    templateUrl  : './component-viewer.component.html',
    styleUrls    : ['./component-viewer.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AngularMaterialComponentViewerComponent implements OnInit
{
    componentDocItem: DocItem;
    componentId: string;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {Router} _router
     * @param {DocumentationItems} documentationItems
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        public documentationItems: DocumentationItems
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to route changes to get the doc item
        this._router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
                this._getDocItem();
            });

        // Get the doc item for the first time
        this._getDocItem();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the doc item
     *
     * @private
     */
    private _getDocItem(): void
    {
        // Get the component id from the route params
        this.componentId = this._activatedRoute.snapshot.paramMap.get('id');

        // Get the doc item
        this.componentDocItem = this.documentationItems.getItemById(this.componentId, 'material');
    }
}

@Component({
    selector     : 'angular-material-component-overview',
    templateUrl  : './component-overview.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AngularMaterialComponentOverviewComponent
{
    /**
     * Constructor
     *
     * @param {AngularMaterialComponentViewerComponent} componentViewer
     */
    constructor(public componentViewer: AngularMaterialComponentViewerComponent)
    {
    }
}

@Component({
    selector     : 'angular-material-component-api',
    templateUrl  : './component-api.component.html',
    styleUrls    : ['./component-api.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AngularMaterialComponentApiComponent extends AngularMaterialComponentOverviewComponent
{
}

@Component({
    selector     : 'angular-material-component-examples',
    templateUrl  : './component-examples.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AngularMaterialComponentExamplesComponent extends AngularMaterialComponentOverviewComponent
{
}
