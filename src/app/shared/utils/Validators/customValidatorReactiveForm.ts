import { AbstractControl } from '@angular/forms';
import { ProductsService } from 'app/core/products/products.service';
import { of } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { AuthService } from '../../../core/auth/auth.service';

export class CustomValidatorReactiveForm {
  static checkFieldRutExist(services: AuthService) {
    return (control: AbstractControl) => {
      const hasChangedValue = control.pristine;
      const value = control.value;

      if (!hasChangedValue) {
        return services.checkAvailableFieldRutEmpresa(value).pipe(
          debounceTime(1000),
          map((resp: []) => {
            if (resp.length !== 0) {
              return { rut_existe: true };
            }
            return null;
          })
        );
      }
      return of(null);
    };
  }

  static checkFieldEmailExist(services: AuthService) {
    return (control: AbstractControl) => {
      const hasChangedValue = control.pristine;
      const value = control.value;

      if (!hasChangedValue) {
        return services.checkAvailableFieldEmail(value).pipe(
          debounceTime(1000),
          map((resp: []) => {
            if (resp.length !== 0) {
              return { email_existe: true };
            }
            return null;
          })
        );
      }
      return of(null);
    };
  }

  static checkUniqueCode(services: ProductsService) {
    return (control: AbstractControl) => {
      const hasChangedValue = control.pristine;
      const value = control.value;

      if (!hasChangedValue) {
        return services.checkCodeExist(value).pipe(
          debounceTime(1000),
          map((resp: []) => {
            if (resp.length !== 0) {
              return { code_exist: true };
            }
            return null;
          })
        );
      }
      return of(null);
    };
  }

  static checkBrandExist(services: ProductsService) {
    return (control: AbstractControl) => {
      const hasChangedValue = control.pristine;
      const value: string = control.value.trim().toLowerCase();

      if (!hasChangedValue) {
        return services.checkBrandExist(value).pipe(
          debounceTime(1000),
          map((resp: []) => {
            if (value === '' || undefined) {
              return { empty_value: true };
            }
            if (resp.length !== 0) {
              return { brand_exist: true };
            }
            return null;
          })
        );
      }
      return of(null);
    };
  }
}
