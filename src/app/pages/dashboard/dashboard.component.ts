import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScriptService } from 'src/app/services/scripts.service';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    contadores: number[] = [];
    constructor(private router: Router, private _load: ScriptService) {}

    ngOnInit() {
        // (async ()=>{
        //  await  this._load.laodStyles(['assets/bootstrap/bootstrap.min.css']);
        // })().then(()=>{
        //   console.log('ready');
        // })
    }
    navegar() {}
}
