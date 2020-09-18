import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-adtext',
    templateUrl: './adtext.component.html',
    styleUrls: ['./adtext.component.scss'],
})
export class AdtextComponent implements OnInit {
    @Input() data;
    constructor() {
        console.log(this.data);
    }

    ngOnInit() {}
}
