import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Page1Component } from './pages/page1/page1.component';


const routes: Routes = [
   {path : 'dashboard' ,  component: DashboardComponent },
   {path : 'portafolio' , component: Page1Component},
   {path: '' ,pathMatch:'full' ,redirectTo : 'portafolio'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash :true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
