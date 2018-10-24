export const mockWithAuth = (...data) => config => {

    // If the Authorization header doesn't exist, return "401 Unauthorized"
    // Since this is only for Mocking purposes, we don't need to see the
    // actual token. Just make sure there is an Authorization header and
    // it starts with "Bearer ".
    if ( !config.headers.Authorization || !config.headers.Authorization.startsWith('Bearer ') )
    {
        return [401];
    }

    // Otherwise, continue as normal
    return typeof data[0] === 'function' ? data[0](config) : data;
};
