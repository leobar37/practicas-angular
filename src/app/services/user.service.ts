import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { of, pipe } from 'rxjs';
import { delay, map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root',
})
export class UserService {
    emails = [
        'iem3n19939@jembott.com',
        'efcbadroc@zmailforbusiness.com',
        'leobar37@gmil.com',
    ];
    constructor() {}

    getEmailIsValid(email: string): Observable<boolean> {
        return of(...this.emails).pipe(
            delay(3000),
            map((data) => {
                console.log(data);
                return data;
            }),
            map((em) => em === email),
        );
    }
}
