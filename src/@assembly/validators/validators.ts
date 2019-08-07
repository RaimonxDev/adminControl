import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class AsmValidators
{
    /**
     * Confirm password validator
     *
     * @param passwordField
     * @param passwordConfirmField
     * @returns {ValidationErrors | null}
     */
    static confirmPassword(passwordField: string = 'password', passwordConfirmField: string = 'passwordConfirm'): ValidatorFn
    {
        return (control: AbstractControl): ValidationErrors | null => {

            if ( !control.parent || !control )
            {
                return null;
            }

            const password = control.parent.get(passwordField);
            const passwordConfirm = control.parent.get(passwordConfirmField);

            if ( !password || !passwordConfirm )
            {
                return null;
            }

            if ( passwordConfirm.value === '' )
            {
                return null;
            }

            if ( password.value === passwordConfirm.value )
            {
                return null;
            }

            return {
                passwordsNotMatching: true
            };

        };
    }
}
