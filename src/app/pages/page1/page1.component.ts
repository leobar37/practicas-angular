import { Component, OnInit } from "@angular/core";
import { cargarEstilos,cargarScripts } from 'src/app/scripts/dependencias';
import { animateCSS,activar_modal, desactivar_modal } from 'src/app/scripts/alternos';
import { mainElements } from './elements.control';
import { ScriptService } from 'src/app/services/scripts.service';

declare var stackedCards: any;
declare function iconate(valor1: any, valor2: any): any;
@Component({
  selector: "app-page1",
  templateUrl: "./page1.component.html",
  styleUrls: ["./page1.component.scss"],
})
export class Page1Component implements OnInit {
  public loading: boolean = true;
  private scripts: string[] = [
    "assets/libs/slider/stackedCards.min.js",
    "assets/libs/sticky/stycky.js",
    "assets/libs/iconate/iconate.js",
    "assets/libs/VanillaTilt/vanilla.js",
  ];
  private estilos: string[] = [
    "assets/libs/slider/stackedCards.css",
    "assets/pages/pageone.css",
    "assets/libs/iconate/iconate.min.css",
  ];
  constructor(
    private _script:ScriptService
  ) {
   
  }
  async ngOnInit() {
    activar_modal();
   await this._script.laodStyles(this.estilos);
   await this._script.loadEscripts(this.scripts);
    mainElements();
    desactivar_modal();
    this.loading = false;
  }

}
