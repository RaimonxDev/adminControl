import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import MockAdapter from 'axios-mock-adapter';

import { user } from './data';

@Injectable({
    providedIn: 'root'
})
export class MockAuthData
{
    // Data
    private _user = user;
    private _secret = 'YOUR_VERY_CONFIDENTIAL_SECRET_FOR_SIGNING_JWT_TOKENS!!!';

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Return base64 encoded version of the given string
     *
     * @param source
     * @private
     */
    private _base64url(source): string
    {
        // Encode in classical base64
        let encodedSource = CryptoJS.enc.Base64.stringify(source);

        // Remove padding equal characters
        encodedSource = encodedSource.replace(/=+$/, '');

        // Replace characters according to base64url specifications
        encodedSource = encodedSource.replace(/\+/g, '-');
        encodedSource = encodedSource.replace(/\//g, '_');

        // Return the base64 encoded string
        return encodedSource;
    }

    /**
     * Generates a JWT token using CryptoJS library.
     *
     * This generator is mocking purposes only and it is NOT
     * safe to use it in frontend applications in production!
     *
     * @private
     */
    private _generateJWTToken(): string
    {
        // Define token header
        const header = {
            alg: 'HS256',
            typ: 'JWT'
        };

        // Calculate the issued at and expiration dates
        const date = new Date();
        const iat = Math.floor(date.getTime() / 1000);
        const exp = Math.floor((date.setDate(date.getDate() + 7)) / 1000);

        // Define token payload
        const payload = {
            iat   : iat,
            iss   : 'Assembly',
            exp   : exp,
            userId: this._user.id
        };

        // Stringify and encode the header
        const stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
        const encodedHeader = this._base64url(stringifiedHeader);

        // Stringify and encode the payload
        const stringifiedPayload = CryptoJS.enc.Utf8.parse(JSON.stringify(payload));
        const encodedPayload = this._base64url(stringifiedPayload);

        // Sign the encoded header and data
        let signature: any = encodedHeader + '.' + encodedPayload;
        signature = CryptoJS.HmacSHA256(signature, this._secret);
        signature = this._base64url(signature);

        // Build and return the token
        return encodedHeader + '.' + encodedPayload + '.' + signature;
    }

    private _verifyJWTToken(token): boolean
    {
        // Split the token into parts
        const parts     = token.split('.'),
              header    = parts[0],
              payload   = parts[1],
              signature = parts[2];

        // Re-sign and encode the header and payload using the secret
        const signatureCheck = this._base64url(CryptoJS.HmacSHA256(header + '.' + payload, this._secret));

        // Verify that the resulting signature is valid
        return (signature === signatureCheck);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     *
     * @param mock
     */
    init(mock: MockAdapter): void
    {
        // Login
        mock.onPost('api/auth/login')
            .reply((config) => {

                // Parse the data
                const data = JSON.parse(config.data);

                // Login successful
                if ( data.username === 'watkins' && data.password === 'admin' )
                {
                    return [
                        200,
                        {
                            user       : this._user,
                            accessToken: this._generateJWTToken()
                        }
                    ];
                }

                // Invalid credentials
                return [
                    403,
                    {
                        message: 'Wrong username or password'
                    }
                ];
            });

        // Login with using JWT token
        mock.onPost('api/auth/login-with-jwt')
            .reply((config) => {

                // Parse the data
                const data = JSON.parse(config.data);

                // Get the access token
                const accessToken = data.accessToken;

                // Verify the token
                if ( this._verifyJWTToken(accessToken) )
                {
                    return [
                        200,
                        {
                            user       : this._user,
                            accessToken: this._generateJWTToken()
                        }
                    ];
                }

                // Invalid token
                return [
                    401,
                    {
                        message: 'Invalid token'
                    }
                ];
            });

        // Refresh the access token
        mock.onPost('api/auth/refresh-access-token')
            .reply((config) => {

                return [
                    200,
                    {
                        accessToken: this._generateJWTToken()
                    }
                ];
            });
    }
}
