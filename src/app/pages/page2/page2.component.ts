import { Component, OnInit } from '@angular/core';
import { activar_modal, desactivar_modal } from '../../scripts/alternos';
import { mainPage2 } from './elements.control';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  constructor() { 
    activar_modal();
  }
  ngOnInit() {
    desactivar_modal();
    mainPage2();
  }

}
