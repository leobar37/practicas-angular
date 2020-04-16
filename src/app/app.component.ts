import { Component } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'new app';
  constructor(private titulo:Title){
    titulo.setTitle('new app')
  

  }
}
