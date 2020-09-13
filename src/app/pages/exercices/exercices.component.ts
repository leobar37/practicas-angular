import { Component, OnInit } from "@angular/core";
import { ScriptService } from "src/app/services/scripts.service";

@Component({
  selector: "app-exercices",
  templateUrl: "./exercices.component.html",
  styleUrls: ["./exercices.component.scss"],
})
export class ExercicesComponent implements OnInit {
  open = false;
  constructor(private _load: ScriptService) {}
  ngOnInit() {
    (async () => {
      await this._load.loadEscripts(["assets/libs/relax/relax.js"]);
    })().then(() => {
      console.log("ready");
    });
  }
}
