import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ExercicesRoutingModule } from "./exercices-routing.module";
import { ExercicesComponent } from "./exercices.component";
import { MatButtonModule } from "@angular/material/button";
import {
  MatIconModule,
  MatToolbarModule,
  MatGridListModule,
  MatSidenavModule,
  MatListModule,
} from "@angular/material";
import { FormsModule } from "@angular/forms";

const material = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatGridListModule,
  MatSidenavModule,
  MatListModule,
];
@NgModule({
  declarations: [ExercicesComponent],
  imports: [CommonModule, FormsModule, ExercicesRoutingModule, material],
})
export class ExercicesModule {}
