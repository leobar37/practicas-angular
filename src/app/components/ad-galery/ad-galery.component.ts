import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-ad-galery',
    templateUrl: './ad-galery.component.html',
    styleUrls: ['./ad-galery.component.scss'],
})
export class AdGaleryComponent implements OnInit {
    @Input() data: any;
    constructor() {
        console.log(this.data);
    }

    ngOnInit() {}
}
