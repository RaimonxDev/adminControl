import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

import { AutocompleteAutoActiveFirstOptionExample } from 'assets/angular-material-docs/docs-content/examples-source/autocomplete-auto-active-first-option-example';
import { AutocompleteSimpleExample } from 'assets/angular-material-docs/docs-content/examples-source/autocomplete-simple-example';
import { TableRowContextExample } from 'assets/angular-material-docs/docs-content/examples-source/table-row-context-example';
import { AutocompleteOptgroupExample } from 'assets/angular-material-docs/docs-content/examples-source/autocomplete-optgroup-example';
import { RippleOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/ripple-overview-example';
import { DatepickerMinMaxExample } from 'assets/angular-material-docs/docs-content/examples-source/datepicker-min-max-example';
import { SnackBarPositionExample } from 'assets/angular-material-docs/docs-content/examples-source/snack-bar-position-example';
import { ExpansionStepsExample } from 'assets/angular-material-docs/docs-content/examples-source/expansion-steps-example';
import { TabGroupAlignExample } from 'assets/angular-material-docs/docs-content/examples-source/tab-group-align-example';
import { RadioNgModelExample } from 'assets/angular-material-docs/docs-content/examples-source/radio-ng-model-example';
import { SelectOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/select-overview-example';
import { FormFieldCustomControlExample, MyTelInput } from 'assets/angular-material-docs/docs-content/examples-source/form-field-custom-control-example';
import { TableBasicExample } from 'assets/angular-material-docs/docs-content/examples-source/table-basic-example';
import { SidenavFixedExample } from 'assets/angular-material-docs/docs-content/examples-source/sidenav-fixed-example';
import { SlideToggleOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/slide-toggle-overview-example';
import { AutocompleteDisplayExample } from 'assets/angular-material-docs/docs-content/examples-source/autocomplete-display-example';
import { FormFieldOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/form-field-overview-example';
import { FormFieldLabelExample } from 'assets/angular-material-docs/docs-content/examples-source/form-field-label-example';
import { DatepickerStartViewExample } from 'assets/angular-material-docs/docs-content/examples-source/datepicker-start-view-example';
import { TabGroupHeaderBelowExample } from 'assets/angular-material-docs/docs-content/examples-source/tab-group-header-below-example';
import { DatepickerViewsSelectionExample } from 'assets/angular-material-docs/docs-content/examples-source/datepicker-views-selection-example';
import { InputClearableExample } from 'assets/angular-material-docs/docs-content/examples-source/input-clearable-example';
import { DatepickerFilterExample } from 'assets/angular-material-docs/docs-content/examples-source/datepicker-filter-example';
import { DialogElementsExample, DialogElementsExampleDialog } from 'assets/angular-material-docs/docs-content/examples-source/dialog-elements-example';
import { ProgressBarIndeterminateExample } from 'assets/angular-material-docs/docs-content/examples-source/progress-bar-indeterminate-example';
import { PizzaPartyComponent, SnackBarComponentExample } from 'assets/angular-material-docs/docs-content/examples-source/snack-bar-component-example';
import { ElevationOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/elevation-overview-example';
import { TableOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/table-overview-example';
import { DialogOverviewExample, DialogOverviewExampleDialog } from 'assets/angular-material-docs/docs-content/examples-source/dialog-overview-example';
import { DatepickerOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/datepicker-overview-example';
import { StepperOptionalExample } from 'assets/angular-material-docs/docs-content/examples-source/stepper-optional-example';
import { ListOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/list-overview-example';
import { ChipsInputExample } from 'assets/angular-material-docs/docs-content/examples-source/chips-input-example';
import { DatepickerDateClassExample } from 'assets/angular-material-docs/docs-content/examples-source/datepicker-date-class-example';
import { TooltipMessageExample } from 'assets/angular-material-docs/docs-content/examples-source/tooltip-message-example';
import { TableStickyComplexExample } from 'assets/angular-material-docs/docs-content/examples-source/table-sticky-complex-example';
import { TableExpandableRowsExample } from 'assets/angular-material-docs/docs-content/examples-source/table-expandable-rows-example';
import { DatepickerMomentExample } from 'assets/angular-material-docs/docs-content/examples-source/datepicker-moment-example';
import { FormFieldHintExample } from 'assets/angular-material-docs/docs-content/examples-source/form-field-hint-example';
import { TabGroupDynamicExample } from 'assets/angular-material-docs/docs-content/examples-source/tab-group-dynamic-example';
import { ChipsAutocompleteExample } from 'assets/angular-material-docs/docs-content/examples-source/chips-autocomplete-example';
import { SidenavResponsiveExample } from 'assets/angular-material-docs/docs-content/examples-source/sidenav-responsive-example';
import { StepperLabelPositionBottomExample } from 'assets/angular-material-docs/docs-content/examples-source/stepper-label-position-bottom-example';
import { SelectResetExample } from 'assets/angular-material-docs/docs-content/examples-source/select-reset-example';
import { CheckboxConfigurableExample } from 'assets/angular-material-docs/docs-content/examples-source/checkbox-configurable-example';
import { TooltipPositionExample } from 'assets/angular-material-docs/docs-content/examples-source/tooltip-position-example';
import { SidenavDisableCloseExample } from 'assets/angular-material-docs/docs-content/examples-source/sidenav-disable-close-example';
import { StepperVerticalExample } from 'assets/angular-material-docs/docs-content/examples-source/stepper-vertical-example';
import { ChipsDragDropExample } from 'assets/angular-material-docs/docs-content/examples-source/chips-drag-drop-example';
import { InputHintExample } from 'assets/angular-material-docs/docs-content/examples-source/input-hint-example';
import { TooltipCustomClassExample } from 'assets/angular-material-docs/docs-content/examples-source/tooltip-custom-class-example';
import { FormFieldPrefixSuffixExample } from 'assets/angular-material-docs/docs-content/examples-source/form-field-prefix-suffix-example';
import { IconSvgExample } from 'assets/angular-material-docs/docs-content/examples-source/icon-svg-example';
import { ChipsStackedExample } from 'assets/angular-material-docs/docs-content/examples-source/chips-stacked-example';
import { AutocompleteOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/autocomplete-overview-example';
import { ButtonToggleOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/button-toggle-overview-example';
import { ButtonTypesExample } from 'assets/angular-material-docs/docs-content/examples-source/button-types-example';
import { TabGroupAnimationsExample } from 'assets/angular-material-docs/docs-content/examples-source/tab-group-animations-example';
import { TabGroupDynamicHeightExample } from 'assets/angular-material-docs/docs-content/examples-source/tab-group-dynamic-height-example';
import { TabGroupThemeExample } from 'assets/angular-material-docs/docs-content/examples-source/tab-group-theme-example';
import { SelectDisabledExample } from 'assets/angular-material-docs/docs-content/examples-source/select-disabled-example';
import { TooltipModifiedDefaultsExample } from 'assets/angular-material-docs/docs-content/examples-source/tooltip-modified-defaults-example';
import { SliderConfigurableExample } from 'assets/angular-material-docs/docs-content/examples-source/slider-configurable-example';
import { SnackBarOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/snack-bar-overview-example';
import { TooltipOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/tooltip-overview-example';
import { ToolbarOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/toolbar-overview-example';
import { FormFieldThemingExample } from 'assets/angular-material-docs/docs-content/examples-source/form-field-theming-example';
import { TableMultipleHeaderFooterExample } from 'assets/angular-material-docs/docs-content/examples-source/table-multiple-header-footer-example';
import { TabNavBarBasicExample } from 'assets/angular-material-docs/docs-content/examples-source/tab-nav-bar-basic-example';
import { TableStickyColumnsExample } from 'assets/angular-material-docs/docs-content/examples-source/table-sticky-columns-example';
import { MenuIconsExample } from 'assets/angular-material-docs/docs-content/examples-source/menu-icons-example';
import { PaginatorOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/paginator-overview-example';
import { ProgressSpinnerOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/progress-spinner-overview-example';
import { SliderOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/slider-overview-example';
import { TableTextColumnAdvancedExample } from 'assets/angular-material-docs/docs-content/examples-source/table-text-column-advanced-example';
import { DatepickerEventsExample } from 'assets/angular-material-docs/docs-content/examples-source/datepicker-events-example';
import { SelectOptgroupExample } from 'assets/angular-material-docs/docs-content/examples-source/select-optgroup-example';
import { TableBasicFlexExample } from 'assets/angular-material-docs/docs-content/examples-source/table-basic-flex-example';
import { DividerOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/divider-overview-example';
import { TooltipManualExample } from 'assets/angular-material-docs/docs-content/examples-source/tooltip-manual-example';
import { IconOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/icon-overview-example';
import { TabGroupCustomLabelExample } from 'assets/angular-material-docs/docs-content/examples-source/tab-group-custom-label-example';
import { PaginatorConfigurableExample } from 'assets/angular-material-docs/docs-content/examples-source/paginator-configurable-example';
import { StepperErrorsExample } from 'assets/angular-material-docs/docs-content/examples-source/stepper-errors-example';
import { TooltipAutoHideExample } from 'assets/angular-material-docs/docs-content/examples-source/tooltip-auto-hide-example';
import { InputPrefixSuffixExample } from 'assets/angular-material-docs/docs-content/examples-source/input-prefix-suffix-example';
import { ProgressBarQueryExample } from 'assets/angular-material-docs/docs-content/examples-source/progress-bar-query-example';
import { TableTextColumnExample } from 'assets/angular-material-docs/docs-content/examples-source/table-text-column-example';
import { FormFieldErrorExample } from 'assets/angular-material-docs/docs-content/examples-source/form-field-error-example';
import { TabGroupLazyLoadedExample } from 'assets/angular-material-docs/docs-content/examples-source/tab-group-lazy-loaded-example';
import { SelectPanelClassExample } from 'assets/angular-material-docs/docs-content/examples-source/select-panel-class-example';
import { ToolbarMultirowExample } from 'assets/angular-material-docs/docs-content/examples-source/toolbar-multirow-example';
import { GridListOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/grid-list-overview-example';
import { ListSectionsExample } from 'assets/angular-material-docs/docs-content/examples-source/list-sections-example';
import { NestedMenuExample } from 'assets/angular-material-docs/docs-content/examples-source/nested-menu-example';
import { ProgressBarConfigurableExample } from 'assets/angular-material-docs/docs-content/examples-source/progress-bar-configurable-example';
import { ProgressBarDeterminateExample } from 'assets/angular-material-docs/docs-content/examples-source/progress-bar-determinate-example';
import { DatepickerCustomHeaderExample, ExampleHeader } from 'assets/angular-material-docs/docs-content/examples-source/datepicker-custom-header-example';
import { DatepickerLocaleExample } from 'assets/angular-material-docs/docs-content/examples-source/datepicker-locale-example';
import { TablePaginationExample } from 'assets/angular-material-docs/docs-content/examples-source/table-pagination-example';
import { InputOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/input-overview-example';
import { InputFormExample } from 'assets/angular-material-docs/docs-content/examples-source/input-form-example';
import { TableStickyFooterExample } from 'assets/angular-material-docs/docs-content/examples-source/table-sticky-footer-example';
import { SortOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/sort-overview-example';
import { ProgressBarBufferExample } from 'assets/angular-material-docs/docs-content/examples-source/progress-bar-buffer-example';
import { ButtonToggleAppearanceExample } from 'assets/angular-material-docs/docs-content/examples-source/button-toggle-appearance-example';
import { SelectHintErrorExample } from 'assets/angular-material-docs/docs-content/examples-source/select-hint-error-example';
import { ExpansionOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/expansion-overview-example';
import { DatepickerFormatsExample } from 'assets/angular-material-docs/docs-content/examples-source/datepicker-formats-example';
import { ButtonOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/button-overview-example';
import { SlideToggleFormsExample } from 'assets/angular-material-docs/docs-content/examples-source/slide-toggle-forms-example';
import { TableSelectionExample } from 'assets/angular-material-docs/docs-content/examples-source/table-selection-example';
import { BottomSheetOverviewExample, BottomSheetOverviewExampleSheet } from 'assets/angular-material-docs/docs-content/examples-source/bottom-sheet-overview-example';
import { SidenavBackdropExample } from 'assets/angular-material-docs/docs-content/examples-source/sidenav-backdrop-example';
import { TableWrappedExample, WrapperTable } from 'assets/angular-material-docs/docs-content/examples-source/table-wrapped-example';
import { AutocompletePlainInputExample } from 'assets/angular-material-docs/docs-content/examples-source/autocomplete-plain-input-example';
import { DatepickerApiExample } from 'assets/angular-material-docs/docs-content/examples-source/datepicker-api-example';
import { CardOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/card-overview-example';
import { TabGroupStretchedExample } from 'assets/angular-material-docs/docs-content/examples-source/tab-group-stretched-example';
import { SidenavModeExample } from 'assets/angular-material-docs/docs-content/examples-source/sidenav-mode-example';
import { SelectMultipleExample } from 'assets/angular-material-docs/docs-content/examples-source/select-multiple-example';
import { TreeDynamicExample } from 'assets/angular-material-docs/docs-content/examples-source/tree-dynamic-example';
import { TreeFlatOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/tree-flat-overview-example';
import { DialogDataExample, DialogDataExampleDialog } from 'assets/angular-material-docs/docs-content/examples-source/dialog-data-example';
import { TabGroupAsyncExample } from 'assets/angular-material-docs/docs-content/examples-source/tab-group-async-example';
import { InputErrorStateMatcherExample } from 'assets/angular-material-docs/docs-content/examples-source/input-error-state-matcher-example';
import { SelectFormExample } from 'assets/angular-material-docs/docs-content/examples-source/select-form-example';
import { ChipsOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/chips-overview-example';
import { InputErrorsExample } from 'assets/angular-material-docs/docs-content/examples-source/input-errors-example';
import { TreeLoadmoreExample } from 'assets/angular-material-docs/docs-content/examples-source/tree-loadmore-example';
import { GridListDynamicExample } from 'assets/angular-material-docs/docs-content/examples-source/grid-list-dynamic-example';
import { DatepickerDisabledExample } from 'assets/angular-material-docs/docs-content/examples-source/datepicker-disabled-example';
import { StepperEditableExample } from 'assets/angular-material-docs/docs-content/examples-source/stepper-editable-example';
import { SelectCustomTriggerExample } from 'assets/angular-material-docs/docs-content/examples-source/select-custom-trigger-example';
import { SidenavPositionExample } from 'assets/angular-material-docs/docs-content/examples-source/sidenav-position-example';
import { TreeChecklistExample } from 'assets/angular-material-docs/docs-content/examples-source/tree-checklist-example';
import { TableStickyComplexFlexExample } from 'assets/angular-material-docs/docs-content/examples-source/table-sticky-complex-flex-example';
import { RadioOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/radio-overview-example';
import { StepperStatesExample } from 'assets/angular-material-docs/docs-content/examples-source/stepper-states-example';
import { SidenavOpenCloseExample } from 'assets/angular-material-docs/docs-content/examples-source/sidenav-open-close-example';
import { BadgeOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/badge-overview-example';
import { SelectValueBindingExample } from 'assets/angular-material-docs/docs-content/examples-source/select-value-binding-example';
import { TreeNestedOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/tree-nested-overview-example';
import { DialogContentExample, DialogContentExampleDialog } from 'assets/angular-material-docs/docs-content/examples-source/dialog-content-example';
import { TableSortingExample } from 'assets/angular-material-docs/docs-content/examples-source/table-sorting-example';
import { FormFieldAppearanceExample } from 'assets/angular-material-docs/docs-content/examples-source/form-field-appearance-example';
import { ListSelectionExample } from 'assets/angular-material-docs/docs-content/examples-source/list-selection-example';
import { SidenavAutosizeExample } from 'assets/angular-material-docs/docs-content/examples-source/sidenav-autosize-example';
import { TableDynamicColumnsExample } from 'assets/angular-material-docs/docs-content/examples-source/table-dynamic-columns-example';
import { TabGroupBasicExample } from 'assets/angular-material-docs/docs-content/examples-source/tab-group-basic-example';
import { TooltipDelayExample } from 'assets/angular-material-docs/docs-content/examples-source/tooltip-delay-example';
import { SelectNoRippleExample } from 'assets/angular-material-docs/docs-content/examples-source/select-no-ripple-example';
import { ExpansionExpandCollapseAllExample } from 'assets/angular-material-docs/docs-content/examples-source/expansion-expand-collapse-all-example';
import { TableStickyHeaderExample } from 'assets/angular-material-docs/docs-content/examples-source/table-sticky-header-example';
import { SidenavOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/sidenav-overview-example';
import { TableFilteringExample } from 'assets/angular-material-docs/docs-content/examples-source/table-filtering-example';
import { ButtonToggleExclusiveExample } from 'assets/angular-material-docs/docs-content/examples-source/button-toggle-exclusive-example';
import { CheckboxOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/checkbox-overview-example';
import { StepperOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/stepper-overview-example';
import { SlideToggleConfigurableExample } from 'assets/angular-material-docs/docs-content/examples-source/slide-toggle-configurable-example';
import { AutocompleteFilterExample } from 'assets/angular-material-docs/docs-content/examples-source/autocomplete-filter-example';
import { DatepickerCustomIconExample } from 'assets/angular-material-docs/docs-content/examples-source/datepicker-custom-icon-example';
import { DatepickerColorExample } from 'assets/angular-material-docs/docs-content/examples-source/datepicker-color-example';
import { SelectErrorStateMatcherExample } from 'assets/angular-material-docs/docs-content/examples-source/select-error-state-matcher-example';
import { MenuOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/menu-overview-example';
import { TooltipDisabledExample } from 'assets/angular-material-docs/docs-content/examples-source/tooltip-disabled-example';
import { DatepickerTouchExample } from 'assets/angular-material-docs/docs-content/examples-source/datepicker-touch-example';
import { TableHttpExample } from 'assets/angular-material-docs/docs-content/examples-source/table-http-example';
import { MenuPositionExample } from 'assets/angular-material-docs/docs-content/examples-source/menu-position-example';
import { SliderFormattingExample } from 'assets/angular-material-docs/docs-content/examples-source/slider-formatting-example';
import { SidenavDrawerOverviewExample } from 'assets/angular-material-docs/docs-content/examples-source/sidenav-drawer-overview-example';
import { ProgressSpinnerConfigurableExample } from 'assets/angular-material-docs/docs-content/examples-source/progress-spinner-configurable-example';
import { TableFooterRowExample } from 'assets/angular-material-docs/docs-content/examples-source/table-footer-row-example';
import { CardFancyExample } from 'assets/angular-material-docs/docs-content/examples-source/card-fancy-example';
import { DatepickerValueExample } from 'assets/angular-material-docs/docs-content/examples-source/datepicker-value-example';

export interface LiveExample
{
    title: string;
    component: any;
    additionalFiles?: string[];
    selectorName?: string;
}

export const EXAMPLE_COMPONENTS: { [key: string]: LiveExample } = {
    /*'cdk-popover-edit-cdk-table-flex'         : {
        title          : 'CDK Popover Edit on a flex cdk-table.',
        component      : CdkPopoverEditCdkTableFlexExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-popover-edit-cdk-table'              : {
        title          : 'CDK Popover Edit on a CDK data-table',
        component      : CdkPopoverEditCdkTableExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-popover-edit-cell-span-vanilla-table': {
        title          : 'CDK Popover Edit spanning multiple columns on an HTML data-table',
        component      : CdkPopoverEditCellSpanVanillaTableExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-popover-edit-tab-out-vanilla-table'  : {
        title          : 'CDK Popover Edit with spreadsheet-like configuration on an HTML data-table',
        component      : CdkPopoverEditTabOutVanillaTableExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-popover-edit-vanilla-table'          : {
        title          : 'CDK Popover Edit on an HTML data-table',
        component      : CdkPopoverEditVanillaTableExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'focus-monitor-directives'                : {
        title          : 'Monitoring focus with FocusMonitor',
        component      : FocusMonitorDirectivesExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'focus-monitor-focus-via'                 : {
        title          : 'Focusing with a specific FocusOrigin',
        component      : FocusMonitorFocusViaExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'focus-monitor-overview'                  : {
        title          : 'Monitoring focus with FocusMonitor',
        component      : FocusMonitorOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-clipboard-overview'                  : {
        title          : 'Clipboard overview',
        component      : CdkClipboardOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-drag-drop-axis-lock'                 : {
        title          : 'Drag&Drop position locking',
        component      : CdkDragDropAxisLockExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-drag-drop-boundary'                  : {
        title          : 'Drag&Drop boundary',
        component      : CdkDragDropBoundaryExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-drag-drop-connected-sorting-group'   : {
        title          : 'Drag&Drop connected sorting group',
        component      : CdkDragDropConnectedSortingGroupExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-drag-drop-connected-sorting'         : {
        title          : 'Drag&Drop connected sorting',
        component      : CdkDragDropConnectedSortingExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-drag-drop-custom-placeholder'        : {
        title          : 'Drag&Drop custom placeholer',
        component      : CdkDragDropCustomPlaceholderExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-drag-drop-custom-preview'            : {
        title          : 'Drag&Drop custom preview',
        component      : CdkDragDropCustomPreviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-drag-drop-delay'                     : {
        title          : 'Delayed dragging',
        component      : CdkDragDropDelayExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-drag-drop-disabled-sorting'          : {
        title          : 'Drag&Drop disabled sorting',
        component      : CdkDragDropDisabledSortingExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-drag-drop-disabled'                  : {
        title          : 'Drag&Drop disabled',
        component      : CdkDragDropDisabledExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-drag-drop-enter-predicate'           : {
        title          : 'Drag&Drop enter predicate',
        component      : CdkDragDropEnterPredicateExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-drag-drop-free-drag-position'        : {
        title          : 'Programmatically setting the free drag position',
        component      : CdkDragDropFreeDragPositionExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-drag-drop-handle'                    : {
        title          : 'Drag&Drop with a handle',
        component      : CdkDragDropHandleExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-drag-drop-horizontal-sorting'        : {
        title          : 'Drag&Drop horizontal sorting',
        component      : CdkDragDropHorizontalSortingExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-drag-drop-overview'                  : {
        title          : 'Basic Drag&Drop',
        component      : CdkDragDropOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-drag-drop-root-element'              : {
        title          : 'Drag&Drop with alternate root element',
        component      : CdkDragDropRootElementExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-drag-drop-sorting'                   : {
        title          : 'Drag&Drop sorting',
        component      : CdkDragDropSortingExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-platform-overview'                   : {
        title          : 'Platform overview',
        component      : CdkPlatformOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-portal-overview'                     : {
        title          : 'Portal overview',
        component      : CdkPortalOverviewExample,
        additionalFiles: [],
        selectorName   : 'CdkPortalOverviewExample, ComponentPortalExample'
    },
    'cdk-virtual-scroll-context'              : {
        title          : 'Virtual scroll context variables',
        component      : CdkVirtualScrollContextExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-virtual-scroll-custom-strategy'      : {
        title          : 'Virtual scroll with a custom strategy',
        component      : CdkVirtualScrollCustomStrategyExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-virtual-scroll-data-source'          : {
        title          : 'Virtual scroll with a custom data source',
        component      : CdkVirtualScrollDataSourceExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-virtual-scroll-dl'                   : {
        title          : 'Virtual scrolling `<dl>`',
        component      : CdkVirtualScrollDlExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-virtual-scroll-fixed-buffer'         : {
        title          : 'Fixed size virtual scroll with custom buffer parameters',
        component      : CdkVirtualScrollFixedBufferExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-virtual-scroll-horizontal'           : {
        title          : 'Horizontal virtual scroll',
        component      : CdkVirtualScrollHorizontalExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-virtual-scroll-overview'             : {
        title          : 'Basic virtual scroll',
        component      : CdkVirtualScrollOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-virtual-scroll-template-cache'       : {
        title          : 'Virtual scroll with no template caching',
        component      : CdkVirtualScrollTemplateCacheExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-custom-stepper-without-form'         : {
        title          : 'A custom CDK stepper without a form',
        component      : CdkCustomStepperWithoutFormExample,
        additionalFiles: ['./example-custom-stepper.html', './example-custom-stepper.css'],
        selectorName   : 'CdkCustomStepperWithoutFormExample, CustomStepper'
    },
    'cdk-table-basic-flex'                    : {
        title          : 'Basic use of `<cdk-table>` (uses display flex)',
        component      : CdkTableBasicFlexExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-table-basic'                         : {
        title          : 'Basic CDK data-table',
        component      : CdkTableBasicExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'text-field-autofill-directive'           : {
        title          : 'Monitoring autofill state with cdkAutofill',
        component      : TextFieldAutofillDirectiveExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'text-field-autofill-monitor'             : {
        title          : 'Monitoring autofill state with AutofillMonitor',
        component      : TextFieldAutofillMonitorExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'text-field-autosize-textarea'            : {
        title          : 'Auto-resizing textarea',
        component      : TextFieldAutosizeTextareaExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-tree-flat'                           : {
        title          : 'Tree with flat nodes',
        component      : CdkTreeFlatExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'cdk-tree-nested'                         : {
        title          : 'Tree with nested nodes',
        component      : CdkTreeNestedExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'popover-edit-cell-span-mat-table'        : {
        title          : 'Material Popover Edit spanning multiple columns on a Material data-table',
        component      : PopoverEditCellSpanMatTableExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'popover-edit-mat-table-flex'             : {
        title          : 'Material Popover Edit on a flex Material data-table',
        component      : PopoverEditMatTableFlexExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'popover-edit-mat-table'                  : {
        title          : 'Material Popover Edit on a Material data-table',
        component      : PopoverEditMatTableExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'popover-edit-tab-out-mat-table'          : {
        title          : 'Material Popover Edit with spreadsheet-like configuration on a Material data-table',
        component      : PopoverEditTabOutMatTableExample,
        additionalFiles: [],
        selectorName   : ''
    },*/
    'autocomplete-auto-active-first-option': {
        title          : 'Highlight the first autocomplete option',
        component      : AutocompleteAutoActiveFirstOptionExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'autocomplete-display'                 : {
        title          : 'Display value autocomplete',
        component      : AutocompleteDisplayExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'autocomplete-filter'                  : {
        title          : 'Filter autocomplete',
        component      : AutocompleteFilterExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'autocomplete-optgroup'                : {
        title          : 'Option groups autocomplete',
        component      : AutocompleteOptgroupExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'autocomplete-overview'                : {
        title          : 'Autocomplete overview',
        component      : AutocompleteOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'autocomplete-plain-input'             : {
        title          : 'Plain input autocomplete',
        component      : AutocompletePlainInputExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'autocomplete-simple'                  : {
        title          : 'Simple autocomplete',
        component      : AutocompleteSimpleExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'badge-overview'                       : {
        title          : 'Badge overview',
        component      : BadgeOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'bottom-sheet-overview'                : {
        title          : 'Bottom Sheet Overview',
        component      : BottomSheetOverviewExample,
        additionalFiles: ['bottom-sheet-overview-example-sheet.html'],
        selectorName   : 'BottomSheetOverviewExample, BottomSheetOverviewExampleSheet'
    },
    'button-toggle-appearance'             : {
        title          : 'Button toggle appearance',
        component      : ButtonToggleAppearanceExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'button-toggle-exclusive'              : {
        title          : 'Exclusive selection',
        component      : ButtonToggleExclusiveExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'button-toggle-overview'               : {
        title          : 'Basic button-toggles',
        component      : ButtonToggleOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'button-overview'                      : {
        title          : 'Basic buttons',
        component      : ButtonOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'button-types'                         : {
        title          : 'Button varieties',
        component      : ButtonTypesExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'card-fancy'                           : {
        title          : 'Card with multiple sections',
        component      : CardFancyExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'card-overview'                        : {
        title          : 'Basic cards',
        component      : CardOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'checkbox-configurable'                : {
        title          : 'Configurable checkbox',
        component      : CheckboxConfigurableExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'checkbox-overview'                    : {
        title          : 'Basic checkboxes',
        component      : CheckboxOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'chips-autocomplete'                   : {
        title          : 'Chips Autocomplete',
        component      : ChipsAutocompleteExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'chips-drag-drop'                      : {
        title          : 'Chips Drag and Drop',
        component      : ChipsDragDropExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'chips-input'                          : {
        title          : 'Chips with input',
        component      : ChipsInputExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'chips-overview'                       : {
        title          : 'Basic chips',
        component      : ChipsOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'chips-stacked'                        : {
        title          : 'Stacked chips',
        component      : ChipsStackedExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'elevation-overview'                   : {
        title          : 'Elevation CSS classes',
        component      : ElevationOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'ripple-overview'                      : {
        title          : 'MatRipple basic usage',
        component      : RippleOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'datepicker-api'                       : {
        title          : 'Datepicker open method',
        component      : DatepickerApiExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'datepicker-color'                     : {
        title          : 'Datepicker palette colors',
        component      : DatepickerColorExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'datepicker-custom-header'             : {
        title          : 'Datepicker with custom calendar header',
        component      : DatepickerCustomHeaderExample,
        additionalFiles: [],
        selectorName   : 'DatepickerCustomHeaderExample, ExampleHeader'
    },
    'datepicker-custom-icon'               : {
        title          : 'Datepicker with custom icon',
        component      : DatepickerCustomIconExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'datepicker-date-class'                : {
        title          : 'Datepicker with custom date classes',
        component      : DatepickerDateClassExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'datepicker-disabled'                  : {
        title          : 'Disabled datepicker',
        component      : DatepickerDisabledExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'datepicker-events'                    : {
        title          : 'Datepicker input and change events',
        component      : DatepickerEventsExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'datepicker-filter'                    : {
        title          : 'Datepicker with filter validation',
        component      : DatepickerFilterExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'datepicker-formats'                   : {
        title          : 'Datepicker with custom formats',
        component      : DatepickerFormatsExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'datepicker-locale'                    : {
        title          : 'Datepicker with different locale',
        component      : DatepickerLocaleExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'datepicker-min-max'                   : {
        title          : 'Datepicker with min & max validation',
        component      : DatepickerMinMaxExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'datepicker-moment'                    : {
        title          : 'Datepicker that uses Moment.js dates',
        component      : DatepickerMomentExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'datepicker-overview'                  : {
        title          : 'Basic datepicker',
        component      : DatepickerOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'datepicker-start-view'                : {
        title          : 'Datepicker start date',
        component      : DatepickerStartViewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'datepicker-touch'                     : {
        title          : 'Datepicker touch UI',
        component      : DatepickerTouchExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'datepicker-value'                     : {
        title          : 'Datepicker selected value',
        component      : DatepickerValueExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'datepicker-views-selection'           : {
        title          : 'Datepicker emulating a Year and month picker',
        component      : DatepickerViewsSelectionExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'dialog-content'                       : {
        title          : 'Dialog with header, scrollable content and actions',
        component      : DialogContentExample,
        additionalFiles: ['dialog-content-example-dialog.html'],
        selectorName   : 'DialogContentExample, DialogContentExampleDialog'
    },
    'dialog-data'                          : {
        title          : 'Injecting data when opening a dialog',
        component      : DialogDataExample,
        additionalFiles: ['dialog-data-example-dialog.html'],
        selectorName   : 'DialogDataExample, DialogDataExampleDialog'
    },
    'dialog-elements'                      : {
        title          : 'Dialog elements',
        component      : DialogElementsExample,
        additionalFiles: ['dialog-elements-example-dialog.html'],
        selectorName   : 'DialogElementsExample, DialogElementsExampleDialog'
    },
    'dialog-overview'                      : {
        title          : 'Dialog Overview',
        component      : DialogOverviewExample,
        additionalFiles: ['dialog-overview-example-dialog.html'],
        selectorName   : 'DialogOverviewExample, DialogOverviewExampleDialog'
    },
    'divider-overview'                     : {
        title          : 'Basic divider',
        component      : DividerOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'expansion-expand-collapse-all'        : {
        title          : 'Accordion with expand/collapse all toggles',
        component      : ExpansionExpandCollapseAllExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'expansion-overview'                   : {
        title          : 'Basic expansion panel',
        component      : ExpansionOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'expansion-steps'                      : {
        title          : 'Expansion panel as accordion',
        component      : ExpansionStepsExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'form-field-appearance'                : {
        title          : 'Form field appearance variants',
        component      : FormFieldAppearanceExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'form-field-custom-control'            : {
        title          : 'Form field with custom telephone number input control.',
        component      : FormFieldCustomControlExample,
        additionalFiles: ['example-tel-input-example.html', 'example-tel-input-example.css'],
        selectorName   : 'FormFieldCustomControlExample, MyTelInput'
    },
    'form-field-error'                     : {
        title          : 'Form field with error messages',
        component      : FormFieldErrorExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'form-field-hint'                      : {
        title          : 'Form field with hints',
        component      : FormFieldHintExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'form-field-label'                     : {
        title          : 'Form field with label',
        component      : FormFieldLabelExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'form-field-overview'                  : {
        title          : 'Simple form field',
        component      : FormFieldOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'form-field-prefix-suffix'             : {
        title          : 'Form field with prefix & suffix',
        component      : FormFieldPrefixSuffixExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'form-field-theming'                   : {
        title          : 'Form field theming',
        component      : FormFieldThemingExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'grid-list-dynamic'                    : {
        title          : 'Dynamic grid-list',
        component      : GridListDynamicExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'grid-list-overview'                   : {
        title          : 'Basic grid-list',
        component      : GridListOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'icon-overview'                        : {
        title          : 'Basic icons',
        component      : IconOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'icon-svg'                             : {
        title          : 'SVG icons',
        component      : IconSvgExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'input-clearable'                      : {
        title          : 'Input with a clear button',
        component      : InputClearableExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'input-error-state-matcher'            : {
        title          : 'Input with a custom ErrorStateMatcher',
        component      : InputErrorStateMatcherExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'input-errors'                         : {
        title          : 'Input with error messages',
        component      : InputErrorsExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'input-form'                           : {
        title          : 'Inputs in a form',
        component      : InputFormExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'input-hint'                           : {
        title          : 'Input with hints',
        component      : InputHintExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'input-overview'                       : {
        title          : 'Basic Inputs',
        component      : InputOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'input-prefix-suffix'                  : {
        title          : 'Inputs with prefixes and suffixes',
        component      : InputPrefixSuffixExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'list-overview'                        : {
        title          : 'Basic list',
        component      : ListOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'list-sections'                        : {
        title          : 'List with sections',
        component      : ListSectionsExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'list-selection'                       : {
        title          : 'List with selection',
        component      : ListSelectionExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'menu-icons'                           : {
        title          : 'Menu with icons',
        component      : MenuIconsExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'menu-overview'                        : {
        title          : 'Basic menu',
        component      : MenuOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'menu-position'                        : {
        title          : 'Menu positioning',
        component      : MenuPositionExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'nested-menu'                          : {
        title          : 'Nested menu',
        component      : NestedMenuExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'paginator-configurable'               : {
        title          : 'Configurable paginator',
        component      : PaginatorConfigurableExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'paginator-overview'                   : {
        title          : 'Paginator',
        component      : PaginatorOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'progress-bar-buffer'                  : {
        title          : 'Buffer progress-bar',
        component      : ProgressBarBufferExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'progress-bar-configurable'            : {
        title          : 'Configurable progress-bar',
        component      : ProgressBarConfigurableExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'progress-bar-determinate'             : {
        title          : 'Determinate progress-bar',
        component      : ProgressBarDeterminateExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'progress-bar-indeterminate'           : {
        title          : 'Indeterminate progress-bar',
        component      : ProgressBarIndeterminateExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'progress-bar-query'                   : {
        title          : 'Query progress-bar',
        component      : ProgressBarQueryExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'progress-spinner-configurable'        : {
        title          : 'Configurable progress spinner',
        component      : ProgressSpinnerConfigurableExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'progress-spinner-overview'            : {
        title          : 'Basic progress-spinner',
        component      : ProgressSpinnerOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'radio-ng-model'                       : {
        title          : 'Radios with ngModel',
        component      : RadioNgModelExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'radio-overview'                       : {
        title          : 'Basic radios',
        component      : RadioOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'select-custom-trigger'                : {
        title          : 'Select with custom trigger text',
        component      : SelectCustomTriggerExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'select-disabled'                      : {
        title          : 'Disabled select',
        component      : SelectDisabledExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'select-error-state-matcher'           : {
        title          : 'Select with a custom ErrorStateMatcher',
        component      : SelectErrorStateMatcherExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'select-form'                          : {
        title          : 'Select in a form',
        component      : SelectFormExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'select-hint-error'                    : {
        title          : 'Select with form field features',
        component      : SelectHintErrorExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'select-multiple'                      : {
        title          : 'Select with multiple selection',
        component      : SelectMultipleExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'select-no-ripple'                     : {
        title          : 'Select with no option ripple',
        component      : SelectNoRippleExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'select-optgroup'                      : {
        title          : 'Select with option groups',
        component      : SelectOptgroupExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'select-overview'                      : {
        title          : 'Basic select',
        component      : SelectOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'select-panel-class'                   : {
        title          : 'Select with custom panel styling',
        component      : SelectPanelClassExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'select-reset'                         : {
        title          : 'Select with reset option',
        component      : SelectResetExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'select-value-binding'                 : {
        title          : 'Select with 2-way value binding',
        component      : SelectValueBindingExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'sidenav-autosize'                     : {
        title          : 'Autosize sidenav',
        component      : SidenavAutosizeExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'sidenav-backdrop'                     : {
        title          : 'Drawer with explicit backdrop setting',
        component      : SidenavBackdropExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'sidenav-disable-close'                : {
        title          : 'Sidenav with custom escape and backdrop click behavior',
        component      : SidenavDisableCloseExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'sidenav-drawer-overview'              : {
        title          : 'Basic drawer',
        component      : SidenavDrawerOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'sidenav-fixed'                        : {
        title          : 'Fixed sidenav',
        component      : SidenavFixedExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'sidenav-mode'                         : {
        title          : 'Sidenav with configurable mode',
        component      : SidenavModeExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'sidenav-open-close'                   : {
        title          : 'Sidenav open & close behavior',
        component      : SidenavOpenCloseExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'sidenav-overview'                     : {
        title          : 'Basic sidenav',
        component      : SidenavOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'sidenav-position'                     : {
        title          : 'Implicit main content with two sidenavs',
        component      : SidenavPositionExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'sidenav-responsive'                   : {
        title          : 'Responsive sidenav',
        component      : SidenavResponsiveExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'slide-toggle-configurable'            : {
        title          : 'Configurable slide-toggle',
        component      : SlideToggleConfigurableExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'slide-toggle-forms'                   : {
        title          : 'Slide-toggle with forms',
        component      : SlideToggleFormsExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'slide-toggle-overview'                : {
        title          : 'Basic slide-toggles',
        component      : SlideToggleOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'slider-configurable'                  : {
        title          : 'Configurable slider',
        component      : SliderConfigurableExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'slider-formatting'                    : {
        title          : 'Slider with custom thumb label formatting.',
        component      : SliderFormattingExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'slider-overview'                      : {
        title          : 'Basic slider',
        component      : SliderOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'snack-bar-component'                  : {
        title          : 'Snack-bar with a custom component',
        component      : SnackBarComponentExample,
        additionalFiles: ['snack-bar-component-example-snack.html'],
        selectorName   : 'SnackBarComponentExample, PizzaPartyComponent'
    },
    'snack-bar-overview'                   : {
        title          : 'Basic snack-bar',
        component      : SnackBarOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'snack-bar-position'                   : {
        title          : 'Snack-bar with configurable position',
        component      : SnackBarPositionExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'sort-overview'                        : {
        title          : 'Sorting overview',
        component      : SortOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'stepper-editable'                     : {
        title          : 'Stepper with editable steps',
        component      : StepperEditableExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'stepper-errors'                       : {
        title          : 'Stepper that displays errors in the steps',
        component      : StepperErrorsExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'stepper-label-position-bottom'        : {
        title          : 'Stepper label bottom position',
        component      : StepperLabelPositionBottomExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'stepper-optional'                     : {
        title          : 'Stepper with optional steps',
        component      : StepperOptionalExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'stepper-overview'                     : {
        title          : 'Stepper overview',
        component      : StepperOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'stepper-states'                       : {
        title          : 'Stepper with customized states',
        component      : StepperStatesExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'stepper-vertical'                     : {
        title          : 'Stepper vertical',
        component      : StepperVerticalExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-basic-flex'                     : {
        title          : 'Basic use of `<mat-table>` (uses display flex)',
        component      : TableBasicFlexExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-basic'                          : {
        title          : 'Basic use of `<table mat-table>`',
        component      : TableBasicExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-dynamic-columns'                : {
        title          : 'Table dynamically changing the columns displayed',
        component      : TableDynamicColumnsExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-expandable-rows'                : {
        title          : 'Table with expandable rows',
        component      : TableExpandableRowsExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-filtering'                      : {
        title          : 'Table with filtering',
        component      : TableFilteringExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-footer-row'                     : {
        title          : 'Footer row table',
        component      : TableFooterRowExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-http'                           : {
        title          : 'Table retrieving data through HTTP',
        component      : TableHttpExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-multiple-header-footer'         : {
        title          : 'Table with multiple header and footer rows',
        component      : TableMultipleHeaderFooterExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-overview'                       : {
        title          : 'Data table with sorting, pagination, and filtering.',
        component      : TableOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-pagination'                     : {
        title          : 'Table with pagination',
        component      : TablePaginationExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-row-context'                    : {
        title          : 'Table showing each row context properties.',
        component      : TableRowContextExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-selection'                      : {
        title          : 'Table with selection',
        component      : TableSelectionExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-sorting'                        : {
        title          : 'Table with sorting',
        component      : TableSortingExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-sticky-columns'                 : {
        title          : 'Table with sticky columns',
        component      : TableStickyColumnsExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-sticky-complex-flex'            : {
        title          : 'Flex-layout tables with toggle-able sticky headers, footers, and columns',
        component      : TableStickyComplexFlexExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-sticky-complex'                 : {
        title          : 'Tables with toggle-able sticky headers, footers, and columns',
        component      : TableStickyComplexExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-sticky-footer'                  : {
        title          : 'Table with a sticky footer',
        component      : TableStickyFooterExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-sticky-header'                  : {
        title          : 'Table with sticky header',
        component      : TableStickyHeaderExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-text-column-advanced'           : {
        title          : 'Use of \'mat-text-column\' with various configurations of the interface.',
        component      : TableTextColumnAdvancedExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-text-column'                    : {
        title          : 'Use of `mat-text-column` which can be used for simple columns that only need to display\na text value for the header and cells.',
        component      : TableTextColumnExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'table-wrapped'                        : {
        title          : 'Table example that shows how to wrap a table component for definition and behavior reuse.',
        component      : TableWrappedExample,
        additionalFiles: ['wrapper-table.html'],
        selectorName   : 'TableWrappedExample, WrapperTable'
    },
    'tab-group-align'                      : {
        title          : 'Tab group with aligned labels',
        component      : TabGroupAlignExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tab-group-animations'                 : {
        title          : 'Tab group animations',
        component      : TabGroupAnimationsExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tab-group-async'                      : {
        title          : 'Tab group with asynchronously loading tab contents',
        component      : TabGroupAsyncExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tab-group-basic'                      : {
        title          : 'Basic use of the tab group',
        component      : TabGroupBasicExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tab-group-custom-label'               : {
        title          : 'Using tabs with a custom label template',
        component      : TabGroupCustomLabelExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tab-group-dynamic-height'             : {
        title          : 'Tab group with dynamic height based on tab contents',
        component      : TabGroupDynamicHeightExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tab-group-dynamic'                    : {
        title          : 'Tab group with dynamically changing tabs',
        component      : TabGroupDynamicExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tab-group-header-below'               : {
        title          : 'Tab group with the headers on the bottom',
        component      : TabGroupHeaderBelowExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tab-group-lazy-loaded'                : {
        title          : 'Tab group where the tab content is loaded lazily (when activated)',
        component      : TabGroupLazyLoadedExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tab-group-stretched'                  : {
        title          : 'Tab group with stretched labels',
        component      : TabGroupStretchedExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tab-group-theme'                      : {
        title          : 'Customizing the theme options on the tab group',
        component      : TabGroupThemeExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tab-nav-bar-basic'                    : {
        title          : 'Basic use of the tab nav bar',
        component      : TabNavBarBasicExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'toolbar-multirow'                     : {
        title          : 'Multi-row toolbar',
        component      : ToolbarMultirowExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'toolbar-overview'                     : {
        title          : 'Basic toolbar',
        component      : ToolbarOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tooltip-auto-hide'                    : {
        title          : 'Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.',
        component      : TooltipAutoHideExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tooltip-custom-class'                 : {
        title          : 'Tooltip that can have a custom class applied.',
        component      : TooltipCustomClassExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tooltip-delay'                        : {
        title          : 'Tooltip with a show and hide delay',
        component      : TooltipDelayExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tooltip-disabled'                     : {
        title          : 'Tooltip that can be disabled',
        component      : TooltipDisabledExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tooltip-manual'                       : {
        title          : 'Tooltip that can be manually shown/hidden.',
        component      : TooltipManualExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tooltip-message'                      : {
        title          : 'Tooltip with a changing message',
        component      : TooltipMessageExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tooltip-modified-defaults'            : {
        title          : 'Tooltip with a show and hide delay',
        component      : TooltipModifiedDefaultsExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tooltip-overview'                     : {
        title          : 'Basic tooltip',
        component      : TooltipOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tooltip-position'                     : {
        title          : 'Tooltip with a custom position',
        component      : TooltipPositionExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tree-checklist'                       : {
        title          : 'Tree with checkboxes',
        component      : TreeChecklistExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tree-dynamic'                         : {
        title          : 'Tree with dynamic data',
        component      : TreeDynamicExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tree-flat-overview'                   : {
        title          : 'Tree with flat nodes',
        component      : TreeFlatOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tree-loadmore'                        : {
        title          : 'Tree with partially loaded data',
        component      : TreeLoadmoreExample,
        additionalFiles: [],
        selectorName   : ''
    },
    'tree-nested-overview'                 : {
        title          : 'Tree with nested nodes',
        component      : TreeNestedOverviewExample,
        additionalFiles: [],
        selectorName   : ''
    }
};

export const EXAMPLE_LIST = [
    /*CdkPopoverEditCdkTableFlexExample,
    CdkPopoverEditCdkTableExample,
    CdkPopoverEditCellSpanVanillaTableExample,
    CdkPopoverEditTabOutVanillaTableExample,
    CdkPopoverEditVanillaTableExample,
    FocusMonitorDirectivesExample,
    FocusMonitorFocusViaExample,
    FocusMonitorOverviewExample,
    CdkClipboardOverviewExample,
    CdkDragDropAxisLockExample,
    CdkDragDropBoundaryExample,
    CdkDragDropConnectedSortingGroupExample,
    CdkDragDropConnectedSortingExample,
    CdkDragDropCustomPlaceholderExample,
    CdkDragDropCustomPreviewExample,
    CdkDragDropDelayExample,
    CdkDragDropDisabledSortingExample,
    CdkDragDropDisabledExample,
    CdkDragDropEnterPredicateExample,
    CdkDragDropFreeDragPositionExample,
    CdkDragDropHandleExample,
    CdkDragDropHorizontalSortingExample,
    CdkDragDropOverviewExample,
    CdkDragDropRootElementExample,
    CdkDragDropSortingExample,
    CdkPlatformOverviewExample,
    CdkPortalOverviewExample,
    ComponentPortalExample,
    CdkVirtualScrollContextExample,
    CdkVirtualScrollCustomStrategyExample,
    CdkVirtualScrollDataSourceExample,
    CdkVirtualScrollDlExample,
    CdkVirtualScrollFixedBufferExample,
    CdkVirtualScrollHorizontalExample,
    CdkVirtualScrollOverviewExample,
    CdkVirtualScrollTemplateCacheExample,
    CdkCustomStepperWithoutFormExample,
    CustomStepper,
    CdkTableBasicFlexExample,
    CdkTableBasicExample,
    TextFieldAutofillDirectiveExample,
    TextFieldAutofillMonitorExample,
    TextFieldAutosizeTextareaExample,
    CdkTreeFlatExample,
    CdkTreeNestedExample,
    PopoverEditCellSpanMatTableExample,
    PopoverEditMatTableFlexExample,
    PopoverEditMatTableExample,
    PopoverEditTabOutMatTableExample,*/
    AutocompleteAutoActiveFirstOptionExample,
    AutocompleteDisplayExample,
    AutocompleteFilterExample,
    AutocompleteOptgroupExample,
    AutocompleteOverviewExample,
    AutocompletePlainInputExample,
    AutocompleteSimpleExample,
    BadgeOverviewExample,
    BottomSheetOverviewExample,
    BottomSheetOverviewExampleSheet,
    ButtonToggleAppearanceExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
    ButtonOverviewExample,
    ButtonTypesExample,
    CardFancyExample,
    CardOverviewExample,
    CheckboxConfigurableExample,
    CheckboxOverviewExample,
    ChipsAutocompleteExample,
    ChipsDragDropExample,
    ChipsInputExample,
    ChipsOverviewExample,
    ChipsStackedExample,
    ElevationOverviewExample,
    RippleOverviewExample,
    DatepickerApiExample,
    DatepickerColorExample,
    DatepickerCustomHeaderExample,
    ExampleHeader,
    DatepickerCustomIconExample,
    DatepickerDateClassExample,
    DatepickerDisabledExample,
    DatepickerEventsExample,
    DatepickerFilterExample,
    DatepickerFormatsExample,
    DatepickerLocaleExample,
    DatepickerMinMaxExample,
    DatepickerMomentExample,
    DatepickerOverviewExample,
    DatepickerStartViewExample,
    DatepickerTouchExample,
    DatepickerValueExample,
    DatepickerViewsSelectionExample,
    DialogContentExample,
    DialogContentExampleDialog,
    DialogDataExample,
    DialogDataExampleDialog,
    DialogElementsExample,
    DialogElementsExampleDialog,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
    DividerOverviewExample,
    ExpansionExpandCollapseAllExample,
    ExpansionOverviewExample,
    ExpansionStepsExample,
    FormFieldAppearanceExample,
    FormFieldCustomControlExample,
    MyTelInput,
    FormFieldErrorExample,
    FormFieldHintExample,
    FormFieldLabelExample,
    FormFieldOverviewExample,
    FormFieldPrefixSuffixExample,
    FormFieldThemingExample,
    GridListDynamicExample,
    GridListOverviewExample,
    IconOverviewExample,
    IconSvgExample,
    InputClearableExample,
    InputErrorStateMatcherExample,
    InputErrorsExample,
    InputFormExample,
    InputHintExample,
    InputOverviewExample,
    InputPrefixSuffixExample,
    ListOverviewExample,
    ListSectionsExample,
    ListSelectionExample,
    MenuIconsExample,
    MenuOverviewExample,
    MenuPositionExample,
    NestedMenuExample,
    PaginatorConfigurableExample,
    PaginatorOverviewExample,
    ProgressBarBufferExample,
    ProgressBarConfigurableExample,
    ProgressBarDeterminateExample,
    ProgressBarIndeterminateExample,
    ProgressBarQueryExample,
    ProgressSpinnerConfigurableExample,
    ProgressSpinnerOverviewExample,
    RadioNgModelExample,
    RadioOverviewExample,
    SelectCustomTriggerExample,
    SelectDisabledExample,
    SelectErrorStateMatcherExample,
    SelectFormExample,
    SelectHintErrorExample,
    SelectMultipleExample,
    SelectNoRippleExample,
    SelectOptgroupExample,
    SelectOverviewExample,
    SelectPanelClassExample,
    SelectResetExample,
    SelectValueBindingExample,
    SidenavAutosizeExample,
    SidenavBackdropExample,
    SidenavDisableCloseExample,
    SidenavDrawerOverviewExample,
    SidenavFixedExample,
    SidenavModeExample,
    SidenavOpenCloseExample,
    SidenavOverviewExample,
    SidenavPositionExample,
    SidenavResponsiveExample,
    SlideToggleConfigurableExample,
    SlideToggleFormsExample,
    SlideToggleOverviewExample,
    SliderConfigurableExample,
    SliderFormattingExample,
    SliderOverviewExample,
    SnackBarComponentExample,
    PizzaPartyComponent,
    SnackBarOverviewExample,
    SnackBarPositionExample,
    SortOverviewExample,
    StepperEditableExample,
    StepperErrorsExample,
    StepperLabelPositionBottomExample,
    StepperOptionalExample,
    StepperOverviewExample,
    StepperStatesExample,
    StepperVerticalExample,
    TableBasicFlexExample,
    TableBasicExample,
    TableDynamicColumnsExample,
    TableExpandableRowsExample,
    TableFilteringExample,
    TableFooterRowExample,
    TableHttpExample,
    TableMultipleHeaderFooterExample,
    TableOverviewExample,
    TablePaginationExample,
    TableRowContextExample,
    TableSelectionExample,
    TableSortingExample,
    TableStickyColumnsExample,
    TableStickyComplexFlexExample,
    TableStickyComplexExample,
    TableStickyFooterExample,
    TableStickyHeaderExample,
    TableTextColumnAdvancedExample,
    TableTextColumnExample,
    TableWrappedExample,
    WrapperTable,
    TabGroupAlignExample,
    TabGroupAnimationsExample,
    TabGroupAsyncExample,
    TabGroupBasicExample,
    TabGroupCustomLabelExample,
    TabGroupDynamicHeightExample,
    TabGroupDynamicExample,
    TabGroupHeaderBelowExample,
    TabGroupLazyLoadedExample,
    TabGroupStretchedExample,
    TabGroupThemeExample,
    TabNavBarBasicExample,
    ToolbarMultirowExample,
    ToolbarOverviewExample,
    TooltipAutoHideExample,
    TooltipCustomClassExample,
    TooltipDelayExample,
    TooltipDisabledExample,
    TooltipManualExample,
    TooltipMessageExample,
    TooltipModifiedDefaultsExample,
    TooltipOverviewExample,
    TooltipPositionExample,
    TreeChecklistExample,
    TreeDynamicExample,
    TreeFlatOverviewExample,
    TreeLoadmoreExample,
    TreeNestedOverviewExample
];

@NgModule({
    imports        : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        A11yModule,
        CdkStepperModule,
        CdkTableModule,
        CdkTreeModule,
        DragDropModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        PortalModule,
        ScrollingModule
    ],
    declarations   : EXAMPLE_LIST,
    entryComponents: EXAMPLE_LIST,
    exports        : EXAMPLE_LIST
})
export class ExampleModule
{
}
