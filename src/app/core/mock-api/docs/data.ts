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
                        Usage
                    </p>
                    <p>
                        In order to use navigation, first the data must be loaded to the component using the <code>storeNavigation</code>
                        method of the <code>AsmNavigationService</code> :
                    </p>
                `
            },
            {
                type    : 'code',
                language: 'typescript',
                // language=TypeScript
                content : `
                    // Get the navigation data from a Database or a file
                    const navigationData = {...};

                    // Store the navigation data as the 'default' navigation
                    this.asmNavigationService.storeNavigation('default', navigationData);
                `
            },
            {
                type    : 'code',
                language: 'html',
                // language=HTML
                content : `
                    <div class="test">Test</div>
                `
            }
        ]
    }
};
