import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/services/scripts.service';

@Component({
  selector: 'app-landing-example',
  templateUrl: './landing-example.component.html',
  styleUrls: ['./landing-example.component.scss']
})
export class LandingExampleComponent implements OnInit {

  constructor(
    private _load:ScriptService
  ) { }

  ngOnInit() {
    (async ()=>{
      await  this._load.laodStyles(['assets/bootstrap/bootstrap.min.css']);
     })().then(()=>{
       console.log('ready');
     })
  }

}
