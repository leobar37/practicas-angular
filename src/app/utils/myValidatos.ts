import {
    AbstractControl,
    ValidatorFn,
    ValidationErrors,
    FormGroup,
} from '@angular/forms';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';

export class MyCustomValidators {
    static isYounger(control: AbstractControl) {
        const value: number = control.value;
        if (value < 18) {
            return { isYounger: true };
        } else {
            return null;
        }
    }
    static limitNumber(limit: number): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value: number = control.value;
            if (value > limit) {
                return { limit, actual: value };
            } else {
                return null;
            }
        };
    }
    static identStrings(cads: [string, string]): ValidatorFn {
        return (groupForm: FormGroup): ValidationErrors | null => {
            const contr = cads.map((item) => groupForm.get(item).value);

            return contr[0] === contr[1] ? { equalsStrings: true } : null;
        };
    }

    static checkEmail(service: UserService) {
        return (control: AbstractControl) => {
            const value = control.value;
            return service.getEmailIsValid(value).pipe(
                map((data) => {
                    if (data) {
                        return {
                            emailExists: true,
                        };
                    } else {
                        return null;
                    }
                }),
            );
        };
    }
}
