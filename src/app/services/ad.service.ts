import { Injectable } from '@angular/core';
import { AddItem } from '../models/ad-item';
import { AdGaleryComponent } from '../components/ad-galery/ad-galery.component';
import { AdtextComponent } from '../components/adtext/adtext.component';
@Injectable({
    providedIn: 'root',
})
export class AdService {
    constructor() {}

    getAds() {
        return [
            new AddItem(AdGaleryComponent, {
                title: 'hello word',
                text: 'buenas tarde',
            }),
            new AddItem(AdGaleryComponent, {
                title: 'hello word',
                text: 'buenas tarde',
            }),
            new AddItem(AdtextComponent, {
                title: 'hello text',
                text: 'buenas tarde',
            }),
            new AddItem(AdtextComponent, {
                title: 'hello text 2',
                text: 'buenas tarde',
            }),
        ];
    }
}
