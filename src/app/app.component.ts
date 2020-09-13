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
     this.disposeModal();
  }
  private  disposeModal(){
  //   let modal : HTMLDivElement = document.querySelector('.cargar');
  //  modal.style.display = 'none';
  }
}
