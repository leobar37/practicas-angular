import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ExercicesComponent } from "./exercices.component";

const routes: Routes = [{ path: "paralax", component: ExercicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercicesRoutingModule {}
