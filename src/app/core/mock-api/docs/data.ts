export const docs = {
    changelog         : {},
    gettingStarted    : {},
    buildingAndServing: {},
    components        : {
        navigation: [
            {
                type   : 'text',
                // language=HTML
                content: `
                    <p class="title">Navigation</p>
                    <p>
                        <code>asm-navigation</code> is a component that can be used to create application wide navigation. It has a built in
                        programmable drawer with different styles.
                    </p>
                    <p class="message warning">
                        Navigation component is not suitable for multi use. It can only be used once in the entire application.
                    </p>
                    <p class="subtitle">
                        Storing navigation data
                    </p>
                    <p>
                        Before using the navigation component, data must be stored in the service using the <code>storeNavigation</code>
                        method of the <code>AsmNavigationService</code>
                    </p>
                `
            },
            {
                type    : 'code',
                language: 'typescript',
                // language=TypeScript
                content : `
                    // Get navigation data from a database or a file
                    const navigationData = {...};

                    // Store navigation data as the 'default' navigation
                    this.asmNavigationService.storeNavigation('default', navigationData);
                `
            },
            {
                type   : 'text',
                // language=HTML
                content: `
                    <p>
                        After storing the data, current navigation must be set using the <code>setCurrentNavigation</code> method. This will
                        show the navigation data in the navigation component.
                    </p>
                `
            },
            {
                type    : 'code',
                language: 'typescript',
                // language=TypeScript
                content : `
                    // Set the 'default' as the current navigation
                    this.asmNavigationService.setCurrentNavigation('default');
                `
            },
            {
                type   : 'text',
                // language=HTML
                content: `
                    <p class="subtitle">
                        Storing multiple navigation data
                    </p>
                    <p>
                        Multiple navigation data can also be stored in the service with different keys. That is particularly useful if
                        different set of navigation data needed by the app such as different navigation for different user groups or for
                        different areas of the app.
                    </p>
                `
            },
            {
                type    : 'code',
                language: 'typescript',
                // language=TypeScript
                content : `
                    // Get navigation data from a database or a file
                    const adminNavigationData = {...};
                    const userNavigationData = {...};

                    // Store multiple navigation data 
                    this.asmNavigationService.storeNavigation('admin', adminNavigationData);
                    this.asmNavigationService.storeNavigation('user', userNavigationData);
                `
            },
            {
                type   : 'text',
                // language=HTML
                content: `
                    <p>
                        Depending on the need, navigation data can be switched easily using the <code>setCurrentNavigation</code> method.
                    </p>
                `
            },
            {
                type    : 'code',
                language: 'typescript',
                // language=TypeScript
                content : `
                    // If the current user is an admin...
                    if ( this.userService.isAdmin )
                    {
                        // Set the 'admin' as the current navigation
                        this.asmNavigationService.setCurrentNavigation('admin');
                    }
                    // If the current user is not an admin...
                    else
                    {
                        // Set the 'user' as the current navigation
                        this.asmNavigationService.setCurrentNavigation('user');
                    }
                `
            },
            {
                type   : 'text',
                // language=HTML
                content: `
                    <p class="subtitle">
                        Using the component
                    </p>
                    <p>
                        In order to use the navigation component, <code>AsmNavigationModule</code> must be imported into the related module.
                        Following inputs are available for customizing and controlling the component and its built-in drawer.
                    </p>
                `
            },
            {
                type    : 'code',
                language: 'html',
                // language=HTML
                content : `
                    <asm-navigation [name]="'leftNavigation'"
                                    [appearance]="'classic'"
                                    [mode]="isScreenSmall ? 'over' : 'side'"
                                    [position]="'left'"
                                    [autoCollapse]="true"
                                    [opened]="!isScreenSmall"
                                    [showTooltips]="false"
                                    [transparentOverlay]="false"
                    ></asm-navigation>
                `
            },
            {
                type   : 'text',
                // language=HTML
                content: `
                    <div class="docs-simple-table">

                        <table>
                            <thead>
                                <tr>
                                    <th>Input</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <code>name</code>
                                        <span class="required"
                                              title="Required">R
                                        </span>
                                    </td>
                                    <td>String</td>
                                    <td>
                                        <p>
                                            Name of the component. The navigation component must have a name which will allow its
                                            drawer to be controlled from outside using the navigation service.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>appearance</code>
                                        <span class="required"
                                              title="Required">R
                                        </span>
                                    </td>
                                    <td>String Literal</td>
                                    <td>
                                        <p>
                                            Sets the appearance of the navigation.
                                        </p>
                                        <p class="allowed-values-title">
                                            Allowed values
                                        </p>
                                        <p>
                                            <code>'classic' | 'compact' | 'dense' | 'thin'</code>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>mode</code>
                                        <span class="required"
                                              title="Required">R
                                        </span>
                                    </td>
                                    <td>String Literal</td>
                                    <td>
                                        <p>
                                            Sets the navigation drawer behavior. <code>over</code> mode opens the navigation on top of
                                            the content while <code>side</code> mode will push the content when its opened.
                                        </p>
                                        <p class="allowed-values-title">
                                            Allowed values
                                        </p>
                                        <p>
                                            <code>'over' | 'side'</code>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>position</code>
                                        <span class="required"
                                              title="Required">R
                                        </span>
                                    </td>
                                    <td>String Literal</td>
                                    <td>
                                        <p>
                                            Sets the position of the navigation on the screen. It's required for navigation drawer to
                                            work correctly.
                                        </p>
                                        <p class="allowed-values-title">
                                            Allowed values
                                        </p>
                                        <p>
                                            <code>'left' | 'right'</code>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>autoCollapse</code></td>
                                    <td>Boolean</td>
                                    <td>
                                        <p>
                                            Activates / deactivates the auto collapse for the collapsable navigation items. When activated,
                                            currently expanded item will be collapsed automatically when another item expanded. If the
                                            currently expanded item has the active menu item, then it won't be collapsed.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>opened</code></td>
                                    <td>Boolean</td>
                                    <td>
                                        <p>
                                            Sets the opened status of the navigation drawer. Useful for manually opening and closing the
                                            drawer based on certain conditions such as screen size changes or <code>mode</code> changes.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>showTooltips</code></td>
                                    <td>Boolean</td>
                                    <td>
                                        <p>
                                            Shows the title of navigation items as a tooltip. Useful in certain appearances.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>transparentOverlay</code></td>
                                    <td>Boolean</td>
                                    <td>
                                        <p>
                                            Makes the overlay that helps closing the navigation drawer on <code>over</code> mode
                                            transparent.
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                type   : 'text',
                // language=HTML
                content: `
                    <p class="subtitle">
                        Using the service
                    </p>
                    <p>
                        In order to use the navigation service, <code>AsmNavigationModule</code> must be imported into the related module.
                        Following methods are available to use.
                    </p>
                    <div class="table-wrapper">

                        <table class="parameters">
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="parameter"><code>registerComponent(name, component)</code></div>
                                        <div class="value">void</div>
                                    </td>
                                    <td>
                                        <div class="description">
                                            <p>
                                                Navigation component uses this method to register itself to the service.
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="parameter"><code>deregisterComponent</code></div>
                                        <div class="value">void</div>
                                    </td>
                                    <td>
                                        <div class="description">
                                            <p>
                                                Navigation component uses this method to deregister itself from the service.
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="parameter"><code>getComponent(name)</code></div>
                                        <div class="value">AsmNavigationComponent</div>
                                    </td>
                                    <td>
                                        <div class="description">
                                            <p>
                                                Use this method to access the navigation component. Useful for controlling the navigation
                                                drawer as well as other aspects of the component.
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="parameter"><code>storeNavigation</code></div>
                                        <div class="value">void</div>
                                    </td>
                                    <td>
                                        <div class="description">
                                            <p>
                                                Use this method
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                type   : 'text',
                // language=HTML
                content: `
                    <p class="subtitle">
                        Navigation item data model
                    </p>
                    <p>
                        Each navigation item has following parameters that can be set.
                    </p>
                    <div class="docs-simple-table">

                        <table>
                            <thead>
                                <tr>
                                    <th>Parameter</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <code>id</code>
                                        <span class="required"
                                              title="Required">R
                                        </span>
                                    </td>
                                    <td>String</td>
                                    <td>
                                        <p>
                                            All navigation items must have a unique id for actions to be performed on such as update and
                                            remove.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>type</code>
                                        <span class="required"
                                              title="Required">R
                                        </span>
                                    </td>
                                    <td>String Literal</td>
                                    <td>
                                        <p>
                                            Type of the navigation item.
                                        </p>
                                        <p class="allowed-values-title">
                                            Allowed values
                                        </p>
                                        <p>
                                            <code>'aside' | 'collapsable' | 'link' | 'subheader'</code>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>title</code>
                                        <span class="required"
                                              title="Required">R
                                        </span>
                                    </td>
                                    <td>String</td>
                                    <td>
                                        <p>
                                            Title of the navigation item.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>subtitle</code></td>
                                    <td>String</td>
                                    <td>
                                        <p>
                                            Subtitle / description of the navigation item.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>hidden</code></td>
                                    <td>Boolean</td>
                                    <td>
                                        <p>
                                            Shows / hides the navigation item
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>link</code></td>
                                    <td>String</td>
                                    <td>
                                        <p>
                                            Internal link for the navigation item, only works if the item type is <code>link</code>.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>externalLink</code></td>
                                    <td>String</td>
                                    <td>
                                        <p>
                                            External web link for the navigation item, only works if the item type is <code>link</code>.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>exactMatch</code></td>
                                    <td>Boolean</td>
                                    <td>
                                        <p>
                                            Leverages Angular Router's <code>exact</code> parameter for the active status of the
                                            navigation item. <a href="https://angular.io/guide/router#active-router-links"
                                                                target="_blank">#Reference</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>function</code></td>
                                    <td>Any</td>
                                    <td>
                                        <p>
                                            Custom function to trigger when the navigation item clicked.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>classes</code></td>
                                    <td>String</td>
                                    <td>
                                        <p>
                                            Custom class names for the navigation item.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>icon</code></td>
                                    <td>String</td>
                                    <td>
                                        <p>
                                            Name of the icon for the navigation item.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>iconFontSet</code></td>
                                    <td>String</td>
                                    <td>
                                        <p>
                                            fontSet attribute of the mat-icon element that is used in the navigation item.
                                            <a href="https://material.angular.io/components/icon/api#directives"
                                               target="_blank">#Reference</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>badge</code></td>
                                    <td>Any</td>
                                    <td>
                                        <p>
                                            Object of the badge.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>badge.title</code></td>
                                    <td>String</td>
                                    <td>
                                        <p>
                                            Title of the badge.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>badge.style</code></td>
                                    <td>String Literal</td>
                                    <td>
                                        <p>
                                            Style of the badge.
                                        </p>
                                        <p class="allowed-values-title">
                                            Allowed values
                                        </p>
                                        <p>
                                            <code>'rectangle' | 'rounded' | 'simple'</code>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>badge.background</code></td>
                                    <td>String</td>
                                    <td>
                                        <p>
                                            Background color of the badge.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>badge.color</code></td>
                                    <td>String</td>
                                    <td>
                                        <p>
                                            Foreground color of the badge.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>children</code></td>
                                    <td>Array</td>
                                    <td>
                                        <p>
                                            Array of navigation items as children items.
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            }
        ]
    }
};
