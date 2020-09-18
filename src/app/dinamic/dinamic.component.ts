import { Component, OnInit } from '@angular/core';
import { AddItem } from '../models/ad-item';
import { AdService } from '../services/ad.service';
@Component({
    selector: 'app-dinamic',
    templateUrl: './dinamic.component.html',
    styleUrls: ['./dinamic.component.scss'],
})
export class DinamicComponent implements OnInit {
    ads: AddItem[];
    constructor(private _ad: AdService) {}

    ngOnInit() {
        this.ads = this._ad.getAds();
    }
}
